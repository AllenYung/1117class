import { createRouter, createWebHistory } from 'vue-router'
//將變數HomeView 帶入檔案入逕
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtestAndVmodel',
      name: 'VtestAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtestAndVmodel.vue')
    },
    {
      // path:'/test',
      // name:'/test',
      // component:()=>import('../views/TestPage.vue')
    }
  ]
})

export default router
