<template>
  <b-navbar type="is-info" centered class="container is-fluid">
    <!--Logo-->

    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <strong>印象笔记</strong>
      </b-navbar-item>
    </template>

    <!--导航-->
    <template slot="start">
      <b-navbar-item href="/index"> 首页 </b-navbar-item>
      <b-navbar-item href="article"> 技术文章 </b-navbar-item>
      <b-navbar-item href="weekly"> Weekly </b-navbar-item>
      <b-navbar-item href="#"> IDE软件 </b-navbar-item>
      <b-navbar-item href="#"> 二维码美化 </b-navbar-item>
      <b-navbar-item href="/webfonts">Webfonts</b-navbar-item>
      <b-navbar-item href="#"> 程序员工具 </b-navbar-item>
      <b-navbar-item href="people"> 便民查询 </b-navbar-item>
      <b-navbar-item href="joblife" active-class="active">
        我的职业生涯
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button type="is-success">登陆</b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>