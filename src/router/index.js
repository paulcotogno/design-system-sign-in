import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "@/views/SignUp";
import SignIn from "@/views/SignIn";
import ForgottenPassword from "@/views/ForgottenPassword";
import ConfirmConnected from "@/views/ConfirmConnected";

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/password-reset',
    name: 'ForgottenPassword',
    component: ForgottenPassword
  },
  {
    path: '/confirm-connected',
    name: 'ConfirmConnected',
    component: ConfirmConnected
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
