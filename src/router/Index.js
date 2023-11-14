import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import User from "@/views/dashboard/admin/User.vue";
import View_evidence from "@/views/dashboard/admin/View_evidence.vue";
import Case_details from "@/views/dashboard/admin/Case_details.vue";
import Admin from "@/views/dashboard/super_admin/admin.vue";
import Show_admin from "@/views/dashboard/super_admin/Show_admin.vue";

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
      path: '/dashboard/admin',
      component : User
    },
    {
      path: '/dashboard/super_admin',
      component : Admin
    },
    {
      path: '/dashboard/admin/case_details/:case_id/',
      component : Case_details
    },
    {
      path: '/dashboard/super_admin/show_admin',
      component : Show_admin
    },
    {
      path: '/dashboard/admin/view_evidence/:case_id/:secret_key',
      component: View_evidence
    }


  ]
})

export default router
