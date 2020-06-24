<template>
  <div
    id="mobile-footer"
    class="is-hidden-desktop box"
  >
    <div class="level">
      <div class="level-item has-text-centered">
        <a
          class="has-badge-rounded"
          data-badge="8"
          href="#"
          @click="toggleFilters"
        >
          <div class="icon">
            <i class="fas fa-sliders-h" />
            <div class="count-badge">{{ itemsCount }}</div>
          </div>
          <div
            class="icon-label"
          >
            Filters
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    itemsCount () {
      return this.$store.state.itemsCount;
    },
  },
  methods: {
    toggleFilters () {
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
    height: 40px;
    background-color: #fff;
    z-index: 999;
    padding: 0.10rem 0;
    .icon {
      display: block;
    }
    .icon-label {
      font-size: 0.5rem;
    }
  }
</style>