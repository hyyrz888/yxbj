<template>
  <section class="column section">
    <b-tabs type="is-toggle">
      <b-tab-item label="HTML5+CSS3" icon="language-html5"></b-tab-item>
      <b-tab-item label="JS+JQuery" icon="language-javascript"></b-tab-item>
      <b-tab-item label="Node" icon="nodejs"></b-tab-item>
      <b-tab-item label="Vue" icon="vuejs"></b-tab-item>
      <b-tab-item label="React" icon="react"></b-tab-item>
      <b-tab-item label="PHP+MYSQL" icon="language-php"></b-tab-item>
      <b-tab-item label="Server" icon="server-network"></b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
export default {
  layout: "layout_article",
};
</script>

<style lang="less">
.tabs.is-toggle li.is-active a {
  border: 1px solid #167df0;
  background-color: #167df0;
}
</style>