<script setup lang="ts">
const sunrunPaper = useSunRunPaper();
const session = useSession();
const selectValue = ref('');
const { data } = await useFetch(`/api/sunRunPaper`, {
  method: 'POST',
  body: {
    token: session.value.token,
    campusId: session.value.campusId,
    schoolId: session.value.schoolId,
    stuNumber: session.value.stuNumber,
  },
});
watchEffect(() => {
  if (data.value?.paper) {
    sunrunPaper.value = data.value.paper;
  }
});

const handleUpdate = (target: string) => {
  selectValue.value = target;
};
</script>
<template>
  <p>请核对个人信息</p>
  <VTable density="compact">
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
  <template v-if="data?.paper">
    <VSelect
      v-model="selectValue"
      :items="data.paper.runPointList"
      item-title="pointName"
      item-value="pointId"
      variant="solo"
      label="路线"
      class="mt-2"
    />
    <VBtn
      variant="outlined"
      color="primary"
      @click="
        selectValue =
          data!.paper!.runPointList[Math.floor(Math.random() * data!.paper!.runPointList.length)]
            .pointId
      "
    >
      随机路线
    </VBtn>
    <NuxtLink v-if="selectValue" :to="`/run/${encodeURIComponent(selectValue)}`">
      <VBtn class="ms-2" color="primary">
        开始跑步
      </VBtn>
    </NuxtLink>
    <VBtn v-else class="ms-2" color="primary" disabled>
      开始跑步
    </VBtn>
    <p class="text-xs">
      地图中的路线仅为展示路线生成效果，不等于最终路线
    </p>
    <div class="h-50vh w-50vw">
      <ClientOnly>
        <AMap :target="selectValue" @update:target="handleUpdate" />
      </ClientOnly>
    </div>
  </template>
  <div v-else>
    {{ data?.message }}
  </div>
</template>
