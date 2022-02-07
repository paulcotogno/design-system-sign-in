import { createRouter, createWebHistory } from 'vue-router'
import SignUp from "@/views/SignUp";
import SignIn from "@/views/SignIn";
import ForgottenPassword from "@/views/ForgottenPassword";
import ConfirmConnected from "@/views/ConfirmConnected";
import ConfirmSendMail from "@/views/ConfirmSendMail";

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
  {
    path: '/confirm-mail-sent',
    name: 'ConfirmSendMail',
    component: ConfirmSendMail
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
