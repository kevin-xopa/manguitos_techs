import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  css: ["~/assets/css/cursor.css"],

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/manguitos_techs/" : "/",
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
          href: "https://cdn.jsdelivr.net/npm/vuetify@latest/dist/vuetify.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
        },
      ],
      script: [
        {
          type: "importmap",
          children: `{
            "imports": {
              "vue": "https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.esm-browser.js",
              "vuetify": "https://cdn.jsdelivr.net/npm/vuetify@latest/dist/vuetify.esm.js"
            }
          }`,
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
        config.plugins.push(
          vuetify({
            autoImport: true,
          })
        );
      });
    },
  ],

  vite: {
    define: {
      "process.env.DEBUG": false, // Evita errores en producción con Vuetify
    },
  },

  devtools: { enabled: true },

  router: {
    base: "/manguitos_techs/", // Esta línea es crucial para GitHub Pages
  },
});
