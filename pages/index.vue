<template>
  <div class="flex flex-col items-start">
    <img
      v-if="!message"
      :src="data!.imgUrl"
      width="430"
      height="430"
      class="h-[430px] w-[430px]"
      referrerpolicy="no-referrer"
    />
    <div v-else class="h-[430px] w-[430px] flex items-center justify-center">
      {{ message }}
    </div>
    <div class="flex mt-2">
      <button
        class="hover:decoration-underline text-blue p-2 border rounded"
        @click="handleScanned"
      >
        已扫码
      </button>
      <NuxtLink
        to="https://github.com/lixiang810/totoro-paradise"
        class="hover:decoration-underline text-blue p-2 border rounded ms-2 flex items-center"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div class="i-mdi-github mr-2 text-2xl" />
        获取项目源码
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import useSession from '~~/state/useSession';

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
