<template>
  <div>{{ data?.message }}</div>
</template>
<script setup lang="ts">

const { params } = useRoute();
const { token, route } = params;
const { data } = useFetch('/api/run', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ token, route }),
});
</script>
