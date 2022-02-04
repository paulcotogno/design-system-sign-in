import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "@/views/SignIn";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SignIn
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
