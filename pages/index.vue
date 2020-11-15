<template>
  <section class="cardlist">
    <div class="columns is-multiline">
      <card
        :title="item.name"
        :team="item.team"
        v-for="(item, key) of fe"
        :key="key"
      >
        <div slot="content">
          <img
            :src="item.logo"
            :alt="item.name"
            width="48"
            class="mb-2"
            v-if="item.logo.includes('//')"
          />
          <div class="nologo" v-else-if="item.logo === ''">V</div>
          <b-icon :icon="item.logo" size="is-large" type="is-danger" v-else />
          <p>{{ item.desc }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home" target="_blank"
            ><b-icon icon="home" type="is-dark"
          /></a>
          <a :href="item.contribute" target="_blank">
            <b-icon icon="github" type="is-dark"
          /></a>
        </div>
      </card>
    </div>
    <b-tabs
      type="is-boxed"
      v-model="activeTab"
      :multiline="multiline"
      class="mt-6"
    >
      <b-tab-item label="VuePC">
        <template #header>
          <span>
            Vue(PC) <b-tag rounded> {{ VuePc.length }} </b-tag>
          </span>
        </template>
        <!-- VuePc -->
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of VuePc"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">V</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
      <b-tab-item label="Vue(Mobile)">
        <template #header>
          <span>
            Vue(Mobile) <b-tag rounded> {{ VueMobile.length }} </b-tag>
          </span>
        </template>
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of VueMobile"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">V</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
      <b-tab-item label="React(PC)">
        <template #header>
          <span>
            React(PC) <b-tag rounded> {{ ReactPc.length }}</b-tag>
          </span>
        </template>
        <!-- ReactPc -->
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of ReactPc"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">R</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
      <b-tab-item label="React(Mobile)">
        <template #header>
          <span>
            React(Mobile) <b-tag rounded> {{ ReactMobile.length }}</b-tag>
          </span>
        </template>
        <!-- ReactMobile -->
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of ReactMobile"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">R</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
      <b-tab-item label="Angular">
        <template #header>
          <span>
            Angular <b-tag rounded> {{ Angular.length }}</b-tag>
          </span>
        </template>
        <!-- Angular -->
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of Angular"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">A</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
      <b-tab-item label="Other">
        <template #header>
          <span>
            Other <b-tag rounded> {{ Other.length }}</b-tag>
          </span>
        </template>
        <div class="columns is-multiline">
          <card
            :title="item.name"
            :team="item.team"
            v-for="(item, key) of Other"
            :key="key"
          >
            <div slot="content">
              <img
                :src="item.logo"
                :alt="item.name"
                width="48"
                class="mb-2"
                v-if="item.logo.includes('//')"
              />
              <div class="nologo" v-else-if="item.logo === ''">O</div>
              <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
              <p>{{ item.desc }}</p>
            </div>
            <div slot="footer">
              <a :href="item.home" target="_blank"
                ><b-icon icon="home" type="is-dark"
              /></a>
              <a :href="item.contribute" target="_blank">
                <b-icon icon="github" type="is-dark"
              /></a>
            </div>
          </card>
        </div>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "index",
  //page级别的middleware
  middleware(context) {
    console.log("page middleware");
  },
  async asyncData({ $axios }) {
    let res = await $axios({ url: "/data/test.json" });
    console.log("同源数据", res);
    return {
      title: res.test,
    };
  },
  components: {
    Card,
  },
  data() {
    return {
      activeTab: 0,
      multiline: false,
      fe: [
        {
          contribute: "https://github.com/vuejs/cn.vuejs.org/",
          desc: "渐进式 JavaScript 库",
          home: "https://vue.docschina.org",
          logo: "vuejs",
          name: "Vue",
        },
        {
          contribute: "https://github.com/reactjs/zh-hans.reactjs.org",
          desc: "用于构建用户界面的 JavaScript 库",
          home: "https://react.docschina.org",
          is_evernote: true,
          logo: "react",
          name: "React",
        },

        {
          desc: "一套框架多种平台",
          home: "https://angular.cn/",
          logo: "angular",
          name: "Angular",
        },
      ],
      VuePc: [
        {
          desc: "基于 Vue 的组件库",
          home: "http://element-cn.eleme.io/",
          logo: "https://cdn.docschina.org/home/logo/element.svg",
          name: "Element UI",
          repository: "https://github.com/ElemeFE/element",
          team: "饿了么",
        },
        {
          desc: "开箱即用的中台前端/设计解决方案",
          home: "https://pro.antdv.com/",
          logo: "https://pro.antdv.com/logo.png",
          name: "Ant Design Pro",
          repository: "https://github.com/vueComponent/ant-design-vue-pro",
          team: "阿里巴巴",
        },
        {
          desc: "基于 Vue 的组件库",
          home: "https://www.iviewui.com/",
          logo: "https://cdn.docschina.org/home/logo/iview.png",
          name: "View UI",
          repository: "https://github.com/iview/iview",
          team: "TalkingData",
        },
        {
          desc: "Vue 官方 UI 组件",
          home: "https://vuejs.github.io/ui/",
          logo: "https://cdn.docschina.org/home/logo/vue.svg",
          name: "Vue UI Framework",
          repository: "https://github.com/vuejs/ui",
        },
        {
          desc: "基于 Vue 的 Material 组件库",
          home: "https://vuetifyjs.com/zh-Hans/",
          logo: "vuetify",
          name: "Vuetify",
          repository: "https://github.com/vuetifyjs/vuetify",
        },
        {
          desc: "基于 Vue 和 Material Design 的 UI 组件库",
          home: "http://www.muse-ui.org/",
          logo: "https://cdn.docschina.org/home/logo/muse.png",
          name: "Muse-UI",
          repository: "https://github.com/museui/muse-ui",
        },
        {
          desc: "一个基于 Vue 的高质量 UI 组件库",
          home: "https://www.heyui.top/",
          logo:
            "https://camo.githubusercontent.com/1424cb86c2634f96fe82db55f01f07c3c29e53a1/68747470733a2f2f7777772e68657975692e746f702f7374617469632f696d616765732f6c6f676f2e706e67",
          name: "HeyUI",
          repository: "https://github.com/heyui/heyui",
        },
        {
          desc: "灵活易用的 JavaScript 组件框架，兼容到 IE6",
          home: "https://baidu.github.io/san/",
          logo: "https://cdn.docschina.org/home/logo/san.svg",
          name: "San",
          repository: "https://github.com/baidu/san",
          team: "百度",
        },
        {
          desc: "Vue 官方提供的服务器端渲染(SSR)指南",
          home: "https://ssr.vuejs.org/zh/",
          logo: "",
          name: "vue-ssr",
          repository: "https://github.com/vuejs/vue-ssr-docs",
        },
        {
          desc:
            "vue-loader 可以将 Vue 单文件组件转换为 JavaScript 模块的 webpack loader",
          home: "https://vue-loader.vuejs.org/zh/",
          logo: "",
          name: "vue-loader",
          repository: "https://github.com/vuejs/vue-loader",
        },
        {
          contribute: "https://github.com/vuejs/vuepress",
          desc: "由 Vue 提供支持的静态站点生成器",
          home: "https://vuepress.vuejs.org/zh/",
          logo: "https://cdn.docschina.org/home/logo/vuepress.svg",
          name: "VuePress",
        },
        {
          desc: "vue-router 是 Vue 官方提供的 router",
          home: "https://router.vuejs.org/zh/",
          logo: "",
          name: "vue-router",
          repository: "https://github.com/vuejs/vue-router",
        },
        {
          desc: "vue-rx 帮助用户在 Vue 应用程序中实现简单的 RxJS 绑定",
          home: "https://github.com/vuejs/vue-rx/blob/master/README-CN.md",
          logo: "",
          name: "vue-rx",
          repository: "https://github.com/vuejs/vue-rx",
        },
        {
          desc: "vue-cli 帮助用户快速开发 Vue 的脚手架(scaffold)",
          home: "https://cli.vuejs.org/zh/",
          logo: "https://cdn.docschina.org/home/logo/vue.svg",
          name: "vue-cli",
          repository: "https://github.com/vuejs/vue-cli",
        },
        {
          desc: "Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序",
          home: "https://zh.nuxtjs.org/",
          logo: "https://zh.nuxtjs.org/logos/nuxt-icon.png",
          name: "Nuxt.js",
          repository: "https://github.com/nuxt/nuxt.js",
        },
      ],
      VueMobile: [
        {
          desc: "移动端 Vue 组件库",
          home: "https://youzan.github.io/vant/",
          logo: "https://cdn.docschina.org/home/logo/vant.png",
          name: "Vant",
          repository: "https://github.com/youzan/vant",
          team: "有赞",
        },
        {
          desc: "基于 Vue 实现的精致移动端组件库",
          home: "https://didi.github.io/cube-ui/",
          logo: "https://cdn.docschina.org/home/logo/cube.png",
          name: "Cube UI",
          repository: "https://github.com/didi/cube-ui",
          team: "滴滴",
        },
        {
          desc: "面向金融场景的 Vue 移动端组件库",
          home: "https://didi.github.io/mand-mobile/",
          logo: "https://cdn.docschina.org/home/logo/mand.svg",
          name: "Mand Mobile",
          repository: "https://github.com/didi/mand-mobile",
          team: "滴滴",
        },
        {
          desc: "可视化 Mand Mobile 主题编辑器",
          home: "https://mand-mobile.github.io/palette/",
          logo: "https://cdn.docschina.org/home/logo/mand.svg",
          name: "Mand Mobile Palette",
          repository: "https://github.com/mand-mobile/palette",
          team: "滴滴",
        },
        {
          desc: "基于 Vue 的 PWA 解决方案",
          home: "https://lavas.baidu.com/",
          logo: "https://cdn.docschina.org/home/logo/lavas.png",
          name: "Lavas",
          repository: "https://github.com/lavas-project/lavas",
          team: "百度",
        },
        {
          desc: "基于 Vue 的组件库",
          home: "http://mint-ui.github.io/",
          logo: "https://cdn.docschina.org/home/logo/mint.svg",
          name: "Mint UI",
          repository: "https://github.com/ElemeFE/mint-ui",
          team: "饿了么",
        },
        {
          desc: "基于 Vue 的移动端组件库",
          home: "https://vux.li/",
          logo: "https://cdn.docschina.org/home/logo/vux.png",
          name: "VUX",
          repository: "https://github.com/airyland/vux",
        },
        {
          desc: "基于 Vue 的移动端跨平台 UI",
          home: "https://weex.apache.org/",
          logo: "https://cdn.docschina.org/home/logo/weex.svg",
          name: "Weex",
          repository: "https://github.com/apache/incubator-weex",
          team: "阿里巴巴",
        },
        {
          desc: "移动端 Vue 组件库",
          home:
            "https://zhongantech.github.io/zarm-vue/#/documents/quick-start",
          logo: "https://zarm.gitee.io/images/logo.732d9561.svg",
          name: "Zarm Vue",
          repository: "https://github.com/ZhongAnTech/zarm",
          team: "众安科技",
        },
      ],
      ReactPc: [
        {
          contribute: "https://github.com/docschina/preact-www",
          desc: "React 的 3kb 轻量化方案，拥有同样的 ES6 API",
          home: "https://preactjs.com/",
          is_docschina: true,
          logo: "https://cdn.docschina.org/home/logo/preact.png",
          name: "Preact",
        },
        {
          contribute: "https://github.com/docschina/react-router.cn",
          desc: "官方维护的路由库",
          home: "https://react-router.docschina.org/",
          is_docschina: true,
          logo: "https://cdn.docschina.org/home/logo/react-router.svg",
          name: "React-Router",
        },
        {
          contribute: "https://github.com/umijs/umi",
          desc: "可插拔的企业级 React 应用框架",
          home: "https://umijs.org/",
          logo: "",
          name: "Umi",
        },
        {
          contribute: "https://github.com/dvajs/dva",
          desc: "基于 React 和 redux，具有 elm 风格的轻量级框架。",
          home: "https://dvajs.com/",
          logo: "",
          name: "dva",
        },
        {
          desc: "企业级的 UI 设计语言和 React 实现",
          home: "https://ant.design/",
          logo: "https://cdn.docschina.org/home/logo/antdesign.svg",
          name: "Ant Design",
          repository: "https://github.com/ant-design/ant-design",
          team: "阿里巴巴",
        },
        {
          desc: "开箱即用的中台前端/设计解决方案",
          home: "https://pro.ant.design/",
          logo: "https://cdn.docschina.org/home/logo/antdesign.svg",
          name: "Ant Design Pro",
          repository: "https://github.com/ant-design/ant-design-pro",
          team: "阿里巴巴",
        },
        {
          desc: "Element UI 的 React 实现",
          home: "https://elemefe.github.io/element-react/",
          logo: "https://cdn.docschina.org/home/logo/element.svg",
          name: "Element React",
          repository: "https://github.com/eleme/element-react",
          team: "饿了么",
        },
        {
          desc:
            "PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件",
          home: "https://youzan.github.io/zent/zh/guides/install",
          logo: "https://cdn.docschina.org/home/logo/zent.png",
          name: "Zent",
          repository: "https://github.com/youzan/zent",
          team: "有赞",
        },
        {
          desc:
            "Nerv 是一款基于虚拟 DOM 技术的 JavaScript（TypeScript）库，它提供了与 React 16 一致的使用方式与 API，并且拥有更高的性能表现、更小的包大小以及更好的浏览器兼容性",
          home: "https://nerv.aotu.io/",
          logo:
            "https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833374832363730372e706e67",
          name: "Nerv",
          repository: "https://github.com/NervJS/nerv",
          team: "京东",
        },
      ],
      ReactMobile: [
        {
          desc: "基于 React 的移动端跨平台 UI",
          home: "https://reactnative.cn/",
          logo: "https://cdn.docschina.org/home/logo/react.svg",
          name: "React Native",
          repository: "https://github.com/reactnativecn/react-native.cn",
        },
        {
          desc: "一个基于 Preact / React / React Native 的 UI 组件库",
          home: "https://mobile.ant.design/",
          logo: "https://cdn.docschina.org/home/logo/antdesign.svg",
          name: "Ant Design Mobile",
          repository: "https://github.com/ant-design/ant-design-mobile",
          team: "阿里巴巴",
        },
        {
          desc: "移动端 React 组件库",
          home: "https://didi.github.io/pile.js",
          logo: "",
          name: "Pile",
          repository: "https://github.com/didi/pile.js",
          team: "滴滴",
        },
        {
          desc: "移动端 React 组件库",
          home: "https://zarm.gitee.io/#/components/quick-start",
          logo: "https://zarm.gitee.io/images/logo.732d9561.svg",
          name: "Zarm React",
          repository: "https://github.com/ZhongAnTech/zarm",
          team: "众安科技",
        },
      ],
      Angular: [
        {
          desc: "Element UI 的 Angular 实现",
          home: "https://element-angular.faas.ele.me/",
          logo: "https://cdn.docschina.org/home/logo/element.svg",
          name: "Element Angular",
          repository: "https://github.com/ElemeFE/element-angular",
          team: "饿了么",
        },
        {
          desc: "基于 Angular 的移动端跨平台 UI",
          home: "https://ionicframework.com/",
          logo: "https://cdn.docschina.org/home/logo/ionic.png",
          name: "Ionic",
          repository: "https://github.com/ionic-team/ionic",
        },
        {
          desc: "Ant Design 的 Angular 实现",
          home: "https://ng.ant.design/",
          logo: "https://cdn.docschina.org/home/logo/NG-ZORRO.svg",
          name: "NG-ZORRO",
          repository: "https://github.com/NG-ZORRO/ng-zorro-antd",
        },
        {
          desc: "基于 ng-zorro-antd 的中台前端解决方案",
          home: "http://ng-alain.com/",
          logo: "https://cdn.docschina.org/home/logo/ng-alain.svg",
          name: "ng-alain",
          repository: "https://github.com/cipchk/ng-alain/",
        },
      ],
      Other: [
        {
          desc: "前端UI框架",
          home: "https://buefy.org/",
          logo: "https://buefy.org/static/img/buefy.1d65c18.png",
          name: "Buefy",
          repository: "https://github.com/cipchk/ng-alain/",
        },
        {
          desc: "前端UI框架-V4",
          home: "https://v4.bootcss.com/",
          logo: "bootstrap",
          name: "Bootstrap",
          repository: "https://github.com/cipchk/ng-alain/",
        },
        {
          desc: "前端UI框架",
          home: "https://www.layui.com/",
          logo: "",
          name: "Layui",
          repository: "https://github.com/sentsin/layui/",
          gitee: "https://res.layui.com/static/images/layui/logo.png",
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>
<style lang="less">
.table {
}
.b-tabs .tabs {
  margin-bottom: 2rem;
}
.tabs li.is-active a {
  color: #007bff;
}
.tabs.is-toggle li.is-active a {
  border-color: #007bff;
  background-color: #007bff;
}
</style>