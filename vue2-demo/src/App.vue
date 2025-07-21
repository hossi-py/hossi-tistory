<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useRouter } from '@/composables/useRouter';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

export default defineComponent({
  name: 'App',
  components: { VueQueryDevtools },
  setup() {
    const router = useRouter();

    const goToVueQueryGuide = () => {
      router?.push('/vue-query-guide');
    };

    return {
      goToVueQueryGuide,
    };
  },
});
</script>

<template>
  <div id="app">
    <VueQueryDevtools />
    <button @click="goToVueQueryGuide">Vue Query Test</button>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
