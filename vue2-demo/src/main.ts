import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCompositionAPI, { h } from '@vue/composition-api';
import { VueQueryPlugin } from '@tanstack/vue-query';

Vue.use(VueCompositionAPI);
Vue.use(VueQueryPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: () => h(App),
}).$mount('#app');
