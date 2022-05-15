import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // route mode
  router: {
    mode: "hash"
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - webLogin',
    title: 'webLogin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],

    // clarity js integration 

    /* __dangerouslyDisableSanitizers: ['script'],
    script: [{
      hid: 'clarity-script',
      innerHTML: `
          (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "48s43qil47");
        `,
      type: 'text/javascript',
      charset: 'utf-8'
    }] */
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/MaterialIcons+RobotoFont.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'OurMarketVendor',
      short_name: 'OurMarketVendor',
      lang: 'en',
    },
    icon: {
      purpose: 'any'
    },
    workbox: {
      skipWaiting: true,
      runtimeCaching: [{
          urlPattern: 'https://static.ourmarket.tech/',
          handler: 'networkFirst',
          strategyOptions: {
            cacheName: 'landing-page-cache',
            cacheExpiration: {
              maxEntries: 0,
              maxAgeSeconds: 0
            }
          }
        },
        {
          urlPattern: '/_nuxt/',
          handler: 'networkFirst',
          strategyOptions: {
            cacheName: 'landing-page-cache',
            cacheExpiration: {
              maxEntries: 0,
              maxAgeSeconds: 0
            }
          }
        }
      ]
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@cloudmpower/apiconfigloader',
      {
        configDirPath: '/app/api/api_configs/',
        apiUrlFilePath: '/app/api/api_url.js'
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets(env, [preset, options]) {
        return [
          // ["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 2}]
        ];
      },
    },
  },
  server: {
    //  port: 6006, // default: 3000,
    // host: 0
  }
}
