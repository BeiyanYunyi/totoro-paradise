import { transformerDirectives, transformerVariantGroup, presetWind, defineConfig } from 'unocss';

export default defineConfig({
  presets: [presetWind()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
