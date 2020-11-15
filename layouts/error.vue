<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
    <h1 v-else>应用发生错误异常</h1>
    <b-button @click="$router.replace('/')">点击返回首页</b-button>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "layout_error", // 你可以为错误页面指定自定义的布局
};
</script>