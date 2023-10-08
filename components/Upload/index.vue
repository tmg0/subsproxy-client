<script setup lang="ts">
const emit = defineEmits(['done'])

const domRef = ref()

const handleFileUpload = (event: any) => {
  const file = event.target?.files?.[0]
  if (!file) { return }
  const reader = new FileReader()
  reader.onload = (e) => { emit('done', e.target?.result ?? '') }
  reader.readAsDataURL(file)
}
</script>

<template>
  <div @click="domRef?.fileInput.click()">
    <slot />
    <VisuallyHidden>
      <input ref="domRef" type="file" accept="image/*" @change="handleFileUpload">
    </VisuallyHidden>
  </div>
</template>
