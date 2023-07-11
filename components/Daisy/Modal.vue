<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean
  title?: string
}>(), { visible: false, title: '' })

const emit = defineEmits(['update:visible'])

const modal = ref<HTMLDialogElement>()

watch(() => props.visible, (value) => {
  if (!modal.value) { return }
  if (value) { modal.value.showModal() }
  if (!value) { modal.value.close() }
})

const onClose = () => {
  if (!modal.value) { return }
  emit('update:visible', false)
}
</script>

<template>
  <dialog ref="modal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">
        {{ title }}
      </h3>
      <p class="py-4">
        <slot />
      </p>
      <div class="modal-action">
        <slot name="footer">
          <button class="btn" @click.prevent="onClose">
            Close
          </button>
        </slot>
      </div>
    </div>
  </dialog>
</template>
