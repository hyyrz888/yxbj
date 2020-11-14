<template>
  <section class="template">
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
  name: "build",
  data() {
    return {
      items: [
        {
          desc: "JavaScript 模板引擎",
          home: "http://ejs.co/",
          logo: "",
          name: "EJS",
        },
        {
          desc: "JavaScript 模板引擎",
          home: "https://pugjs.org/",
          logo: "",
          name: "Pug",
        },
        {
          desc: "JavaScript 模板引擎",
          home: "https://handlebarsjs.com/",
          logo: "",
          name: "Handlebars.js",
        },
      ],
    };
  },
};
</script>