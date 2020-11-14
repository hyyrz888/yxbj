<template>
  <section class="build">
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
          contribute: "https://github.com/docschina/webpack.js.org",
          desc: "用于现代 JavaScript 应用程序的静态模块打包工具",
          home: "https://webpack.docschina.org/",
          is_evernote: true,
          logo: "webpack",
          name: "WebPack",
        },
        {
          contribute: "https://github.com/docschina/babeljs.io",
          desc: "一个编译工具，让你可以项目中直接使用下一代 JavaScript",
          home: "https://www.babeljs.cn/",
          homeBackup: "https://babeljs.cn/",
          is_evernote: true,
          logo: "babel",
          name: "Babel",
        },
        {
          desc: "JavaScript 超集",
          home: "https://zhongsp.gitbooks.io/typescript-handbook/",
          logo: "language-typescript",
          name: "TypeScript",
          is_evernote: true,
          contribute: "https://github.com/zhongsp/TypeScript",
        },
      ],
    };
  },
};
</script>