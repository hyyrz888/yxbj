<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="container">
        <div class="is-flex justify-between align-center">
          <span>© {{ year }} Copyright</span>
          <span
            >浙ICP备15002923号-1 Powered by NodeJS | Theme by Buefy © 2020</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    year: "",
  }),
  mounted() {
    this.year = new Date().getFullYear();
  },
};
</script>
<style lang="less">
.footer {
  padding: 2rem 0;
  background-color: #444;
  span {
    color: #fff;
  }
}
</style>