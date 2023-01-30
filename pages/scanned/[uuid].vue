<template>
  <div v-if="data?.routes" class="flex flex-wrap items-center">
    <select v-model="selectValue" class="bg-transparent p-2 border">
      <option disabled value="">请选择</option>
      <option v-for="route in data.routes" :value="route.value">{{ route.label }}</option>
    </select>
    <NuxtLink
      class="ms-2 hover:decoration-underline text-blue p-2 border rounded"
      v-if="selectValue"
      :to="`/run/${encodeURIComponent(data.token)}/${encodeURIComponent(selectValue)}`"
    >
      开始跑步
    </NuxtLink>
  </div>
  <div v-else-if="data">登录出错 {{ data.message }}</div>
</template>
<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch(`/api/scanQr/${route.params.uuid}`);
const selectValue = ref('');
watchEffect(() => {
  console.log(selectValue.value);
});
</script>
