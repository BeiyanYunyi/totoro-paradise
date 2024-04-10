<script setup lang="ts">
import TotoroApiWrapper from '~/src/wrappers/TotoroApiWrapper';

const sunrunPaper = useSunRunPaper();
const session = useSession();
const selectValue = ref('');
const data = await TotoroApiWrapper.getSunRunPaper({
  token: session.value.token,
  campusId: session.value.campusId,
  schoolId: session.value.schoolId,
  stuNumber: session.value.stuNumber,
});
watchEffect(() => {
  if (data) {
    sunrunPaper.value = data;
  }
});

const handleUpdate = (target: string) => {
  selectValue.value = target;
};
</script>
<template>
  <p>请核对个人信息</p>
  <VTable density="compact" class="mb-6 mt-4">
    <tbody>
      <tr>
        <td>学校</td>
        <td>{{ session.campusName }}</td>
      </tr>
      <tr>
        <td>学院</td>
        <td>{{ session.collegeName }}</td>
      </tr>
      <tr>
        <td>学号</td>
        <td>{{ session.stuNumber }}</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td>{{ session.stuName }}</td>
      </tr>
    </tbody>
  </VTable>
  <template v-if="data">
    <VSelect
      v-model="selectValue"
      :items="data.runPointList"
      item-title="pointName"
      item-value="pointId"
      variant="underlined"
      label="路线"
      class="mt-2"
    />
    <div class="flex gap-4">
      <VBtn
        variant="outlined"
        color="primary"
        append-icon="i-mdi-gesture"
        @click="
          selectValue =
            data!.runPointList[Math.floor(Math.random() * data!.runPointList.length)].pointId
        "
      >
        随机路线
      </VBtn>
      <NuxtLink v-if="selectValue" :to="`/run/${encodeURIComponent(selectValue)}`">
        <VBtn class="ml-auto" color="primary" append-icon="i-mdi-arrow-right"> 开始跑步 </VBtn>
      </NuxtLink>
      <VBtn v-else class="ml-auto" color="primary" append-icon="i-mdi-arrow-right" disabled>
        开始跑步
      </VBtn>
    </div>
    <p class="mb-2 mt-6 text-xs">地图中的路线仅为展示路线生成效果，不等于最终路线</p>
    <div class="h-50vh w-50vw">
      <ClientOnly>
        <AMap :target="selectValue" @update:target="handleUpdate" />
      </ClientOnly>
    </div>
  </template>
</template>
