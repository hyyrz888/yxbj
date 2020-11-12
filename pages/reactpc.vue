<template>
  <section class="section">
    <div class="columns is-4">
      <card :title="item.title" v-for="(item, key) of items" :key="key">
        <div slot="content">
          <b-icon :icon="item.icon" size="is-large" type="is-info" />
          <p>{{ item.des }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home.url"
            ><b-icon :icon="item.home.icon" type="is-dark"
          /></a>
          <a :href="item.github.url">
            <b-icon :icon="item.github.icon" type="is-dark"
          /></a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "index",

  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          title: "Element UI",
          des: "基于Vue的组件库",
          icon: "vuejs",
          home: {
            icon: "home-circle",
            url: "",
          },
          github: {
            icon: "github",
            url: "",
          },
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.card-content span {
  margin-bottom: 10px;
}
</style>
