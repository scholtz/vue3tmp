import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/FormsTable.vue')
    },
    {
      path: '/form-edit',
      name: 'form',
      component: () => import('../views/FormEditView.vue')
    }
  ]
})

export default router
