export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '印象笔记',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IT人员的技术手册，在这里你可以查看市面上比较流行的技术，这些你值得拥有！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: 'text/css', href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.0.45/css/materialdesignicons.min.css" }
    ]
  },

  // Global CSS 
  css: [
    //less
    '@assets/css/reset.less',
    '@assets/css/pagetransition.less',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page 
  plugins: [
    '~/plugins/fontawsome.js',
    '~/plugins/request'
  ],

  //配置路由
  router: {
    //扩展路由
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'root', //别名
        path: '/index', //路径
        component: resolve(__dirname, 'pages/index') //组件
      })
    }
  },
  // Auto import components 
  components: true,

  // Modules for dev and build (recommended) 
  buildModules: [
  ],

  // Modules (
  modules: [
    // https://go.nuxtjs.dev/buefy
    // Or you can customize
    '@nuxtjs/axios',
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
  ],

  // Build Configuration 
  build: {
  },
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'https://api.jisuapi.com',//这个网站是开源的可以请求到数据的
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
}
