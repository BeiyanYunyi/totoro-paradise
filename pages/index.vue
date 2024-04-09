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
  <p class="text-subtitle-1">
    古典时代的人发现人体是权力的对象和目标。……这种人体是被操纵、被塑造、被规训的。它服从，配合，变得灵巧、强壮。“人是机器”这部大书是在两个领域被同时撰写的。
  </p>
  <p class="mt-2 text-end">
    —— 米歇尔·福柯《规训与惩罚》
  </p>
  <VDivider class="my-4" />
  <div class="flex flex-col gap-4">
    <p class="text-body-1">
      请用微信扫码，扫码后点击“下一步”按钮
    </p>
    <VCard :height="200" :width="200">
      <img
        v-if="!message"
        :src="data!.imgUrl"
        class="w-100"
        referrerpolicy="no-referrer"
      >
      <div v-else class="h-100 w-100 flex items-center justify-center">
        {{ message }}
      </div>
    </VCard>
    <div class="mt-2 flex">
      <VBtn color="primary" append-icon="i-mdi-arrow-right" @click="handleScanned">
        下一步
      </VBtn>
    </div>
    <div class="text-sm pre-wrap">
      {{ poem[Math.floor(Math.random() * poem.length)].join('\n') }}
    </div>
  </div>
</template>
