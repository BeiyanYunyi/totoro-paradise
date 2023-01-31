<template>
  <div>{{ data?.message }}</div>
</template>
<script setup lang="ts">
import useSunRunPaper from '~~/state/useSunRunPaper';

const sunRunPaper = useSunRunPaper();
const { params } = useRoute();
const { token, route } = params as { token: string; route: string };
const target = computed(() => sunRunPaper.value.runPointList.find((r) => r.pointId === route)!);
const { data } = useFetch('/api/run', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ token, mileage: sunRunPaper.value.mileage, route: target.value }),
});
</script>
