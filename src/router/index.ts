import { createRouter, createWebHashHistory } from 'vue-router'
import ExplorerView from '../views/ExplorerView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'explorer',
      component: ExplorerView,
    },
  ],
})

export default router
