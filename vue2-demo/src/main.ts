import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCompositionAPI, { createApp, h } from '@vue/composition-api';
import { VueQueryPlugin } from '@tanstack/vue-query';

Vue.use(VueCompositionAPI);
Vue.use(VueQueryPlugin);

Vue.config.productionTip = false;

createApp({
  router,
  render() {
    return h(App);
  },
}).mount('#app');
