<template>
  <section class="column section">
    <b-tabs v-model="activeTab" :multiline="multiline">
      <template v-for="item in items">
        <b-tab-item :key="item.id" :value="item.id" :label="item.label">
          {{ item.content }}
        </b-tab-item>
      </template>
    </b-tabs>
  </section>
</template>

<script>
export default {
  layout: "layout_article",
  data() {
    return {
      multiline: true,
      activeTab: "JavaScript", //默认选中
      teststring: "周刊",
      items: [
        {
          id: "JavaScript",
          label: "JavaScript",
          content: "周刊",
          displayed: true,
        },
        {
          id: "Node",
          label: "Node",
        },
        {
          id: "CSS",
          label: "CSS",
        },
        {
          id: "VueNews",
          label: "VueNews",
        },
      ],
      content: [
        {
          title: "新闻标题",
          desc: "新闻内容",
          addtime: "12-12",
        },
      ],
    };
  },
};
</script>