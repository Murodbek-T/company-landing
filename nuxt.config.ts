import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon", "@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", iso: "en-US", file: "en.json", name: "English" },
      { code: "ru", iso: "ru-RU", file: "ru.json", name: "Русский" },
      { code: "uz", iso: "uz-UZ", file: "uz.json", name: "O‘zbekcha" },
    ],
  },
});
