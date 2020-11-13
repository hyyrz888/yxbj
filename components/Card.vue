<template>
  <div class="column is-4">
    <div class="card">
      <header class="card-header">
        <strong class="card-header-title has-text-grey text-align text-primary">
          {{ title }}</strong
        >
        <div v-if="team !== undefined" class="flex align-center mr-3">
          <b-tag type="is-danger is-light" class="float-right">{{
            team
          }}</b-tag>
        </div>
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
    team: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="less">
.card-content {
  padding: 1rem;
  span {
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
}
.card-footer-item {
  background-color: #f5f5f5;
  padding: 4px;
}
</style>
