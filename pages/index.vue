<script setup lang="ts">
import TotoroApiWrapper from '~/src/wrappers/TotoroApiWrapper';

const router = useRouter();
const { data } = await useFetch<{ uuid: string; imgUrl: string }>('/api/scanQr');
const message = ref('');
const session = useSession();

const handleScanned = async () => {
  const scanRes = await $fetch(`/api/scanQr/${data!.value!.uuid}`);
  const code = (scanRes as { code: string; message: null } | { code: null; message: string })
    .code as string;
  try {
    const loginResult = (
      await Promise.all([TotoroApiWrapper.getLesseeServer(code), TotoroApiWrapper.getAppAd(code)])
    )[0];
    if (!loginResult.token) {
      message.value = loginResult.message as string;
      return;
    }
    // 获取额外信息
    const personalInfo = await TotoroApiWrapper.login({ token: loginResult.token });
    session.value = { ...personalInfo, token: loginResult.token, code, data: null };
    const breq = {
      token: loginResult.token,
      campusId: personalInfo.campusId,
      schoolId: personalInfo.schoolId,
      stuNumber: personalInfo.stuNumber,
    };
    await TotoroApiWrapper.getAppFrontPage(breq);
    await TotoroApiWrapper.getAppSlogan(breq);
    await TotoroApiWrapper.updateAppVersion(breq);
    await TotoroApiWrapper.getAppNotice(breq);
    router.push('/scanned');
  } catch (e) {
    console.error(e);
    message.value = '龙猫服务器错误';
  }
};
</script>
<template>
  <p class="text-subtitle-1">
    古典时代的人发现人体是权力的对象和目标。……这种人体是被操纵、被塑造、被规训的。它服从，配合，变得灵巧、强壮。“人是机器”这部大书是在两个领域被同时撰写的。
  </p>
  <p class="mt-2 text-end">—— 米歇尔·福柯《规训与惩罚》</p>
  <VDivider class="my-4" />
  <div class="flex flex-col gap-4">
    <p class="text-body-1">请用微信扫码，扫码后点击“下一步”按钮</p>
    <VCard :height="200" :width="200">
      <img v-if="!message" :src="data!.imgUrl" class="w-100" referrerpolicy="no-referrer" />
      <div v-else class="h-100 w-100 flex items-center justify-center">
        {{ message }}
      </div>
    </VCard>
    <div class="mt-2 flex">
      <VBtn color="primary" append-icon="i-mdi-arrow-right" @click="handleScanned"> 下一步 </VBtn>
    </div>
    <div class="text-sm pre-wrap">
      {{ poem[Math.floor(Math.random() * poem.length)].join('\n') }}
    </div>
  </div>
</template>
