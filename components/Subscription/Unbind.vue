<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean,
  account?: Account
  subscription?: Subscription
}>(), { visible: false, account: undefined, subscription: undefined })

const emit = defineEmits(['update:visible', 'afterClose'])

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onUnbindSubscription = async () => {
  if (!props.subscription) { return }
  await useUnbindSubscription(props.subscription.id)
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Unbind subscription">
    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="onUnbindSubscription">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
