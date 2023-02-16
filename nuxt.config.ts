import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  vite: { ssr: { noExternal: ['vuetify'] } },
  modules: [
    '@unocss/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(vuetify());
      });
    },
  ],
});
