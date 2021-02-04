<template>
  <div>
    <div class="container">
      <div class="main-home">
        <div class="side-bar">
          <h1>学习日记</h1>
          <div class="bar">
            <router-link to="/" class="home">首页</router-link>
          </div>
          <div class="bar">
            <router-link to="/rugBlog" class="regulate">管理页面</router-link>
          </div>
          <div class="bar">
            <router-link to="/pshBlog" class="write">写文章</router-link>
          </div>
          <div class="bar">
            <router-link to="/login" class="home">管理者登录</router-link>
          </div>
        </div>
        <div class="blog-list">
          <div class="blog" v-for="item in list" :key="item.blog_id">
            <!-- <a href="blogdetail" class="blog-title">33</a> -->
            <div class="time-box">
              <div class="blog-title">
                {{
                item.title
                }}
              </div>
              <span class="past-time">{{item.post_time.slice(0,10)}}</span>
            </div>
            <div class="del-box">
              <p class="blog-content">{{item.content.slice(0,55)}}</p>
              <button class="del-btn" @click="delBlog(item.blog_id)">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getContData();
  },
  methods: {
    getContData() {
      this.$http.get("/blog/conlist").then(res => {
        let { state } = res.data;
        if (state == "success") {
          let { blogs } = res.data;
          this.list = blogs;
          console.log(list);
        }
      });
    },
    delBlog(blogId){
        this.$http.post('/blog/delete',{
                blogId:blogId
        }).then(res=>{
            if(res.data.state='success'){
                alert('删除成功')
                this.getContData()
            }else{
                alert('删除失败')
            }
            
        })
    }
  }
};
</script>
<style  scoped>
a {
  color: black;
  text-decoration: none;
}
.del-btn {
  width: 60px;
}
.del-btn:hover {
  color: red;
}
.blog-list {
  background: white;
  width: 815px;
  margin: 20px 30px;
}
.del-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog {
  background: white;
  padding: 20px;
  margin: 0;
  border-bottom: 2px solid black;
}
.blog:last-child {
  border: none;
}
.past-time {
  font-size: 10px;
  color: #999999;
}
.blog-title {
  font-size: 18px;
  color: #333333;
  font-weight: 500;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
.main-home {
  display: flex;
  justify-content: center;
}
.blog-title:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.bar {
  margin-top: 10px;
}
.side-bar {
  background: white;
  margin: 20px 0;
  padding: 20px 20px;
  font-size: 15px;
  font-weight: 300;
  height: 240px;
}
.personal:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.write:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.regulate:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.home:hover {
  cursor: pointer;
  color: cornflowerblue;
}
.home,
.regulate,
.write,
.personal {
  padding: 10px 0;
}
.time-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  text-align: center;
}
</style>