module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'admin_provider_panel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

// nuxt.config.js

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: "http://localhost:3001/"
  },
  router: {
    middleware: ['auth']
  },
  auth: {
    strategies: {

      local: {
        scheme: 'refresh',
        token: {
          property: 'access.token'
        },
        refreshToken: {
          property: 'refresh.token'
        },
        endpoints: {
          login: { url: 'api/customer/login', method: 'post'},
          user: { url: 'api/users/me', method: 'get', propertyName: false },
        },
        // tokenRequired: true,
        // tokenType: 'Bearer',
        // autoFetchUser: false
      },

    },
    autoRefresh: {
      enable: true
    },
    redirect: {
      login: '/auth',
      logout: '/',
      callback: '/admin/dashboard',
      home: '/admin/dashboard',
    },
  },

    /*
    ** Build configuration
    */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

