import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '', name: 'HomeView', component: () => import('@/views/HomeView') },
        { path: 'register', name: 'Register', component: () => import('@/views/RegisterView') },
        { path: 'login', name: 'Login', component: () => import('@/views/LoginView') },
        { path: 'profile', name: 'Profile', component: () => import('@/views/ProfileView') },
        { path: 'accountRescue', name: 'AccountRescue', component: () => import('@/views/AccountRescueView') },
        {
          path: 'admin',
          name: 'adminLayout',
          component: () => import('@/views/AdminLayout'),
          children: [
              { path: '', name: 'AdminLogin', component: () => import('@/views/AdminLayout/AdminLogin') },
              { path: 'admin-items', name: 'AdminItems', component: () => import('@/views/AdminLayout/AdminItems') },
              { path: 'add-item', name: 'AddItem', component: () => import('@/views/AdminLayout/AddItem') },
              { path: 'edit-item/:id', name: 'Login', component: () => import('@/views/AdminLayout/EditItem') },
          ]
        }
      ]
    }
  ]
})

export default router
