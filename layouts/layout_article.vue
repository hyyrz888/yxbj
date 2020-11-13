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
        <b-navbar-item href="#"> 天气查询 </b-navbar-item>
        <b-navbar-item href="#"> 快递查询 </b-navbar-item>
        <b-navbar-item href="webfonts">Webfonts</b-navbar-item>
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
        <div class="container column is-10">
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
    <footer class="footer">
      <div class="content has-text-centered">
        <p>版权</p>
      </div>
    </footer>
  </div>
</template>

<script>
import "assets/css/reset.less";
export default {};
</script>

















