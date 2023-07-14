<script setup lang="ts">
import { useScroll, watchDebounced } from '@vueuse/core'

withDefaults(defineProps<{
  value?: number
}>(), { value: 0 })

const emit = defineEmits(['update:value'])

const carousel = ref<HTMLElement>()

const { x } = useScroll(carousel)

watchDebounced(x, (value) => {
  emit('update:value', Math.floor(value / 250))
}, { debounce: 500 })

onMounted(async () => {
  await nextTick()
  x.value = 0
})
</script>

<template>
  <div class="w-full relative">
    <div ref="carousel" class="carousel carousel-center w-full p-4 space-x-4 bg-white shadow-xl rounded-box my-4">
      <slot />
    </div>
  </div>
</template>
