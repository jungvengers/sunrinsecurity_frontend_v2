// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss";@import "@/assets/styles/_fonts.scss";@import "@/assets/styles/_animations.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      BaseUrl: process.env.BASE_URL ?? "http://localhost:3000",
      ServiceDomain: process.env.SERVICE_DOMAIN ?? "http://localhost:8080",
    },
  },
});
