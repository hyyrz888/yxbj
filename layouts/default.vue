<template>
  <div class="is-primary">
    <b-navbar type="is-info" centered class="container is-fluid">
      <!--Logo-->

      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <strong>印象笔记</strong>
        </b-navbar-item>
      </template>

      <!--导航-->
      <template slot="start">
        <b-navbar-item href="/"> 首页 </b-navbar-item>
        <b-navbar-item href="article"> 技术文章 </b-navbar-item>
        <b-navbar-item href="weekly"> Weekly </b-navbar-item>
        <b-navbar-item href="#"> IDE软件 </b-navbar-item>
        <b-navbar-item href="#"> 二维码美化 </b-navbar-item>
        <b-navbar-item href="/webfonts">Webfonts</b-navbar-item>
        <b-navbar-item href="#"> 程序员工具 </b-navbar-item>
        <b-navbar-item href="people"> 便民查询 </b-navbar-item>
        <b-navbar-item href="joblife"> 我的职业生涯 </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <b-button type="is-success">登陆</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

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
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">
              <div class="tile is-child box">
                <small> 打赏站长</small>
                <b-image
                  :src="require('@/assets/images/wchat.jpg')"
                  alt="打赏"
                ></b-image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="footer pb-6">
      <div class="content has-text-centered"><p>版权声明</p></div>
    </footer>
  </div>
</template>

<script>
import "assets/css/reset.less";
export default {
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
















