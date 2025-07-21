// composables/useRouter.ts
import { getCurrentInstance } from '@vue/composition-api';

export const useRouter = () => {
  const vm = getCurrentInstance();
  return vm?.proxy.$router;
};

export const useRoute = () => {
  const vm = getCurrentInstance();
  return vm?.proxy.$route;
};
