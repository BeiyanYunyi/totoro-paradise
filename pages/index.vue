<template>
  <div class="flex flex-col items-start">
    <img :src="data!.imgUrl" width="430" height="430" />
    <div class="flex mt-2">
      <NuxtLink
        :to="`/scanned/${data!.uuid}`"
        class="hover:decoration-underline text-blue p-2 border rounded"
      >
        已扫码
      </NuxtLink>
      <NuxtLink
        to="https://github.com/lixiang810/totoro-paradise"
        class="hover:decoration-underline text-blue p-2 border rounded ms-2 flex items-center"
        rel="noreferrer noopener"
      >
        <div class="i-mdi-github mr-2 text-2xl" />
        获取项目源码
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/scanQr');
</script>
