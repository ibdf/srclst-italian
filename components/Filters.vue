<template>
  <div
    v-show="showMobileFilters"
    id="filters-wrap"
  >
    <ul id="filters">
      <li
        v-for="(filterItems, filterKey) in filters"
        :key="filterKey"
      >
        <h3 class="is-size-5">
          {{ filterItems.label }}
        </h3>
        <ul
          ref="filter-items"
          class="filter-items"
        >
          <li
            v-for="(filterItem, itemIndex) in filterItems.items"
            :key="filterItem"
            class="filter-item"
            :class="filterKey === 'tags' ? 'is-inline-block' : ''"
          >
            <template v-if="filterKey === 'tags' ? 'tag' : ''">
              <span class="tag">
                <a
                  :ref="`${filterKey}-${itemIndex}`"
                  @click.prevent="filter(filterKey, filterItem, itemIndex)"
                >
                  {{ filterItem }}
                </a>
              </span>&nbsp;
            </template>
            <template v-else>
              <a
                :ref="`${filterKey}-${itemIndex}`"
                @click.prevent="filter(filterKey, filterItem, itemIndex)"
              >
                {{ filterItem }}
              </a>
            </template>
          </li>
        </ul>
      </li>
    </ul>
    <section
      class="section"
    >
      <div
        class="columns"
      >
        <div
          class="column"
        >
          <div
            class="buttons"
            :class="isMobileOnly ? 'is-centered' : ''"
          >
            <button
              class="button is-small is-danger"
              type="button"
              @click="resetAll"
            >
              Clear all filters
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: "Filters",
  props: {
    filters: {
      type: Object,
      default () {
        return {};
      },
    },
  },
  data () {
    return {
      activeFilters: {},
    };
  },
  computed: {
    isMobileOnly () {
      console.log(this.$store.state.mobileBreaks);
      console.log(this.$mq);
      if (this.$store.state.mobileBreaks.includes(this.$mq)) {
        return true;
      }
      return false;
    },
    showMobileFilters () {
      if (!this.$store.state.mobileBreaks.includes(this.$mq)) {
        return true;
      }
      return this.$store.state.showMobileFilters;
    },
  },
  methods: {
    resetAll () {
      Vue.set(this, 'activeFilters', {});
      this.resetActiveLinks();
      this.updateQuery();
    },
    resetActiveLinks () {
      this.$refs['filter-items'].forEach(filter => filter.querySelectorAll('li a.is-active-filter').
        forEach(link => link.classList.remove('is-active-filter')));
    },
    updateQuery () {
      this.$emit('activeFilters', this.activeFilters);
    },
    linkIsActive (key, value) {
      return this.activeFilters[key] && this.activeFilters[key].includes(value) ? true : false;
    },
    filter (key, value, index) {
      if (!this.activeFilters.hasOwnProperty(key)) {
        this.activeFilters[key] = [];
      }
      let itemIndex = this.activeFilters[key].indexOf(value);
      if (itemIndex !== -1) {
        this.activeFilters[key].splice(itemIndex, 1);
        this.$refs[`${key}-${index}`][0].classList.remove("is-active-filter");
      }  else {
        this.activeFilters[key].push(value);
        this.$refs[`${key}-${index}`][0].classList.add("is-active-filter");
      }

      Object.keys(this.activeFilters).forEach(filterKey => {
        if (this.activeFilters[filterKey].length === 0) {
          delete this.activeFilters[filterKey];
        }
      });

      this.updateQuery();
    },
  },
};
</script>
<style lang="scss" scoped>
  #filters-wrap {
    background-color: rgba(#ffffff, 0.95);
    @media only screen and (max-width: 1023px) {
      overflow: scroll;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 40px;
      left: 0;
      padding: 1rem 2rem;
      z-index: 999;
    }
    @media only screen and (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  }
  ul#filters {
    > li {
      border-bottom: 1px solid #efefef;
      padding: 0.5rem 0;
      &:last-of-type {
        border-bottom: 0;
        padding: 0;
      }
    }
    @media only screen and (max-width: 1023px) {
      column-count: 3;
      column-gap: 1rem;
      column-width: 33%;
      li {
        border-bottom: 0;
        display: inline-block;
        &:not(last-of-type) {
          margin-right: .2rem;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      column-count: 2;
    }
    @media only screen and (max-width: 500px) {
      column-count: 1;
    }
  }

  .filter-item {
    a {
      display: inline-block;
      padding: 0.02rem 0.3rem;
    }
    margin-bottom: 1px;
  }
  .is-active-filter {
    background-color: #efefef;
    color: #000;
    &:after {
      content: "[x]";
      font-size: 0.7rem;
      vertical-align: 0.11rem;
    }
  }
  .tag {
    .is-active-filter {
      background-color: transparent;
    }
  }
</style>