import {
  defineConfig,
  presetIcons,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetWind(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [['pre-wrap', { 'white-space': 'pre-wrap' }]],
});
