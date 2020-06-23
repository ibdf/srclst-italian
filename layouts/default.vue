<template>
  <div>
    <app-header />
    <main id="main">
      <div class="container is-fluid is-fullhd">
        <div class="columns">
          <div class="column">
            <nuxt />
          </div>
        </div>
      </div>
    </main>
    <app-footer />
  </div>
</template>
<script>
import Vue from 'vue';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import '@/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1023,
    desktop: 1215,
    widescreen: 1407,
    fullhd: Infinity,
  },
});

export default {
  name:"LayoutDefault",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="scss">
  #main {
    padding-top: 1rem;
    padding-bottom: 60px;
  }
</style>