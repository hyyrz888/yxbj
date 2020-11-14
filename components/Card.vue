<template>
  <div class="column is-half-tablet is-one-third-widescreen">
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
  p {
    font-size: 13px;
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
  span {
    margin-bottom: 10px;
  }
  img {
    height: 48px;
  }
  .nologo {
    text-align: center;
    width: 48px;
    height: 48px;
    line-height: 48px;
    background-color: #c3c4ce;
    border-radius: 19.5px;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin: 0 auto 10px;
  }
}
.card-footer-item {
  background-color: #f5f5f5;
  padding: 4px;
}
</style>
