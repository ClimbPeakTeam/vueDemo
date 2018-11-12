import Vue from 'vue'
import Router from 'vue-router'
import $store from '@/store/index'
import { routerMode } from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
/*
*   首页相关页面
*/
const IndexRoute = () => import (/* webpackChunkName: "indexRoute" */ '@/views/Index/indexRoute');
// 首页
const Index = () => import (/* webpackChunkName: "index" */ '@/views/Index');
const NewsList = () => import (/* webpackChunkName: "newslist" */ '@/views/NewsList');
// 第二页
const MineRoute = () => import(/* webpackChunkName: "mineRoute" */ '@/views/AboutUS/mineRoute');
const AboutUS = () => import (/* webpackChunkName: "mine" */ '@/views/AboutUS');


const router = new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: IndexRoute,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
      ]
    },
    {
      path: '/newslist',
      name: 'newsList',
      component: NewsList,
    },
    {
      path: '/mine',
      component: MineRoute,
      children: [
        {
          path: '',
          name: 'aboutUS',
          meta: { title: '关于我们', useMeteTitle: true },
          component: AboutUS
        }
      ]
    }
  ]
})



// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.useMeteTitle) {
    document.title = to.meta.title
  }else {
    document.title = 'Gu迷'
  }
  next()
  // if($store.state.common.token != '' || to.path == '/login') {
  //   next()
  // }else {
  //   next({
  //     path: "/login",
  //     query: {
  //       redirect: to.fullPath
  //     }
  //   });
  // }
});

export default router;
