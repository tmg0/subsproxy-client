<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean,
  account?: { id: string }
  server?: Server
}>(), { visible: false, account: undefined, server: undefined })

const emit = defineEmits(['update:visible', 'afterClose'])

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onUnbindServer = async () => {
  if (!props.server) { return }
  await useUnbindServer(props.server.id, props.account?.id)
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Unbind server">
    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="onUnbindServer">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
