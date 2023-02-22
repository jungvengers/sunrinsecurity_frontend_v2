import { useAdminStore } from "~~/store/admin";

export default defineNuxtRouteMiddleware(async (to) => {
  const store = useAdminStore();
  if (store.role) return;
  const data = await getAdmin();
  store.role = data.role;
});
