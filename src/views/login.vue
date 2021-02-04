<template>
  <div class="container">
    <div class="login-form">
      <h2>管理者登录</h2>

      <p>
        用户名
        <input type="text" v-model="username" />
      </p>
      <p>
        密码
        <input type="password" v-model="password" />
      </p>
      <p>
        <button class="btn" @click="goLogin">登录</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    goLogin() {
      this.$http
        .post("http://localhost:3000/user/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          
          if(res.data.state=='success'){
            var token=res.data.token
            var user=res.data.user
            //存user信息
          this.$store.commit('storeLoginUser', user);
            // 存token
            this.$store.dispatch('setToken', token)
          this.$router.push('/')
          }
          
        });
    }
  }
};
</script>
<style  scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 140px auto;
  padding: 20px auto;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}
.btn {
  width: 70px;
}
</style>