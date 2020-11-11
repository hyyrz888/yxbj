<template>
  <div>
    <b-navbar type="is-info" centered shadow>
      <!--Logo-->
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <strong>印象笔记</strong>
        </b-navbar-item>
      </template>

      <!--导航-->
      <template slot="start">
        <b-navbar-item href="#"> 技术文章 </b-navbar-item>
        <b-navbar-item href="#"> IDE软件 </b-navbar-item>
        <b-navbar-item href="#"> 二维码美化 </b-navbar-item>
        <b-navbar-item href="#"> 天气查询 </b-navbar-item>
        <b-navbar-item href="#"> 快递查询 </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-white is-small">管理员登陆</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">导航</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "前端框架",
          to: { name: "index" },
        },
        {
          title: "小程序框架",
          to: { name: "xcx" },
        },
        {
          title: "React(PC)",
          to: { name: "reactpc" },
        },
        {
          title: "React(Mobile)",
          to: { name: "reactwap" },
        },
        {
          title: "Vue(PC)",
          to: { name: "vuepc" },
        },
        {
          title: "Vue(Mobile)",
          to: { name: "vuewap" },
        },
        {
          title: "Angular",
          to: { name: "angular" },
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
          to: { name: "wdyy" },
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
          to: { name: "pack" },
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
        {
          title: "技术周刊",
          to: { name: "technogy" },
        },
      ],
    };
  },
};
</script>



















