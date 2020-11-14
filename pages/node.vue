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
          <div class="nologo" v-else-if="item.logo === ''">R</div>
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
  name: "node",
  data() {
    return {
      items: [
        {
          contribute: "https://github.com/demopark/koa-docs-Zh-CN",
          desc: "新一代的 Web 后台框架",
          home: "https://koajs.docschina.org/",
          is_evernote: true,
          logo: "https://cdn.docschina.org/home/logo/koa.svg",
          name: "Koa",
        },
        {
          desc: "为企业级框架和 Node.js & Koa 应用程序而生",
          home: "https://eggjs.org/",
          logo: "@/assets/images/node/egg.png",
          name: "egg",
          repository: "https://github.com/eggjs/egg",
          team: "阿里巴巴",
        },
        {
          desc: "快速极简的 Web 框架",
          home: "http://expressjs.com/zh-cn/",
          logo: "https://cdn.docschina.org/home/logo/express.png",
          name: "Express",
          repository: "https://github.com/expressjs/express",
        },
        {
          desc: "渐进式 Node.js 框架，构建高效、可靠和可扩展的 server 应用程序",
          home: "https://nestjs.com/",
          logo: "https://cdn.docschina.org/home/logo/nest.png",
          name: "nest",
          repository: "https://github.com/nestjs/nest",
        },
        {
          desc: "能够使用完整 ES6/7 特性进行开发的 Node.js 应用程序",
          home: "https://thinkjs.org/",
          logo: "https://cdn.docschina.org/home/logo/think.png",
          name: "ThinkJS",
          repository: "https://github.com/thinkjs/thinkjs",
          team: "360",
        },
        {
          desc:
            "npm 是 JavaScript package 管理工具，在这里可以找到可复用代码，并以强大的全新方式进行聚合",
          home: "https://docs.npmjs.com/",
          logo: "npm",
          name: "npm",
        },
        {
          desc: "淘宝提供的 npmjs.org 镜像",
          home: "https://npm.taobao.org/",
          logo: "https://npm.taobao.org/favicon.png",
          name: "cnpm",
        },
        {
          desc: "快速、可靠和安全的依赖管理",
          home: "https://yarnpkg.com/zh-Hans/",
          logo: "https://cdn.docschina.org/home/logo/yarn.png",
          name: "yarn",
        },
      ],
    };
  },
};
</script>