import vuetify from 'vite-plugin-vuetify';
import inject from '@rollup/plugin-inject';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,
  routeRules: { '/totoro/**': { proxy: 'https://app.xtotoro.com/app/**' } },
  vite: {
    build: { commonjsOptions: { transformMixedEsModules: true } },
    resolve: { alias: { buffer: 'buffer' } },
    plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    ssr: { noExternal: ['vuetify'] },
    optimizeDeps: {
      include: ['@vueuse/core', 'date-fns', 'uuid', 'md5', '@amap/amap-jsapi-loader'],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@unocss/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
});
