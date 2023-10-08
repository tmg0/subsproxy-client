<script setup lang="ts">
const emit = defineEmits(['done'])
const { upload } = useCos()

const domRef = ref()

const onClick = () => {
  domRef.value?.click()
}

const handleFileUpload = async (event: any) => {
  const file = event.target?.files?.[0]
  if (!file) { return }
  const url = await upload(file)
  emit('done', url)
}
</script>

<template>
  <div class="cursor-pointer relative" @click="onClick">
    <slot />
    <VisuallyHidden>
      <input ref="domRef" type="file" accept="image/*" @change="handleFileUpload">
    </VisuallyHidden>
  </div>
</template>
