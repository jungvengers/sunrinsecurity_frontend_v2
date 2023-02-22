import { defineStore } from "pinia";

export const useAdminStore = defineStore("admin", () => {
  const role = ref<string>();
  return { role };
});
