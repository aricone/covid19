/* eslint-disable */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | 北海道 新型コロナウイルスまとめサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、<a href="https://github.com/tokyo-metropolitan-gov/covid19">東京都公式 新型コロナウイルス対策サイト</a>をフォークしたものです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '北海道 新型コロナウイルスまとめサイト'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://admiring-davinci-e0cd70.netlify.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '北海道 新型コロナウイルスまとめサイト'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、<a href="https://github.com/tokyo-metropolitan-gov/covid19">東京都公式 新型コロナウイルス対策サイト</a>をフォークし、Code for Sapporoが開設したものです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://admiring-davinci-e0cd70.netlify.com/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon-precomposed.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.js',
      ssr: true
    },
    '@/plugins/datetime-formatter.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/vuetify', '@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@nuxtjs/moment', ['ja']],
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'ja',
            iso: 'ja_JP'
          }
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja',
          formatFallbackMessages: true
        },
        vueI18nLoader: true
      }
    ],
    'nuxt-svg-loader'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {}
  },
  googleAnalytics: {
    id: 'UA-159982743-1'
  },
  // /*
  // ** Build configuration
  // */
  // build: {
  //   /*
  //   ** You can extend webpack config here
  //   */
  //   extend (config, ctx) {
  //   }
  // },
  manifest: {
    "name": "北海道 新型コロナウイルスまとめサイト",
    "theme_color": "#00a040",
    "background_color": "#ffffff",
    "display": "standalone",
    "Scope": "/",
    "start_url": "/",
    "splash_pages": null
  },
  generate: {
    fallback: true
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  }
}
