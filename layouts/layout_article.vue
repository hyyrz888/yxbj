<template>
  <div id="evernot">
    <app-header></app-header>
    <section class="main-content section">
      <div class="container">
        <div class="columns">
          <!-- <aside
            class="menu column is-full-mobile is-one-thirds-tablet is-one-fifth-desktop is-one-fifth-widescreen"
          >
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li v-for="(item, key) of items" :key="key">
                <a>{{ item.title }}</a>
              </li>
            </ul>
          </aside> -->
          <!--内容-->
          <div
            class="column is-full-mobile is-two-thirds-tablet is-three-fifth-desktop is-three-fifths-widescreen"
          >
            <nuxt />
          </div>

          <!--右侧-->
          <div
            class="column is-one-fifth is-hidden-touch is-one-fifth-desktop is-one-fifth-widescreen"
          >
            <app-sidebar-right></app-sidebar-right>
          </div>
        </div>
      </div>
    </section>
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
};
</script>


<style lang="less" scoped>
.b-sidebar .sidebar-content {
  width: 100%;
}
</style>
<style lang="less">
.menu {
  .menu-list a {
    font-size: 14px;
    padding: 0.8rem;
    &.is-active {
      background-color: #f5f5f5;
      border-bottom: 1px solid #eee;
      color: #444;
    }
  }
}
</style>
















