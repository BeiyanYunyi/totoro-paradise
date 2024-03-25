<script setup lang="ts">
// import '@unocss/reset/tailwind.css';

const appConfig = useAppConfig();
</script>
<template>
  <VApp>
    <div class="p-4">
      <NuxtPage />
      <p class="text-xs">
        Powered by totoro-paradise v{{ appConfig.version }}
      </p>
    </div>
  </VApp>
</template>
