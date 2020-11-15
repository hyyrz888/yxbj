<template>
  <section class="header has-background-info">
    <div class="container">
      <nav
        class="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo-white.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" to="/index" active-class="is-active">
              首页
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="article"
            >
              技术文档
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/weekly"
            >
              Weekly
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/people"
            >
              便民工具
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/software"
            >
              IDE软件
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/beautifycode"
            >
              二维码美化
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/webfonts"
            >
              Webfonts
            </nuxt-link>
            <nuxt-link
              class="navbar-item"
              active-class="is-active"
              to="/untils"
            >
              程序员工具
            </nuxt-link>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-info is-small" href="/login">
                  <strong>登陆</strong>
                </a>
                <a class="button is-light is-small" href="/reg"> 注册 </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHeader",
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  },
  methods: {},
};
</script>