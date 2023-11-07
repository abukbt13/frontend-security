import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import User from "@/views/dashboard/user/User.vue";
import View_evidence from "@/views/dashboard/user/View_evidence.vue";
import Admin from "@/views/dashboard/admin/admin.vue";
import Show_admin from "@/views/dashboard/admin/Show_admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component : Index
    },
    {
      path: '/login',
      component : Login
    },
    {
      path: '/register',
      component : Register
    },
    {
      path: '/dashboard/user',
      component : User
    },
    {
      path: '/dashboard/admin',
      component : Admin
    },
    {
      path: '/dashboard/admin/show_admin',
      component : Show_admin
    },
    {
      path: '/dashboard/user/view_evidence/:case_id/:secret_key',
      component: View_evidence
    }


  ]
})

export default router
