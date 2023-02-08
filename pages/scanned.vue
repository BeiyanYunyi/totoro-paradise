<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">个人信息</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center">学校</td>
        <td class="text-center">{{ session.campusName }}</td>
      </tr>
      <tr>
        <td class="text-center">学院</td>
        <td class="text-center">{{ session.collegeName }}</td>
      </tr>
      <tr>
        <td class="text-center">学号</td>
        <td class="text-center">{{ session.stuNumber }}</td>
      </tr>
      <tr>
        <td class="text-center">姓名</td>
        <td class="text-center">{{ session.stuName }}</td>
      </tr>
    </tbody>
  </table>
  <template v-if="data?.paper">
    <div class="flex flex-wrap items-center">
      <select v-model="selectValue" class="bg-transparent p-2 border">
        <option disabled value="">请选择路线</option>
        <option v-for="route in data.paper.runPointList" :value="route.pointId">
          {{ route.pointName }}
        </option>
      </select>
      <button
        class="text-blue-500 p-2 outline outline-1 rounded ms-2"
        @click="
          selectValue =
            data!.paper!.runPointList[Math.floor(Math.random() * data!.paper!.runPointList.length)]
              .pointId
        "
      >
        随机路线
      </button>
      <NuxtLink
        class="ms-2 bg-blue-500 hover:bg-blue-400 transition text-stone-100 p-2 rounded"
        v-if="selectValue"
        :to="`/run/${encodeURIComponent(selectValue)}`"
      >
        开始跑步
      </NuxtLink>
    </div>
    <p class="text-xs">地图中的路线仅为展示路线生成效果，不等于最终路线</p>
    <div class="h-50vh w-50vw"><AMap :target="selectValue" @update:target="handleUpdate" /></div>
  </template>
  <div v-else>{{ data?.message }}</div>
</template>
<script setup lang="ts">
const sunrunPaper = useSunRunPaper();
const session = useSession();
const selectValue = ref('');
const { data } = await useFetch(`/api/sunRunPaper`, {
  method: 'POST',
  body: JSON.stringify({
    token: session.value.token,
    campusId: session.value.campusId,
    schoolId: session.value.schoolId,
    stuNumber: session.value.stuNumber,
  }),
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
