<template>
  <section class="section">
    <div class="columns">
      <card :title="item.name" v-for="(item, key) of items" :key="key">
        <div slot="content">
          <b-icon :icon="item.logo" size="is-large" type="is-info" />
          <p>{{ item.desc }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home" target="_blank"
            ><b-icon icon="home" type="is-dark"
          /></a>
          <a :href="item.contribute" target="_blank">
            <b-icon icon="github" type="is-dark"
          /></a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";
export default {
  name: "webfonts",
  data() {
    return {
      items: [
        {
          contribute: "https://github.com/Templarian/MaterialDesign-Webfont",
          desc: "Icon图标中文搜索助手",
          home: "https://iconhelper.cn/",
          is_evernote: true,
          logo: "block-helper",
          name: "Icon助手",
        },
      ],
    };
  },
};
</script>