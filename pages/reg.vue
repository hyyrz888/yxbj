<template>
  <div>注册</div>
</template>

<script>
export default {
  name: "reg",
  beforeRouteLeave(to, from, next) {
    //组件内部的后置守卫，离开当前组件
    let bl = window.confirm("是否要离开页面");
    next(bl);
  },
};
</script>