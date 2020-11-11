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
    '@/assets/css/reset.less'
  ],

  // Plugins to run before rendering page 
  plugins: [
  ],

  // Auto import components 
  components: true,

  // Modules for dev and build (recommended) 
  buildModules: [
  ],

  // Modules (
  modules: [
    // https://go.nuxtjs.dev/buefy
    // Or you can customize
    ['nuxt-buefy', { css: true, materialDesignIcons: false }],
  ],

  // Build Configuration 
  build: {
  }
}
