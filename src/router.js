// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Chat from './pages/Chat.vue' // Optionally, you can rename this file later
import Support from './pages/Support.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    { path: '/', component: Home },
    { path: '/chat', component: Chat }, // Updated route here
    { path: '/support', component: Support }
  ]
})

export default router
