<template>
  <section class="section">
    <div class="columns is-multiline">
      <card :title="item.title" v-for="(item, key) of items" :key="key">
        <div slot="content">
          <b-icon :icon="item.icon" size="is-large" type="is-info" />
          <p>{{ item.des }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home.url"
            ><b-icon :icon="item.home.icon" type="is-dark"
          /></a>
          <a :href="item.github.url">
            <b-icon :icon="item.github.icon" type="is-dark"
          /></a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "index",

  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          title: "Element UI",
          des: "基于Vue的组件库",
          icon: "vuejs",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Ant Design Pro",
          des: "开箱即用的中前台/设计解决方案",
          icon: "react",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vuetify",
          des: "基于Vue的Material的组件库",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Muse-UI",
          des: "基于 Vue 和 Material Design 的 UI 组件库",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "HeyUI",
          des: "一个基于 Vue 的高质量 UI 组件库",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "San",
          des: "灵活易用的 JavaScript 组件框架，兼容到 IE6",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-SSR",
          des: "Vue 官方提供的服务器端渲染(SSR)指南",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-SSR",
          des: "Vue 官方提供的服务器端渲染(SSR)指南",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-Loader",
          des:
            "vue-loader 可以将 Vue 单文件组件转换为 JavaScript 模块的 webpack loader",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-Press",
          des: "由 Vue 提供支持的静态站点生成器",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "vue-router",
          des: "vue-router 是 Vue 官方提供的 router",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-Rx",
          des: "vue-rx 帮助用户在 Vue 应用程序中实现简单的 RxJS 绑定",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Vue-cli",
          des: "vue-cli 帮助用户快速开发 Vue 的脚手架(scaffold)",
          icon: "angular",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
        {
          title: "Nuxt",
          des: "Vue.js 元框架，用于快速创建复杂、高性能的通用 Web 应用程序",
          icon: "nuxt",
          home: {
            icon: "home",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.card-content {
  p {
    height: 40px;
    overflow: hidden;
  }
  span {
    margin-bottom: 10px;
  }
}
</style>
