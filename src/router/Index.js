import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Admin_Dashboard from "@/views/dashboard/admin/Index.vue";
import View_evidence from "@/views/dashboard/admin/View_evidence.vue";
import Case_details from "@/views/dashboard/admin/Case_details.vue";
import Super_admin_Dashboard from "@/views/dashboard/super_admin/Index.vue";
import Show_admin from "@/views/dashboard/super_admin/Show_admin.vue";
import Verify from "@/views/auth/Verify.vue";

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
      path: '/verify/:id',
      component : Verify
    },


    {
      path: '/dashboard/admin',
      component : Admin_Dashboard
    },
    {
      path: '/dashboard/super_admin',
      component : Super_admin_Dashboard
    },
    {
      path: '/dashboard/admin/case_details/:case_id/:key_id',
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
