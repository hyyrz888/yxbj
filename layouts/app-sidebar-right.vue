<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-parent">
      <div class="tile is-child box">
        <small> 打赏站长</small>
        <b-image
          :src="require('@/assets/images/wchat.jpg')"
          alt="打赏"
        ></b-image>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppSidebarRight",
};
</script>