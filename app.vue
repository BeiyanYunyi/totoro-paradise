<script setup lang="ts">
// import '@unocss/reset/tailwind.css';

const appConfig = useAppConfig();

useHead({
  title: '龙猫乐园'
})
</script>
<script lang="ts">
window.global = window;
</script>
<template>
  <VApp>
    <VAppBar color="primary">
      <VAppBarTitle>龙猫乐园</VAppBarTitle>
      <template #append>
        <VAppBarNavIcon
          v-ripple icon="i-mdi-github" href="https://github.com/BeiyanYunyi/totoro-paradise"
          rel="noreferrer noopener" target="_blank"
        />
      </template>
    </VAppBar>
    <VMain>
      <div class="p-4">
        <NuxtPage />
        <p class="mt-4 text-xs">
          Powered by totoro-paradise v{{ appConfig.version }}
        </p>
      </div>
    </VMain>
  </VApp>
</template>
