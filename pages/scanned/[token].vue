<template>
  <div v-if="data?.paper" class="flex flex-wrap items-center">
    <select v-model="selectValue" class="bg-transparent p-2 border">
      <option disabled value="">请选择</option>
      <option v-for="route in data.paper.runPointList" :value="route.pointId">
        {{ route.pointName }}
      </option>
    </select>
    <NuxtLink
      class="ms-2 hover:decoration-underline text-blue p-2 border rounded"
      v-if="selectValue"
      :to="`/run/${encodeURIComponent(params.token as string)}/${encodeURIComponent(selectValue)}`"
    >
      开始跑步
    </NuxtLink>
  </div>
  <div v-else>{{ data?.message }}</div>
</template>
<script setup lang="ts">
import useSunRunPaper from '~~/state/useSunRunPaper';

const sunrunPaper = useSunRunPaper();

const { params } = useRoute();
console.log(params);
const { data } = await useFetch(`/api/sunRunPaper/${encodeURIComponent(params.token as string)}`);
watchEffect(() => {
  if (data.value?.paper) {
    sunrunPaper.value = data.value.paper;
  }
});

const selectValue = ref('');
</script>
