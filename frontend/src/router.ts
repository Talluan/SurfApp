import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'; 
import Plage from './views/Plage.vue';
import Login from './views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/plage/:id', component: Plage },
  { path: '/login', component: Login },
];

const router = createRouter({
    routes,
    history : createWebHistory(),
});

export default router;