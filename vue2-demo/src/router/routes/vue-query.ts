import type { RouteConfig } from 'vue-router';

export const vueQueryRoute: RouteConfig = {
  path: '/vue-query-guide',
  name: 'VueQueryGuide',
  component: () => import('@/views/vue-query/VueQueryGuide.vue'),
};
