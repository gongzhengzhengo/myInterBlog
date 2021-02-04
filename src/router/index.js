import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import Detail from '../views/blogDetail.vue'
import PshBlog from '../views/pshBlog.vue'
import RugBlog from '../views/rugBlog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/blog/detail/:blogId',
    name: 'Detail',
    component: Detail
  }, {
    path: '/pshBlog',
    name: 'PshBlog',
    component: PshBlog
  }, {
    path: '/rugBlog',
    name: 'RugBlog',
    component: RugBlog
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
