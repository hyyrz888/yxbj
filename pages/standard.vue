<template>
  <section class="standard">
    <div class="columns">
      <card :title="item.name" v-for="(item, key) of items" :key="key">
        <div slot="content">
          <b-icon :icon="item.icon" size="is-large" type="is-info" />
          <p>{{ item.desc }}</p>
        </div>
        <div slot="footer">
          <a :href="item.home"><b-icon :icon="item.logo" type="is-dark" /></a>
          <a :href="item.contribute">
            <b-icon :icon="item.logo" type="is-dark"
          /></a>
        </div>
      </card>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";
export default {
  name: "standard",
  data() {
    return {
      items: [
        {
          contribute: "https://github.com/nodejscn/node-api-cn",
          desc: "基于 V8 引擎的 JS 运行环境",
          home: "http://nodejs.cn/",
          is_docschina: true,
          logo: "https://cdn.docschina.org/home/logo/node.svg",
          name: "Node.js",
        },
        {
          desc: "提供 Web 技术文档，学习 Web 开发的最佳实践",
          home: "https://developer.mozilla.org/zh-CN/docs/Web",
          logo:
            "https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png",
          name: "MDN",
        },
        {
          contribute: "https://github.com/docschina/ecma262",
          desc: "ECMAScript 2018 标准",
          home: "https://ecma262.docschina.org/",
          is_docschina: true,
          logo: "https://cdn.docschina.org/home/logo/ecma.svg",
          name: "ECMAScript",
        },
        {
          contribute: "https://github.com/xitu/graphql.github.io",
          desc: "一种用于 API 的查询语言",
          home: "http://graphql.cn/",
          logo: "https://cdn.docschina.org/home/logo/graphql.svg",
          name: "GraphQL",
        },
        {
          contribute:
            "https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md",
          desc: "OpenAPI 规范为 RESTful API 定义了一个与语言无关的标准接口",
          home: "https://swagger.io/docs/specification/about/",
          logo: "https://cdn.docschina.org/home/logo/openapi.png",
          name: "OpenAPI",
        },
        {
          contribute: "https://github.com/json-schema-org/json-schema-spec",
          desc: "JSON Schema 是一个词汇表，可以验证、注释和操作 JSON 文档",
          home: "http://json-schema.org/",
          logo: "https://cdn.docschina.org/home/logo/json-schema.svg",
          name: "JSON Schema",
        },
      ],
    };
  },
};
</script>