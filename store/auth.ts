import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null as string | null,
  }),
  getters: {
    getAccessToken: (state) => state.accessToken,
  },
  actions: {
    setAccessToken(accessToken: string) {
      this.accessToken = accessToken;
    },
  },
});
