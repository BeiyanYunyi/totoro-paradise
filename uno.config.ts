import {
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
  defineConfig,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [presetWind(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [['pre-wrap', { 'white-space': 'pre-wrap' }]],
});
