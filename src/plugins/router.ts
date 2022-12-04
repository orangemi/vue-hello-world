import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/about.vue'
import Home from '@/views/home.vue'
// const Foo = { template: '<div>Foo</div>' }
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})
