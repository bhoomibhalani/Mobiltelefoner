// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import store from '@/store';
import App from './App';
import router from './router';
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
