import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/containers/LoginPage'
import HomePage from '@/containers/HomePage'
import ProductPage from '@/containers/ProductPage'
import MinePage from '@/containers/MinePage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: '登录',
    component: LoginPage
  }, {
    path: '/home',
    name: '主页',
    component: HomePage
  }, {
    path: '/product',
    name: '产品',
    component: ProductPage
  }, {
    path: '/mine',
    name: '我的',
    component: MinePage
  }, {
    path: '*',
    redirect: '/home'
  }]
})
