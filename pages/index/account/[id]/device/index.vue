<script setup lang="ts">
import Add from '~icons/carbon/add'

const route = useRoute()
const visible = ref(false)
const selected = ref<Device>()
const { data, execute } = useAccountDevices(route.params.id as string)

const onCreateAccountDevice = async () => {
  await useCreateAccountDevice(route.params.id as string)
  execute()
}

const onShowDelete = (device: Device) => {
  selected.value = device
  visible.value = true
}
</script>

<template>
  <div class="my-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
    <DeviceCard
      v-motion
      :tapped="{ scale: 0.9 }"
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      class="flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500"
      @click="onCreateAccountDevice"
    >
      <button class="btn btn-square btn-lg shadow-xl no-animation">
        <Add class="text-3xl" />
      </button>
    </DeviceCard>

    <DeviceCard
      v-for="(item, index) in data"
      :key="item?.id"
      v-motion
      :device="item"
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, scale: 1 }"
      :delay="(index + 1) * 50"
      @delete="onShowDelete(item)"
    />

    <DeviceDelete v-model:visible="visible" :device="selected" @after-close="execute" />
  </div>
</template>
