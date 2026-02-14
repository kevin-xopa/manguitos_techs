import "vuetify/styles";
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify";


import defaults from "./vuetify/defaults";
import { icons } from "./vuetify/icons";
import theme from "./vuetify/theme";



export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    display: {
        mobileBreakpoint: "xs",
        // thresholds: {
        //     xs: 0,
        //     sm: 340,
        //     md: 540,
        //     lg: 800,
        //     xl: 1280,
        // },
    },
    ssr: false,
    defaults,
    icons,
    theme,
  });
  app.vueApp.use(vuetify);
});
