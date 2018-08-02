import Vue from 'vue'
import Router from 'vue-router'
// 先把新组件引入进来
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当用户访问根路径时访问的组件
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
