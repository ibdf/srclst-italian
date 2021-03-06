<template>
  <div>
    <div class="columns">
      <div class="column is-2-desktop filters-column is-relative">
        <filters
          :filters="filters"
          :categories="categories"
          @activeFilters="filterContent"
        />
      </div>
      <div class="column is-auto">
        <masonry
          v-if="items.length > 0"
          :cols="{ default: 3, 900: 2, 700: 1 }"
          :gutter="{ default: '1rem', 768: 15, 600: 10 }"
        >
          <div
            v-for="item in items"
            :key="item.src"
            class="masonry-item"
          >
            <card :card-info="item" />
          </div>
        </masonry>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import Card from '@/components/card';
import Filters from '@/components/filters';
import VueMasonry from 'vue-masonry-css';
Vue.use(VueMasonry);

export default {
  components: {
    Card,
    Filters,
  },
  async asyncData ({ $content, params }) {

    let promises = [];

    promises.push($content('settings').fetch());
    promises.push($content("items").sortBy("name").fetch());

    let values = await Promise.all(promises);

    let categories = values[0].categories;
    let items = values[1];
    let filters = {};

    items.forEach(item => {
      Object.keys(item).forEach(itemKey => {
        if (itemKey.startsWith('filter_')) {
          if (!filters[itemKey]) {
            filters[itemKey] = {};
          }
          item[itemKey].forEach(itemFilter => {
            !filters[itemKey][itemFilter] ? filters[itemKey][itemFilter] = 1 : filters[itemKey][itemFilter]++;
          });
        }
      });
    });

    return {
      filters,
      items,
      categories,
    };

  },
  data () {
    return {
      items: [],
      macyInstance: null,
    };
  },
  created () {
    this.filters.filters = this.sortFilters(this.filters.filters);
    this.updateFiltersCount();
  },
  methods: {
    updateFiltersCount () {
      this.$store.commit('itemsCount', this.items.length);
    },
    sortFilters (filters) {
      for (let filterKey in filters) {
        filters[filterKey]['items'] = filters[filterKey]['items'].sort((a, b) => a < b ? -1 : 1);
      }
      return filters;
    },
    async filterContent (filters) {

      let where = {};

      Object.keys(filters).forEach(filter => {
        where[`filter_${filter}`] = { $contains: filters[filter] };
      });

      let request = await this.$content("items")
        .only([ "name", "src", "desc", "icon" ])
        .where(where)
        .fetch();

      this.items = request;
      this.updateFiltersCount();
    },
  },
};
</script>
<style lang="scss">
  body {
    padding-top: 42px;
    -webkit-column-break-inside:avoid;
  }
  @media screen and (max-width: 1023px) {
    .filters-column {
      width: 0;
      max-width: 0;
      padding: 0;
    }
  }

  .masonry-item {
    margin-bottom: 1rem;
  }
  .icon {
    position: relative;
  }
  .count-badge {
    position: absolute;
    top: 0;
    right: -5px;
    background-color: red;
    font-weight: bold;
    color: #fff;
    font-size: .5rem;
    border-radius: 50%;
    z-index: 9999;
    display: block;
    width: 12px;
    height: 12px;
    line-height: 12px;
  }

</style>