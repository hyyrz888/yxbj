<template>
  <div class="section">
    <section>
      <b-field
        horizontal
        label="管理员账号"
        type="is-danger"
        message="Please enter a subject"
      >
        <b-input name="subject" expanded></b-input>
      </b-field>

      <b-field horizontal label="管理员密码">
        <b-input name="password" placeholder="Name"></b-input>
      </b-field>

      <b-field horizontal>
        <p class="control">
          <button class="button is-primary">登录</button>
        </p>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "joblife",
  data() {
    return {};
  },
};
</script>