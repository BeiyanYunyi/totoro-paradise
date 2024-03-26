<script setup lang="ts">
import decryptRequestContent from '~/src/utils/decryptRequestContent';
import encryptRequestContent from '~/src/utils/encryptRequestContent';

const encoded = ref('');
const decoded = computed(() => {
  try {
    return decryptRequestContent(encoded.value);
  } catch (e) {
    console.error(e);
    return 'Failed';
  }
});
const encrypted = computed(() => {
  try {
    return encryptRequestContent(decoded.value === 'Failed' ? {} : decoded.value);
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
    {{ encrypted }}
  </div>
</template>
