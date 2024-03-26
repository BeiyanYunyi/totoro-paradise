<script setup lang="ts">
import decryptRequestContent from '~/src/utils/decryptRequestContent';

const encoded = ref('');
const decoded = computed(() => {
  try {
    return decryptRequestContent(encoded.value);
  } catch (e) {
    console.error(e);
    return 'Failed';
  }
});
</script>
<template>
  <VTextarea v-model="encoded" variant="outlined" />
  <div class="pre-wrap">
    {{ JSON.stringify(decoded, null, 2) }}
  </div>
</template>
