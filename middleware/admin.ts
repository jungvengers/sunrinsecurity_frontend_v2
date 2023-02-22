export default defineNuxtRouteMiddleware(async (to) => {
  console.log(await getAdmin());
});
