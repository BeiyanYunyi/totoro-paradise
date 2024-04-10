import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import colors from 'vuetify/lib/util/colors';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: { themes: { light: { dark: false, colors: { primary: colors.blue.darken1 } } } },
    icons: {
      defaultSet: 'mdi',
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
