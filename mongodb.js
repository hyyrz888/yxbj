
db.menu.insertMany(
  [
    {
      label: "前端框架",
      status: 1,
      path: '/fe',
      name: 'fe',
    },
    {
      label: "小程序框架",
      status: 1,
      path: '/mini-program',
      name: "mini-program",
    },
    {
      label: "Node",
      status: 1,
      path: '/node',
      name: "node"
    },
    {
      label: "CSS",
      path: 'css',
      status: 1,
      name: "css"
    },
    {
      label: "语言文档和规范",
      path: '/standard',
      status: 1,
      name: "standard"
    },
    {
      label: "代码风格检查",
      path: "/codestyle",
      status: 1,
      name: "codestyle"
    },
    {
      label: "状态管理",
      path: "/data-model",
      status: 1,
      name: "data-model"
    },
    {
      label: "编程教程",
      path: '/tutorial',
      status: 1,
      name: "tutorial"
    },
    {
      label: "函数式编程",
      path: "/functional",
      status: 1,
      name: "functional"
    },
    {
      label: "测试工具",
      path: "/test",
      status: 1,
      name: "test"
    },
    {
      label: "编译构建",
      path: "/bulid",
      status: 1,
      name: "bulid"
    },
    {
      label: "模板引擎",
      path: "/template",
      status: 1,
      name: "template"
    },
    {
      label: "可视化工具",
      path: "/visualization",
      status: 0,
      name: "visualization"
    },
    {
      label: "utils 工具",
      path: "/utils",
      status: 1,
      name: "utils"
    },
    {
      label: "其他工具",
      path: "/tool",
      status: 1,
      name: "tool"
    },
    {
      label: "数据库",
      path: "/db",
      status: "db"
    }
  ]
)

