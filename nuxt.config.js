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
    '~/plugins/request',
    '~/plugins/formatDate',
    '~/plugins/router'  //插件形式定义全局守卫
  ],

  //配置路由
  router: {
    middleware: 'auth',
    //扩展路由
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'root', //别名
        path: '/index', //路径
        component: resolve(__dirname, 'pages/index') //组件
      })
    }
  },
  //定义系统默认的loading效果,或者指定loading组件
  // loading: { color: "#399", height: '3px' },
  loading: '~/components/loading.vue',
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
    //prefix: '/api/',
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target: 'https://api.jisuapi.com',//代理转发的地址
      //changeOrigin: true,
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
}
