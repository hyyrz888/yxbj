<template>
  <div id="evernot">
    <app-header></app-header>
    <section class="main-content section">
      <div class="container">
        <div class="columns">
          <!--侧边栏-->
          <aside
            class="column is-full-mobile is-one-thirds-tablet is-one-fifth-desktop is-one-fifth-widescreen"
          >
            <!-- <div class="block pt-3 pb-3 pl-3 mb-0 bg-primary">
              <strong class="text-white">网站导航</strong>
            </div> -->
            <b-menu class="is-custom-mobile">
              <p>{{ nowTime }}</p>
              <b-menu-list>
                <b-menu-item
                  tag="nuxt-link"
                  :label="item.title"
                  v-for="(item, key) of items"
                  :key="key"
                  :to="item.to.name"
                ></b-menu-item>
              </b-menu-list>
            </b-menu>
          </aside>
          <!-- <aside
            class="menu column is-full-mobile is-one-thirds-tablet is-one-fifth-desktop is-one-fifth-widescreen"
          >
            <p class="menu-label">General</p>
            <ul class="menu-list">
              <li v-for="(item, key) of items" :key="key">
                <a>{{ item.title }}</a>
              </li>
            </ul>
          </aside> -->
          <!--内容-->
          <div
            class="column is-full-mobile is-two-thirds-tablet is-three-fifth-desktop is-three-fifths-widescreen"
          >
            <nuxt />
          </div>

          <!--右侧-->
          <div
            class="column is-one-fifth is-hidden-touch is-one-fifth-desktop is-one-fifth-widescreen"
          >
            <app-sidebar-right></app-sidebar-right>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./app-header";
import AppFooter from "./app-footer";
import AppSidebarRight from "./app-sidebar-right";

export default {
  name: "Default",
  //页面级别的中间件定义
  middleware({ app }) {
    console.log("layouts middleware");
  },
  components: {
    AppHeader,
    AppFooter,
    AppSidebarRight,
  },
  asyncData() {},
  data() {
    return {
      currentIndex: 0,
      nowTime: "",
      items: [
        {
          title: "前端框架",
          to: { name: "/" },
        },
        {
          title: "小程序框架",
          to: { name: "mini-program" },
        },
        {
          title: "Node.js",
          to: { name: "node" },
        },
        {
          title: "CSS",
          to: { name: "css" },
        },
        {
          title: "语言文档和规范",
          to: { name: "standard" },
        },
        {
          title: "代码风格检查",
          to: { name: "dmfg" },
        },
        {
          title: "状态管理",
          to: { name: "store" },
        },
        {
          title: "编程教程",
          to: { name: "teach" },
        },
        {
          title: "函数式编程",
          to: { name: "funcs" },
        },
        {
          title: "测试工具",
          to: { name: "test" },
        },
        {
          title: "编译构建",
          to: { name: "build" },
        },
        {
          title: "模板引擎",
          to: { name: "template" },
        },
        {
          title: "可视化工具",
          to: { name: "viewtool" },
        },
        {
          title: "utils 工具",
          to: { name: "utils" },
        },
        {
          title: "其他工具",
          to: { name: "other" },
        },
        {
          title: "数据库",
          to: { name: "db" },
        },
      ],
    };
  },
  computed: {
    aaa() {
      return "你好";
    },
  },
  mounted() {
    //当前时间
    // this.nowTime = $nuxt.context.app.data.systemNowDate;
    var _this = this;
    this.timer = setInterval(() => {
      _this.nowTime = this.dateFormat(new Date()); // 修改日期数据
    }, 1000);
  },
  methods: {
    setZero(a) {
      //设置小于10的数字在加0
      return a < 10 ? "0" + a : a;
    },
    dateFormat(date) {
      // let date = new Date();
      //当前时间格式化处理
      var str = "";
      var weekDay = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      str += this.setZero(date.getFullYear()) + "年"; //获取年份
      str += this.setZero(date.getMonth() + 1) + "月"; //获取月份
      str += this.setZero(date.getDate()) + "日"; //获取日
      str += " " + weekDay[date.getDay()]; //获取星期
      str += " " + this.setZero(date.getHours()) + ":"; //获取时
      str += " " + this.setZero(date.getMinutes()) + ":"; //获取分
      str += this.setZero(date.getSeconds()); //获取秒
      return str;
    },
    handleClick(key) {
      console.log(key);
      this.currentIndex = key;
    },
  },
  destroyed() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除当前日期定时器
    }
  },
};
</script>


<style lang="less" scoped>
.b-sidebar .sidebar-content {
  width: 100%;
}
</style>
<style lang="less">
.nuxt-link-exact-active {
  background-color: #167df0 !important;
  border-bottom: 1px solid #eee;
  span {
    color: #fff;
  }
}
.menu {
  .menu-list a {
    font-size: 14px;
    padding: 0.8rem;
    border-bottom: 1px solid #fff;
    background-color: #f5f5f5;
  }
}
</style>
















