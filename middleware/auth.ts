export default defineNuxtRouteMiddleware(async (to) => {
  await getAccessToken();
});
