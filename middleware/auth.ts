import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore();
  if (!authStore.getAccessToken) {
    const res = await getAccessToken();
    authStore.setAccessToken(res.accessToken);
  }
});
