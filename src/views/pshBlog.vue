<template>
  <div class="about">
    <div class="container">
      <div class="psh-title">
        <div>标题</div>
        <input type="text" v-model="title">
      </div>
      <div class="psh-content">
        <div>内容</div>
        <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
      </div>
      <div class="psh-btn">
        <button @click="pshBlog">发布文章</button>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:'',
      content:'',
    };
  },
  methods: {
    pshBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            user_id: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          });
      }else{
          alert('未登录 请前往登录');
          this.$router.push('/login');
      }
    },
  },
};
</script>
<style scoped>
.psh-title,.psh-content,.psh-btn{
  margin: 20px auto;
  text-align: center;
}
input,textarea{
  width: 75%;
}
textarea{
  height: 500px;
}
</style>
