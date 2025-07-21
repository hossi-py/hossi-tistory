import Vue from 'vue';
import VueRouter from 'vue-router';
import { vueQueryRoute } from './routes/vue-query';

Vue.use(VueRouter);

const routes = [vueQueryRoute];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
