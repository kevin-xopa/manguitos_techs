// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  css: ["~/assets/css/cursor.css"],

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/manguitos_techs/" : "/",
    cdnURL: process.env.NODE_ENV === "production" ? "/manguitos_techs/" : "/",
    head: {
      title: "Manguitos Tech",
      meta: [
        {
          name: "description",
          content: "Esta es mi primera aplicación con Nuxt.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/vuetify@{{ version }}/dist/vuetify.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
        },
      ],
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    define: {
      "process.env.DEBUG": false, // Evita errores en producción con Vuetify
    },
  },

  devtools: { enabled: true },

  generate: {
    fallback: "404.html", // Para que GitHub Pages maneje bien las rutas
  },
});
