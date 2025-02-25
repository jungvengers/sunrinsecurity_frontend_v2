// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt"],
  css: ["~/assets/styles/global.scss"],
  app: {
    head: {
      title: "정보보호과",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss";@import "@/assets/styles/_fonts.scss";@import "@/assets/styles/_animations.scss";@import "@/assets/styles/_mixins.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        external: ["vue", "vue-router"],
      }
    }
  },
  runtimeConfig: {
    public: {
      BaseUrl: process.env.BASE_URL ?? "http://localhost:3000",
      CDNUrl: process.env.CDN_URL ?? "http://localhost:4000",
      ServiceDomain: process.env.SERVICE_DOMAIN ?? "http://localhost:8080",
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID ?? "G-XXXXXXXXXX",
    },
  },
});
