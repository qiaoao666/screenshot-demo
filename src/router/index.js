import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Launch",
    component: () => import("../pages/LaunchPage.vue"),
  },
  {
    path: "/dashBoard",
    name: "DashBoard",
    component: () => import("../pages/Dashboard.vue"),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
