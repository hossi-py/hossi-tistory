<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useRouter } from '@/composables/useRouter';

export default defineComponent({
  name: 'App',
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
    <button @click="goToVueQueryGuide">Vue Query Test</button>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>
