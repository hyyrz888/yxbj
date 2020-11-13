<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">首页</a></li>
        <li class="is-active">
          <a href="#" aria-current="page">便民中心</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <div class="columns is-fullhd">
        <div class="column is-3" v-for="(item, key) in tools" :key="key">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">{{ item.name }}</p>
            </header>
            <div class="card-content">
              <div
                class="content is-flex is-flex-wrap-wrap is-justify-content-center"
              >
                <figure class="image is-48x48 mb-3">
                  <img
                    :src="require('~/assets/' + item.logo)"
                    width="100"
                    height="100"
                  />
                </figure>
                <p>
                  {{ item.content }}
                </p>
              </div>
            </div>
            <footer class="card-footer">
              <a
                :href="item.url"
                class="card-footer-item has-background-info has-text-white"
                >查询</a
              >
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          name: "手机归属地查询",
          url: "/people/mobile",
          logo: "images/shouji.png",
          content:
            "全国移动、联通、电信等手机号码归属地查询，数据量有数百万，更新及时、准确度高。",
        },
        {
          name: "IP地址查询",
          url: "/people/ip",
          logo: "images/ip.png",
          content: "IP的归属地、运营商类型查询",
        },
      ],
    };
  },
};
</script>