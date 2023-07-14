<script setup lang="ts">
import Close from '~icons/carbon/close'

const props = defineProps<{
  device?: Device
}>()

const emit = defineEmits(['delete'])

const ua = computed(() => {
  return parseUA(props?.device?.ua)
})

const logo = computed(() => {
  const { ua } = props?.device || {}
  if (!ua) { return '' }
  if (isClash(ua)) { return ClientLogo.CLASH }
  if (isPostman(ua)) { return ClientLogo.POSTMAN }

  return ''
})
</script>

<template>
  <div class="card h-48 w-full shadow-xl z-0 relative overflow-hidden bg-white">
    <slot>
      <button class="btn btn-square btn-xs absolute top-3 right-3" @click="emit('delete')">
        <Close class="text-lg" />
      </button>

      <div class="absolute w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-xl overflow-hidden flex items-center justify-center">
        <img v-show="logo" class="block w-16 h-16" :src="logo" alt="logo">
        <span v-show="!ua" class="loading loading-ring loading-lg text-orange-500" />
      </div>

      <div class="absolute bottom-3 w-full text-center text-xs text-black/25">
        <div>{{ ua?.browser }}</div>
        <div class="scale-75">
          {{ ua?.version }}
        </div>
      </div>
    </slot>
  </div>
</template>
