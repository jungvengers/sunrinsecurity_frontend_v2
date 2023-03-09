import { useAuthStore } from "~/store/auth";

export let interval: NodeJS.Timer | null = null;

export default defineNuxtRouteMiddleware(async () => {
  await getAccessToken();
  // 40 minutes
  if (interval) clearInterval(interval);
  interval = setInterval(getAccessToken, 40 * 60 * 1000);
});
