import Vue from 'vue';
import Router from 'vue-router';

const dev = process.env.NODE_ENV === 'development';

const BASE_URL = dev ? '' : '';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: BASE_URL,
  routes: [
    {
      path: '/',
      name: 'redirect',
      redirect: { name: 'index' },
    },
    {
      path: '/index.html',
      name: 'index',
      meta: {
        title: '跳转页',
        share: false,
      },
      component: () => import(/* webpackChunkName: "operational" */ './views/Index.vue'),
    },
    {
      path: '/programList.html',
      name: 'programList',
      meta: {
        title: '节目清单',
        share: false,
      },
      component: () => import(/* webpackChunkName: "operational" */ './views/ProgramList.vue'),
    },
    {
      path: '/sign.html',
      name: 'sign',
      meta: {
        title: '签到',
        share: false,
      },
      component: () => import(/* webpackChunkName: "operational" */ './views/Sign.vue'),
    },
  ],
});

export default router;
