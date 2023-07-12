<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<{
  visible: boolean
  width: string | number
}>(), { visible: false, width: '50%' })

const emit = defineEmits(['update:visible'])

const checkbox = ref<HTMLInputElement>()

watch(() => props.visible, (value) => {
  if (checkbox.value) {
    checkbox.value.checked = value
  }
})

onClickOutside(checkbox, () => {
  emit('update:visible', false)
})
</script>

<template>
  <div class="drawer">
    <input ref="checkbox" type="checkbox" class="drawer-toggle">
    <div class="drawer-side z-10">
      <label for="my-drawer" class="drawer-overlay" />

      <div class="h-full bg-base-200 text-base-content" :style="{ width }">
        <slot />

        <div class="absolute bottom-0 left-0 right-0">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
