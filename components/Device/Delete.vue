<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean,
  device?: Device
}>(), { visible: false, device: undefined })

const emit = defineEmits(['update:visible', 'afterClose'])

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onDeleteDevice = async () => {
  if (!props.device) { return }
  await useDeleteDevice(props.device.id)
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Delete device">
    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="onDeleteDevice">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
