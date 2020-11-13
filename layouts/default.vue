<template>
  <div class="is-primary">
    <app-header></app-header>

    <div class="container is-fluid">
      <section class="main-content columns">
        <aside class="column is-2 section">
          <div class="block pt-4 pb-4 pl-3 mb-0 bg-primary">
            <strong class="text-white">网站导航</strong>
          </div>
          <b-menu class="is-custom-mobile">
            <b-menu-list>
              <b-menu-item
                tag="nuxt-link"
                :label="item.title"
                v-for="(item, key) of items"
                :key="key"
                :active="currentIndex === key"
                :to="item.to.name"
              ></b-menu-item>
            </b-menu-list>
          </b-menu>

          <!-- <p class="menu-label is-hidden-touch">网站导航</p>
          <ul class="menu-list">
            <li></li>
          </ul> -->
        </aside>

        <div class="container column is-8">
          <nuxt />
        </div>

        <div class="column is-2 section">
          <app-sidebar-righ></app-sidebar-righ>
        </div>
      </section>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./app-header";
import AppFooter from "./app-footer";
import AppSidebarRight from "./app-sidebar-right";
export default {
  name: "Default",
  components: {
    AppHeader,
    AppFooter,
    AppSidebarRight,
  },
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          title: "前端框架",
          to: { name: "/" },
        },
        {
          title: "小程序框架",
          to: { name: "mini-program" },
        },
        {
          title: "Node.js",
          to: { name: "node" },
        },
        {
          title: "CSS",
          to: { name: "css" },
        },
        {
          title: "语言文档和规范",
          to: { name: "standard" },
        },
        {
          title: "代码风格检查",
          to: { name: "dmfg" },
        },
        {
          title: "状态管理",
          to: { name: "store" },
        },
        {
          title: "编程教程",
          to: { name: "teach" },
        },
        {
          title: "函数式编程",
          to: { name: "funcs" },
        },
        {
          title: "测试工具",
          to: { name: "test" },
        },
        {
          title: "编译构建",
          to: { name: "build" },
        },
        {
          title: "模板引擎",
          to: { name: "template" },
        },
        {
          title: "可视化工具",
          to: { name: "viewtool" },
        },
        {
          title: "utils 工具",
          to: { name: "utils" },
        },
        {
          title: "其他工具",
          to: { name: "other" },
        },
      ],
    };
  },
  methods: {
    handleClick(key) {
      console.log(key);
      this.currentIndex = key;
    },
  },
};
</script>


<style lang="less" scoped>
.b-sidebar .sidebar-content {
  width: 100%;
}
</style>
<style lang="less">
.menu {
  background-color: #f5f5f5;
  .menu-list a {
    font-size: 14px;
    padding: 0.8rem;
    &.is-active {
      background-color: #f5f5f5;
      color: #444;
    }
  }
}

.footer {
  background-color: #444;
  p {
    color: #fff;
    a {
      color: #fff;
    }
  }
}
</style>
















