import { defineStore } from "pinia";

export const useAdminStore = defineStore("admin", () => {
  const role = ref<string>();
  return {
    role,
    isAdmin: computed(() => role.value === "admin"),
    isClub: computed(() => role.value !== "none"),
  };
});
