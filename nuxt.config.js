const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    middleware: ['data']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/socket.io.js', '@/plugins/v-store.js'],
  // plugins: ['@/plugins/data-provider.js'],

  /*
  ** Nuxt.js modules
  */
  modules: ['~/io'],

  env: {
    DEV_MODE: process.env.NODE_ENV !== 'production',
    WS_URL: process.env.WS_URL || 'http://localhost:3000'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

  // serverMiddleware: ['~/api']
}
