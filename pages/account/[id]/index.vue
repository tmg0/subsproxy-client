<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NuxtLayout>
    <div>{{ route.params }}</div>
  </NuxtLayout>
</template>
