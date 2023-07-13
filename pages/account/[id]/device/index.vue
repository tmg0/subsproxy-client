<script setup lang="ts">
const route = useRoute()
const { data } = useAccountDevices(route.params.id as string)
</script>

<template>
  <div class="my-4 grid grid-cols-2 gap-2">
    <DeviceCard
      v-for="(item, index) in data"
      :key="item.id"
      v-motion
      :device="item.device"
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="(index + 1) * 50"
    />
  </div>
</template>
