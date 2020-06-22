
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
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
      console.log(files.map(file => file.path === '/index' ? '/' : file.path));
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
