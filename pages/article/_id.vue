<template>
  <div>{{ this.$route.params.id }}</div>
</template>

<script>
export default {
  name: "article-detail",
  validate({ params, query }) {
    console.log(params);
    // 必须是number类型
    return /^\d+$/.test(params.id) && typeof params.id === "number";
  },
};
</script>