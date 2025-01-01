import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/home.vue') },
    { path: '/about', component: () => import('@/views/about.vue') },
  ],
})
