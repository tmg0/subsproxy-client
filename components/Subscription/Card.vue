<script setup lang="ts">
import Close from '~icons/carbon/close'

const emit = defineEmits(['delete'])
</script>

<template>
  <div class="h-48 w-72 overflow-hidden bg-white rounded-box bg-gradient-to-br from-sky-500 to-primary relative">
    <slot>
      <button class="btn btn-square btn-xs absolute top-4 right-4" @click="emit('delete')">
        <Close class="text-lg" />
      </button>
    </slot>
  </div>
</template>
