<template>
  <p class="text-body-1">已选择路径 {{ target.pointName }}</p>
  <p class="text-body-1">请再次确认是否开跑</p>
  <p class="text-body-1">开跑时会向龙猫服务器发送请求，所以请尽量不要在开跑后取消</p>
  <VBtn color="primary" @click="handleRun">确认开跑</VBtn>
  <p>{{ timePassed }}/{{ needTime }}</p>
  <VProgressLinear v-if="timePassed && needTime" :model-value="timePassed / needTime" />
</template>
<script setup lang="ts">
import generateRunReq from '~~/src/controllers/generateSunRunExercisesReq';
import { useNow } from '@vueuse/core';

const now = useNow({ interval: 1000 });
const startTime = ref(new Date());
const endTime = ref(new Date());
const timePassed = computed(() => Number(now.value) - Number(startTime.value));
const needTime = ref(0);
const sunRunPaper = useSunRunPaper();
const { params } = useRoute();
const session = useSession();
const { route } = params as { route: string };
const target = computed(() => sunRunPaper.value.runPointList.find((r) => r.pointId === route)!);
const handleRun = async () => {
  console.log(route);
  const { req, endTime: targetTime } = generateRunReq({
    distance: sunRunPaper.value.mileage,
    routeId: target.value.pointId,
    taskId: target.value.taskId,
    token: session.value.token,
    schoolId: session.value.schoolId,
    stuNumber: session.value.stuNumber,
    phoneNumber: session.value.phoneNumber,
  });
  startTime.value = now.value;
  needTime.value = Number(targetTime) - Number(now.value);
  endTime.value = targetTime;
  console.log(req);

  /*
  await $fetch('/api/run/getRunBegin', {
    method: 'post',
    body: {
      campusId: session.value.campusId,
      schoolId: session.value.schoolId,
      stuNumber: session.value.stuNumber,
      token: session.value.token,
    },
  });
  */
};
</script>
