<template>
  <div class="flex flex-col items-start">
    <img :src="data!.imgUrl" width="430" height="430" />
    <NuxtLink
      :to="`/scanned/${data!.uuid}`"
      class="hover:decoration-underline text-blue mt-2 p-2 border rounded"
    >
      已扫码
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/scanQr');
</script>
