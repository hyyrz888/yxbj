<template>
  <section class="template">
    <div class="columns is-multiline">
      <card
        :title="item.name"
        :team="item.team"
        v-for="(item, key) of items"
        :key="key"
      >
        <div slot="content">
          <img
            :src="item.logo"
            :alt="item.name"
            width="48"
            class="mb-2"
            v-if="item.logo.includes('//') || item.logo.includes('images')"
          />
          <div class="nologo" v-else-if="item.logo === ''">S</div>
          <b-icon :icon="item.logo" size="is-large" type="is-info" v-else />
          <p>{{ item.desc }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home" target="_blank"
            ><b-icon icon="home" type="is-dark"
          /></a>
          <a :href="item.repository" target="_blank">
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
  name: "db",
  data() {
    return {
      items: [
        {
          contribute: "",
          desc: "SQL Server",
          home: "",
          is_evernote: true,
          logo: "",
          name: "SQL Server",
        },
        {
          contribute: "",
          desc: "mysql",
          home: "",
          is_evernote: true,
          logo: "",
          name: "Mysql",
        },
        {
          contribute: "",
          desc: "基于分布式文件存储的开源数据库系统",
          home: "",
          is_evernote: true,
          logo: "",
          name: "Mongodb",
        },
      ],
    };
  },
};
</script>