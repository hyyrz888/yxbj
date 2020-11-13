<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="/people">便民中心</a></li>
        <li class="is-active">
          <a href="#" aria-current="page">手机归属地查询</a>
        </li>
      </ul>
    </nav>
    <section class="form">
      <div class="field">
        <div class="control">
          <input
            class="input is-info"
            type="mobile"
            placeholder="输入手机号"
            v-model="mobile"
          />
        </div>
      </div>

      <div class="buttons">
        <button class="button is-info" @click="handleClick">点击查询</button>
      </div>
      <div class="block">
        <div class="block">{{ msg }}</div>
        <table
          class="table is-bordered is-striped is-narrow is-hoverable"
          v-if="showTable"
        >
          <thead>
            <tr>
              <th>手机号</th>
              <th>省</th>
              <th>市</th>
              <th>运营商</th>
              <th>卡类型</th>
              <th>区号</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th v-for="(value, key) in showinfo" :key="key">{{ value }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      showinfo: {},
      showTable: false,
      msg: "",
    };
  },
  methods: {
    async handleClick() {
      let res = await this.$axios({
        url: "/shouji/query",
        params: {
          appkey: "ba1856a14915bd7b",
          shouji: this.mobile,
        },
      });
      console.log(res);
      let findata = res.data;
      if (findata.status == 201) {
        this.$buefy.toast.open({
          duration: 1000,
          message: findata.msg,
          type: "is-danger",
        });
      } else {
        this.showTable = true;
        this.showinfo = findata.result;
      }
    },
  },
};
</script>