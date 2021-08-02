import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../components/Component.vue'
import Users from '../views/admin/users/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '概览',
    icon: 'el-icon-s-help',
    component: Home
  },
  {
    path: '/admin',
    name: '系统管理',
    icon: 'el-icon-s-tools',
    component: Admin,
    children: [
      {
        path: '/admin/user',
        name: '用户管理',
        icon: 'el-icon-user-solid',
        component: Users
      }
      // {
      //   path: '/admin/dict',
      //   name: '数据字典',
      //   icon: 'el-icon-s-marketing',
      //   component: () => import('../views/About.vue')
      // }
    ]
  },
  {
    path: '/about',
    name: '关于我们',
    icon: 'el-icon-warning',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_SERVER,
  routes
})

export default router
