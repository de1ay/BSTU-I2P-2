import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '@/views/Index.vue';
import CSSComponent from '@/views/Css.vue';
import HTMLComponent from '@/views/Html.vue';
import JSComponent from '@/views/Js.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'main' },
    meta: {
      visible: false,
    },
  },
  {
    path: '/main',
    name: 'main',
    component: Index,
    meta: {
      visible: true,
      text: 'main',
    },
  },
  {
    path: '/html',
    name: 'html',
    component: HTMLComponent,
    meta: {
      visible: true,
      text: 'html',
    },
  },
  {
    path: '/css',
    name: 'css',
    component: CSSComponent,
    meta: {
      visible: true,
      text: 'css',
    },
  },
  {
    path: '/js',
    name: 'js',
    component: JSComponent,
    meta: {
      visible: true,
      text: 'js',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      visible: true,
      text: 'about',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
