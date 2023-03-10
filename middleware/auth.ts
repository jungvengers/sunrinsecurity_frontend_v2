import { useAuthStore } from "~/store/auth";

export let interval: NodeJS.Timer | null = null;

export default defineNuxtRouteMiddleware(async () => {
  await run();
  // 40 minutes
  if (interval) clearInterval(interval);
  interval = setInterval(run, 40 * 60 * 1000);
});

async function run() {
  const authStore = useAuthStore();
  const res = await getAccessToken();
  authStore.setAccessToken(res.accessToken);
}