//card内容
db.card.insertMany([
  //前端框架
  {
    fid: "fe",
    logo: 'https://cdn.docschina.org/home/logo/react.svg',
    name: 'React',
    desc: '用于构建用户界面的 JavaScript 库',
    team: '',
    home: 'https://react.docschina.org',
    repository: 'https://github.com/reactjs/zh-hans.reactjs.org',
    is_evernote: true
  },
  {
    fid: "fe",
    logo: 'https://cdn.docschina.org/home/logo/vue.svg',
    name: 'Vue',
    desc: '渐进式 JavaScript 库',
    team: '',
    home: 'https://vue.docschina.org',
    repository: 'https://github.com/vuejs/cn.vuejs.org/',
    is_evernote: true
  },
  {
    belong: "fe",
    logo: 'https://cdn.docschina.org/home/logo/angular.svg',
    name: 'Angular',
    desc: '一套框架多种平台',
    team: '',
    home: '',
    repository: '',
    is_evernote: true
  },
  //小程序框架
  {
    belong: "mini-program",
    logo: 'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
    name: 'Remax',
    desc: 'Remax 将 React 运行在小程序环境中，让你可以使用完整的 React 进行小程序开发。',
    team: '',
    home: 'https://remaxjs.org/',
    repository: 'https://github.com/remaxjs/remax',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://cdn.docschina.org/home/logo/taro.png',
    name: 'Taro',
    desc: 'Taro 是一套遵循 React 语法规范的 多端开发 解决方案。',
    team: '',
    home: 'https://taro.jd.com/',
    repository: 'https://github.com/NervJS/taro',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: '',
    name: 'kbone',
    desc: 'kbone 用于支持一个项目可以同时在 Web 端和小程序端被使用',
    team: '',
    home: 'https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/',
    repository: 'https://github.com/wechat-miniprogram/kbone',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://camo.githubusercontent.com/5a3ce051411cca4d8abd0e0abff879bb5a871520/68747470733a2f2f74656e63656e742e6769746875622e696f2f6f6d692f6173736574732f6f6d692d6c6f676f323031392e737667',
    name: 'omi/omip',
    desc: 'Omi 可以开发桌面 Web、移动 H5，同时支持开发小程序',
    team: '',
    home: 'http://omijs.org',
    repository: 'https://github.com/Tencent/omi',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://opensource.tencent.com/img/wepy.png',
    name: 'wepy',
    desc: 'WePY 是一款让小程序支持组件化开发的框架，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序',
    team: '',
    home: 'https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/',
    repository: 'https://github.com/Tencent/wepy',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://cdn.docschina.org/home/logo/nanachi.png',
    name: 'nanachi',
    desc: '基于 React 的多端小程序转译框架，完美兼容 React 生命周期',
    team: '',
    home: 'https://rubylouvre.github.io/nanachi/',
    repository: 'https://github.com/RubyLouvre/nanachi',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://cdn.docschina.org/home/logo/mpvue.png',
    name: 'mpvue',
    desc: '框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验',
    team: '',
    home: 'http://mpvue.com',
    repository: 'https://github.com/Meituan-Dianping/mpvue',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://github.com/wxajs/wxa/raw/dev/wxa-logo.png',
    name: 'wxa',
    desc: 'wxa 是一个 AOP 框架，主要使用 Decorator（运行时改写，拦截）和预编译实现框架功能',
    team: '',
    home: 'https://wxajs.github.io/wxa/',
    repository: 'https://github.com/wxajs/wxa',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://cdn.docschina.org/home/logo/mpx-logo.png',
    name: 'mpx',
    desc: 'Mpx 是一款致力于提高小程序开发体验的增强型小程序框架，通过 Mpx，我们能够以最先进的 web 开发体验来开发生产性能深度优化的小程序',
    team: '',
    home: 'https://didi.github.io/mpx/',
    repository: 'https://github.com/didi/mpx',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://megalojs.org/static/megalo.png',
    name: 'megalo',
    desc: 'Megalo 是基于 Vue（Vue@2.6.6） 的小程序开发框架，让开发者可以用 Vue 的开发方式开发小程序应用',
    team: '',
    home: 'https://megalojs.org/#/',
    repository: 'https://github.com/kaola-fed/megalo',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://camo.githubusercontent.com/9a6e165b9188a8ac4e5173bc382688a418fad711/68747470733a2f2f636d6c2e6a732e6f72672f646f632f6173736574732f3130302a3130302e706e67',
    name: 'chameleon',
    desc: 'Chameleon/kəˈmiːlɪən/，简写CML，中文名卡梅龙；中文意思变色龙，意味着就像变色龙一样能适应不同环境的跨端整体解决方案',
    team: '',
    home: 'https://cml.js.org/',
    repository: 'https://github.com/didi/chameleon',
    is_evernote: true
  },
  {
    belong: "mini-program",
    logo: 'https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png',
    name: 'uni-app',
    desc: '框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现，使其可以运行在小程序环境中，从而为小程序开发引入了整套 Vue.js 开发体验',
    team: '',
    home: 'https://uniapp.dcloud.io/',
    repository: 'https://github.com/dcloudio/uni-app',
    is_evernote: true
  },
  //reactpc
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/preact.png',
    name: 'Preact',
    desc: 'React 的 3kb 轻量化方案，拥有同样的 ES6 API',
    team: '',
    home: 'https://preactjs.com/',
    repository: 'https://github.com/docschina/preact-www',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/react-router.svg',
    name: 'React-Router',
    desc: '官方维护的路由库',
    team: '',
    home: 'https://react-router.docschina.org/',
    repository: 'https://github.com/docschina/react-router.cn',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: '',
    name: 'Umi',
    desc: '可插拔的企业级 React 应用框架',
    team: '',
    home: 'https://umijs.org/',
    repository: 'https://github.com/umijs/umi',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: '',
    name: 'dva',
    desc: '基于 React 和 redux，具有 elm 风格的轻量级框架',
    team: '',
    home: 'https://dvajs.com/',
    repository: 'https://github.com/dvajs/dva',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/antdesign.svg',
    name: 'Ant Design',
    desc: '企业级的 UI 设计语言和 React 实现',
    team: '阿里巴巴',
    home: 'https://ant.design/',
    repository: 'https://github.com/ant-design/ant-design',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/antdesign.svg',
    name: 'Ant Design Pro',
    desc: '开箱即用的中台前端/设计解决方案',
    team: '阿里巴巴',
    home: 'https://pro.ant.design/',
    repository: 'https://github.com/ant-design/ant-design-pro',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/element.svg',
    name: 'Element React',
    desc: 'Element UI 的 React 实现',
    team: '饿了么',
    home: 'https://elemefe.github.io/element-react/',
    repository: 'https://github.com/eleme/element-react',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://cdn.docschina.org/home/logo/zent.png',
    name: 'Zent',
    desc: 'PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件',
    team: '有赞',
    home: 'https://youzan.github.io/zent/zh/guides/install',
    repository: 'https://github.com/youzan/zent',
    is_evernote: true
  },
  {
    belong: "react-pc",
    logo: 'https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67',
    name: 'Nerv',
    desc: 'Nerv 是一款基于虚拟 DOM 技术的 JavaScript（TypeScript）库，它提供了与 React 16 一致的使用方式与 API，并且拥有更高的性能表现、更小的包大小以及更好的浏览器兼容性',
    team: '京东',
    home: 'https://nerv.aotu.io/',
    repository: 'https://github.com/NervJS/nerv',
    is_evernote: true
  },
  //reactmobile
  {
    belong: "react-mobile",
    logo: 'https://cdn.docschina.org/home/logo/react.svg',
    name: 'React Native',
    desc: '基于 React 的移动端跨平台 UI',
    team: '京东',
    home: 'https://reactnative.cn/',
    repository: 'https://github.com/reactnativecn/react-native.cn',
    is_evernote: true
  },
  {
    belong: "react-mobile",
    logo: 'https://cdn.docschina.org/home/logo/antdesign.svg',
    name: 'Ant Design Mobile',
    desc: '一个基于 Preact / React / React Native 的 UI 组件库',
    team: '阿里巴巴',
    home: 'https://mobile.ant.design/',
    repository: 'https://github.com/ant-design/ant-design-mobile',
    is_evernote: true
  },
  {
    belong: "react-mobile",
    logo: 'https://cdn.docschina.org/home/logo/antdesign.svg',
    name: 'Pile',
    desc: '移动端 React 组件库',
    team: '滴滴',
    home: 'https://didi.github.io/pile.js',
    repository: 'https://github.com/didi/pile.js',
    is_evernote: true
  },
  {
    belong: "react-mobile",
    logo: 'https://zarm.gitee.io/images/logo.732d9561.svg',
    name: 'Zarm React',
    desc: '移动端 React 组件库',
    team: '众安科技',
    home: 'https://zarm.gitee.io/#/components/quick-start',
    repository: 'https://github.com/ZhongAnTech/zarm',
    is_evernote: true
  },
  //vuepc
  {
    belong: "vue-pc",
    logo: 'https://cdn.docschina.org/home/logo/element.svg',
    name: 'Element UI',
    desc: '基于 Vue 的组件库',
    team: '饿了么',
    home: 'http://element-cn.eleme.io/',
    repository: 'https://github.com/ElemeFE/element',
    is_evernote: true
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    desc: "基于 Vue 的组件库",
    home: "https://www.iviewui.com/",
    logo: "https://cdn.docschina.org/home/logo/iview.png",
    name: "View UI",
    repository: "https://github.com/iview/iview",
    team: "TalkingData"
  },
  {
    belong: "vue-pc",
    logo: 'https://pro.antdv.com/logo.png',
    name: 'Ant Design Pro',
    desc: '开箱即用的中台前端/设计解决方案',
    team: '阿里巴巴',
    home: 'https://pro.antdv.com/',
    repository: 'https://github.com/vueComponent/ant-design-vue-pro',
    is_evernote: true
  },
  {
    belong: "vue-pc",
    logo: 'https://cdn.docschina.org/home/logo/vue.svg',
    name: 'Vue UI Framework',
    desc: 'Vue 官方 UI 组件',
    team: '',
    home: 'https://vuejs.github.io/ui/',
    repository: 'https://github.com/vuejs/ui',
    is_evernote: true
  },
  {
    belong: "vue-pc",
    team: '',
    is_evernote: true,
    desc: "基于 Vue 的 Material 组件库",
    home: "https://vuetifyjs.com/zh-Hans/",
    logo: "https://cdn.docschina.org/home/logo/vuetify.svg",
    name: "Vuetify",
    repository: "https://github.com/vuetifyjs/vuetify"
  },
  {
    belong: "vue-pc",
    team: '',
    is_evernote: true,
    desc: "基于 Vue 和 Material Design 的 UI 组件库",
    home: "http://www.muse-ui.org/",
    logo: "https://cdn.docschina.org/home/logo/muse.png",
    name: "Muse-UI",
    repository: "https://github.com/museui/muse-ui"
  },
  {
    belong: "vue-pc",
    team: '',
    is_evernote: true,
    desc: "一个基于 Vue 的高质量 UI 组件库",
    home: "https://www.heyui.top/",
    logo: "https://camo.githubusercontent.com/1424cb86c2634f96fe82db55f01f07c3c29e53a1/68747470733a2f2f7777772e68657975692e746f702f7374617469632f696d616765732f6c6f676f2e706e67",
    name: "HeyUI",
    repository: "https://github.com/heyui/heyui"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    desc: "灵活易用的 JavaScript 组件框架，兼容到 IE6",
    home: "https://baidu.github.io/san/",
    logo: "https://cdn.docschina.org/home/logo/san.svg",
    name: "San",
    repository: "https://github.com/baidu/san",
    team: "百度"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "百度",
    desc: "Vue 官方提供的服务器端渲染(SSR)指南",
    home: "https://ssr.vuejs.org/zh/",
    logo: "",
    name: "vue-ssr",
    repository: "https://github.com/vuejs/vue-ssr-docs"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    desc: "vue-loader 可以将 Vue 单文件组件转换为 JavaScript 模块的 webpack loader",
    home: "https://vue-loader.vuejs.org/zh/",
    logo: "",
    name: "vue-loader",
    repository: "https://github.com/vuejs/vue-loader"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    repository: "https://github.com/vuejs/vuepress",
    desc: "由 Vue 提供支持的静态站点生成器",
    home: "https://vuepress.vuejs.org/zh/",
    logo: "https://cdn.docschina.org/home/logo/vuepress.svg",
    name: "VuePress"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    desc: "vue-router 是 Vue 官方提供的 router",
    home: "https://router.vuejs.org/zh/",
    logo: "",
    name: "vue-router",
    repository: "https://github.com/vuejs/vue-router"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    desc: "vue-rx 帮助用户在 Vue 应用程序中实现简单的 RxJS 绑定",
    home: "https://github.com/vuejs/vue-rx/blob/master/README-CN.md",
    logo: "",
    name: "vue-rx",
    repository: "https://github.com/vuejs/vue-rx"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    desc: "vue-cli 帮助用户快速开发 Vue 的脚手架(scaffold)",
    home: "https://cli.vuejs.org/zh/",
    logo: "https://cdn.docschina.org/home/logo/vue.svg",
    name: "vue-cli",
    repository: "https://github.com/vuejs/vue-cli"
  },
  {
    belong: "vue-pc",
    is_evernote: true,
    team: "",
    desc: "Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序",
    home: "https://zh.nuxtjs.org/",
    logo: "https://zh.nuxtjs.org/logos/nuxt-icon.png",
    name: "Nuxt.js",
    repository: "https://github.com/nuxt/nuxt.js"
  },

  //vue-mobile
])