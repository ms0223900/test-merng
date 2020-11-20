import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      shouldCheckUser: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    props: true,
    component: () => import('../views/Home.vue'),
    meta: {
      shouldCheckUser: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    props: true,
    component: () => import('../views/Home.vue'),
    meta: {
      shouldCheckUser: true,
    },
  },
  {
    path: '/posts/:postId',
    props: true,
    name: 'Post',
    component: () => import('../views/Home.vue'),
    meta: {
      shouldCheckUser: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
