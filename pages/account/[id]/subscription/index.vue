<script setup lang="ts">
const route = useRoute()
const { data } = useAccountSubscriptions(route.params.id as string)
</script>

<template>
  <div>{{ data }}</div>
</template>
