<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <strong class="card-header-title has-text-grey text-align">
          {{ title }}
        </strong>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <slot name="content" />
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <slot name="footer" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less">
.card-content {
  font-size: 13px;
}
.card-footer-item {
  background-color: #f5f5f5;
  padding: 4px;
}
</style>
