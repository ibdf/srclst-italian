<template>
  <div
    id="mobile-footer"
    class="is-hidden-desktop box"
  >
    <div class="level">
      <div class="level-item has-text-centered">
        <a
          class="mobile-filter"
          :class="isActive ? 'is-active' : ''"
          href="#"
          @click="toggleFilters"
        >
          <div class="icon is-inline-block">
            <i class="fas fa-sliders-h" />
            <div class="count-badge">{{ itemsCount }}</div>
          </div>
          <div
            class="icon-label"
          >
            {{ !isActive ? 'Filters' : 'Close' }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false,
    };
  },
  computed: {
    itemsCount () {
      return this.$store.state.itemsCount;
    },
  },
  methods: {
    toggleFilters () {
      // this.$refs['mobile-filter'].classList.toggle('is-active');
      this.isActive = !this.isActive;
      this.$store.commit('showMobileFilters');
    },
  },
};
</script>
<style lang="scss" scoped>
  #mobile-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 60px;
    background-color: #fff;
    z-index: 999;
    padding: 0.10rem;
    .mobile-filter {
      &.is-active {
        color: #444 !important;
      }
    }
    .icon {
      display: block;
    }
    .icon-label {
      font-size: 0.5rem;
    }
  }
</style>