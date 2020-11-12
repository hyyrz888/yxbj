<template>
  <div>{{ this.$route.params.id }}</div>
</template>

<script>
export default {
  validate({ params }) {
    console.log(params);
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
};
</script>