import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Chatdata from './views/Chatdata.vue'
import WorkPanel from './views/WorkPanel/WorkPanel.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/chatdata', name: 'Chatdata', component: Chatdata },
    { path: '/workPanel', name: 'WorkPanel', component: WorkPanel }
  ]
})

export default router