<script setup lang="ts">
const route = useRoute()
const { data } = useAccountServers(route.params.id as string)
</script>

<template>
  <div>{{ data }}</div>
</template>
