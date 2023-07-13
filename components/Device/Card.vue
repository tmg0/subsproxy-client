<script setup lang="ts">
import Close from '~icons/carbon/close'

const props = defineProps<{
  device: Device
}>()

const emit = defineEmits(['delete'])

const ua = computed(() => {
  return parseUA(props.device.ua) || {}
})
</script>

<template>
  <div class="card h-48 w-full bg-gray-500 shadow-xl z-0 relative overflow-hidden">
    <slot>
      <div class="p-2 text-white">
        {{ ua.browser }}
      </div>
    </slot>
  </div>
</template>
