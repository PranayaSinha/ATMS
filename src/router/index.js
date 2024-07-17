// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import Table from '../components/Table.vue';

const routes = [
  { 
    path: '/', 
    component: Signup 
  },
  { 
    path: '/signin', 
    component: Signin 
  },
  { 
    path: '/signup', 
    component: Signup 
  },
  { 
    path: '/table', 
    component: Table 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
