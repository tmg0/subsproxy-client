<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean
}>(), { visible: false })

const emit = defineEmits(['update:visible', 'afterClose'])

const { username, createAccount } = useCreateAccount()

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onCreateAccount = async () => {
  if (!username.value) { return }
  await createAccount()
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Create account">
    <input v-model="username" placeholder="Username" class="input input-bordered w-full focus:outline-none">

    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn btn-primary" :disabled="!username" @click.prevent="onCreateAccount">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
