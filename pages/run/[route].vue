<template>
  <div>{{ data?.message }}</div>
</template>
<script setup lang="ts">
const sunRunPaper = useSunRunPaper();
const { params } = useRoute();
const session = useSession();
const { route } = params as { route: string };
const target = computed(() => sunRunPaper.value.runPointList.find((r) => r.pointId === route)!);
const { data } = useFetch('/api/run', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phoneReq: {
      phoneNumber: session.value.phoneNumber,
      token: session.value.token,
      campusId: session.value.campusId,
      schoolId: session.value.schoolId,
      stuNumber: session.value.stuNumber,
    },
    mileage: sunRunPaper.value.mileage,
    route: target.value,
  }),
});
</script>
