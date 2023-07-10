<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NuxtLayout name="basic">
    <div>{{ route.params }}</div>
  </NuxtLayout>
</template>
