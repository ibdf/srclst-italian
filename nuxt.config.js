
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Source List: Italian',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A source list of Italian to help you learn italian' },
      {
        hid: 'no-cache-1',
        "http-equiv": "Pragma",
        content: "no-cache",
      },
      {
        hid: 'no-cache-2',
        "http-equiv": "Expires",
        content: "0",
      },
      {
        hid: 'no-cache-3',
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/scss/app.scss',
      lang: 'scss',
    },
  ],
  styleResources: {
    sass: [
      '~assets/scss/bulma-vars.sass',
    ],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  generate: {
    async routes () {
      const { $content } = require('@nuxt/content');
      const files = await $content().only([ 'path' ]).fetch();
      return files.map(file => file.path === '/index' ? '/' : file.path);
    },
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
};
