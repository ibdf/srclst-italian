<template>
  <div id="app-header">
    <div class="columns is-mobile">
      <div class="column is-half">
        <div id="app-logo">
          <h1 class="is-title has-text-weight-medium">
            SRC<span class="lst has-background-black has-text-white is-inline-block">LST</span>: ITALIAN
          </h1>
        </div>
      </div>
      <div class="column is-half">
        <div class="is-pulled-right	">
          <div class="buttons">
            <a
              href="https://forms.gle/8QRuBNpDkvRUjPDm6"
              class="button is-small is-outlined is-light"
              target="_blank"
            >
              Contribute
            </a>
            <a
              href="https://forms.gle/8H3JuyyhsY8FH2VR9"
              class="button is-small is-light"
              target="_blank"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss">
  #app-header {
    padding: .5rem;
    background-color:#cd212a;
    color: #f4f5f0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
  #app-logo {
    .lst {
      padding: .05rem .1rem;
      background-color: #008c45 !important;
    }
  }
</style>