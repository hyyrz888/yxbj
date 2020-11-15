<template>
  <section class="siderright">
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <h2 class="subtitle">网站运行时间</h2>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <h2 class="subtitle">请站长和咖啡</h2>
          <b-image
            :src="require('@/assets/images/wchat.jpg')"
            alt="打赏"
          ></b-image>
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box">
          <h2 class="subtitle">每日常识</h2>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppSidebarRight",
};
</script>