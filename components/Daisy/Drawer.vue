<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import Close from '~icons/carbon/close'

const props = withDefaults(defineProps<{
  visible: boolean
  width: string | number
}>(), { visible: false, width: '50%' })

const emit = defineEmits(['update:visible'])

const checkbox = ref<HTMLInputElement>()
const drawer = ref<HTMLElement>()

watch(() => props.visible, (value) => {
  if (checkbox.value) {
    checkbox.value.checked = value
  }
})

const onClose = () => {
  emit('update:visible', false)
}

onClickOutside(drawer, () => {
  if (props.visible) { onClose() }
})
</script>

<template>
  <div class="drawer">
    <input ref="checkbox" type="checkbox" class="drawer-toggle">
    <div class="drawer-side z-10">
      <label class="drawer-overlay" />

      <div ref="drawer" class="h-full bg-base-200 text-base-content relative" :style="{ width }">
        <slot />

        <div class="absolute bottom-0 left-0 right-0">
          <slot name="footer" />
        </div>

        <button class="btn btn-square btn-xs absolute top-4 right-4" @click="onClose">
          <Close class="text-lg" />
        </button>
      </div>
    </div>
  </div>
</template>
