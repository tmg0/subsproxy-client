<script setup lang="ts">
const route = useRoute()
const { data } = useAccountDevices(route.params.id as string)
</script>

<template>
  <div>
    <div v-for="item in data" :key="item.id">
      {{ item.ua }}
    </div>
  </div>
</template>
