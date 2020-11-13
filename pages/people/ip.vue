<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="/people">便民中心</a></li>
        <li class="is-active">
          <a href="#" aria-current="page">IP地址查询</a>
        </li>
      </ul>
    </nav>
    <section class="form">
      <div class="field">
        <div class="control">
          <input
            class="input is-info"
            type="mobile"
            placeholder="输入ip地址"
            v-model="ip"
          />
        </div>
      </div>

      <div class="buttons">
        <button class="button is-info" @click="handleClick">点击查询</button>
      </div>
      <div class="block">
        <div class="block">{{ msg }}</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    //获取上下文对象
    console.log(context);
  },
  data() {
    return {
      ip: "",
      msg: "",
    };
  },
  methods: {
    async handleClick() {
      let res = await this.$axios({
        url: "/ip/location",
        params: {
          appkey: "ba1856a14915bd7b",
          ip: this.ip,
        },
      });
      //103  APPKEY无请求此数据权限
      console.log(res);
      let findata = res.data;
      if (findata.status == 201) {
        this.$buefy.toast.open({
          duration: 1000,
          message: findata.msg,
          type: "is-danger",
        });
      } else if (findata.status == 103) {
        this.$buefy.toast.open({
          duration: 1000,
          message: findata.msg,
          type: "is-danger",
        });
      } else {
        this.msg = findata.result;
      }
    },
  },
};
</script>