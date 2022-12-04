import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgetPassword',
    component: () => import('../views/ResetPassword.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/createproduct',
    name: 'createproduct',
    component: () => import('../components/createproduct.vue'),
  },
  {
    path: '/createcustomer',
    name: 'createcustomer',
    component: () => import('../components/createcustomer.vue'),
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/client.vue'),
  },
  {
    path: '/orderfabrication',
    name: 'orderfabrication',
    component: () => import('../views/orderfabrication.vue'),
  },
  {
    path: '/machine',
    name: 'machine',
    component: () => import('../views/machine.vue'),
  },
  {
    path: '/**',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
