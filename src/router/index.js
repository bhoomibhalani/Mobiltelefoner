import Vue from 'vue';
import Router from 'vue-router';
import BrandsList from '@/components/BrandsList';
import ErrorComponent from '@/components/ErrorComponent';
import store from '@/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: BrandsList,
      beforeEnter: async (to, _from, next) => {
        await store.dispatch('phone/getPhoneBrandList');

        next();
      },
    },
    {
      path: '/phones',
      name: 'BrandList',
      component: BrandsList,
      beforeEnter: async (to, _from, next) => {
        await store.dispatch('phone/getPhoneBrandList');

        next();
      },
    },
    {
      path: '/phones/:brand',
      name: 'BrandDetail',
      component: BrandsList,
      beforeEnter: async (to, _from, next) => {
        await store.dispatch('phone/getPhoneList', {brand: to.params.brand});

        next();
      },
    },
    {
      path: '/404',
      name: 'error',
      component: ErrorComponent,
    },
  ],
});
