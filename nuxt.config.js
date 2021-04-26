export default {
  target: "static",
  // router: {
  //   base: "https://github.com/kinlextech/stbank-website.git"
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "stbanklaos",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vuesax/dist/vuesax.css", "@/assets/scss/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/vuesax",
    {
      src: "~plugins/vue-scrollmagic.js",
      ssr: false
    },
    { src: "@/plugins/vue-swiper.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/moment"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-i18n"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    // "/api/": {
    //   target: "http://127.0.0.1:3333/api/client",
    //   pathRewrite: { "^/api/": "" }
    // }
  },
  moment: {
    /* module options */
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.js"
      }
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en"
  },
  // env: {
  //   // baseUrl: process.env.BASE_URL || "http://localhost:3000"
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: "@"
    // extend(config, { isClient }) {
    //   // Extend only webpack config for client-bundle
    //   if (isClient) {
    //     config.devtool = "source-map";
    //   }
    // },
    // extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: "appmin",
    //         test: /\.(css|vue)$/,
    //         chunks: "all",
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    // filenames: {
    //   chunk: ({ isDev }) => (isDev ? "[name].js" : "[id].[contenthash].js")
    // },
    // minimize: true
  }
};
