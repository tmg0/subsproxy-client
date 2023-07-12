<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean,
  subscription: Subscription
}>(), { visible: false })

const emit = defineEmits(['update:visible', 'afterClose'])

const route = useRoute()

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

const onUnbindSubscription = async () => {
  await useUnbindSubscription(route.params.id as string)
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Unbind subscription">
    <div class="flex flex-col gap-2 w-full">
      <!-- <select v-model="subscriptionId" class="select select-bordered w-full focus:outline-none">
        <option value="" disabled selected>
          Subscription
        </option>
        <option v-for="item in data" :key="item.id" :value="item.id">
          {{ item.alias || item.address }}
        </option>
      </select> -->
    </div>

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
