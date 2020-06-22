<template>
  <div>
    <div class="columns">
      <div class="column is-2-desktop filters-column is-relative">
        <filters
          :filters="filters.filters"
          @activeFilters="filterContent"
        />
      </div>
      <div class="column is-auto">
        <div
          v-if="items.length > 0"
          class="columns is-multiline"
        >
          <div
            v-for="item in items"
            :key="item.src"
            class="column is-half-tablet is-full-mobile is-one-third-desktop"
          >
            <card :card-info="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@/components/card';
import Filters from '@/components/filters';

export default {
  components: {
    Card,
    Filters,
  },
  async asyncData ({ $content, params }) {

    let promises = [];

    promises.push($content('settings/filters').fetch());
    promises.push($content("items").sortBy("name").fetch());

    let values = await Promise.all(promises);

    return {
      filters: values[0],
      items: values[1],
    };

  },
  data () {
    return {
      items: [],
    };
  },
  created () {
    this.filters.filters = this.sortFilters(this.filters.filters);
  },
  methods: {
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

      console.log(where);

      let request = await this.$content("items")
        .only([ "name", "src", "desc", "icon" ])
        .where(where)
        .fetch();

      this.items = request;
    },
  },
};
</script>
<style lang="scss">
  @media screen and (max-width: 1023px) {
    .filters-column {
      width: 0;
      max-width: 0;
      padding: 0;
    }
  }
</style>