<script setup lang="ts">
const { data } = await useFetch('/api/scanQr');
const router = useRouter();
const message = ref('');
const session = useSession();

const handleScanned = async () => {
  const scanRes = await $fetch(`/api/scanQr/${data!.value!.uuid}`);
  if (!scanRes.session) {
    message.value = scanRes.message;
  } else {
    session.value = scanRes.session;
    router.push('/scanned');
  }
};
</script>
<template>
  <div><p>请用微信扫码，扫码后点击“已扫码”按钮</p></div>
  <div class="flex flex-col items-start">
    <img
      v-if="!message"
      :src="data!.imgUrl"
      width="430"
      height="430"
      class="h-[430px] w-[430px]"
      referrerpolicy="no-referrer"
    >
    <div v-else class="h-[430px] w-[430px] flex items-center justify-center">
      {{ message }}
    </div>
    <div class="mt-2 flex">
      <VBtn color="primary" @click="handleScanned">
        已扫码
      </VBtn>
      <NuxtLink
        to="https://github.com/BeiyanYunyi/totoro-paradise"
        rel="noreferrer noopener"
        target="_blank"
      >
        <VBtn color="primary" class="ml-2">
          <span class="i-mdi-github mr-2 text-2xl" />
          获取项目源码
        </VBtn>
      </NuxtLink>
    </div>
    <div class="text-sm pre-wrap">
      {{ poem[Math.floor(Math.random() * poem.length)].join('\n') }}
    </div>
  </div>
</template>
