<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean,
  account?: Account
}>(), { visible: false, account: undefined })

const emit = defineEmits(['update:visible', 'afterClose'])

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onDeleteAccount = async () => {
  if (!props.account) { return }
  await useDeleteAccount(props.account.id)
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Delete account">
    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="onDeleteAccount">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
