<script setup lang="ts">
const route = useRoute()
const { data } = useAccountServers(route.params.id as string)
</script>

<template>
  <div>
    <div v-for="item in data" :key="item.id">
      {{ item.address }}
    </div>
  </div>
</template>
