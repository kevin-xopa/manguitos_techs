// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  css: ["~/assets/css/cursor.css"],
  app: {
    head: {
      title: "Manguitos Tech",
      meta: [
        {
          name: "description",
          content: "Esta es mi primera aplicación con Nuxt.js",
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },
});
