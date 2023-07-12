<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean
}>(), { visible: false })

const emit = defineEmits(['update:visible', 'afterClose'])

const { data } = useSubscriptions()
const route = useRoute()
const { subscriptionId, bindSubscription } = useBindSubscription(route.params.id as string)

const v = computed({
  get: () => props.visible,
  set: (value) => { emit('update:visible', value) }
})

watch(v, (value) => {
  if (!value) { subscriptionId.value = '' }
})

const onBindSubscription = async () => {
  await bindSubscription()
  v.value = false
  emit('afterClose')
}
</script>

<template>
  <DaisyModal v-model:visible="v" title="Bind subscription">
    <div class="flex flex-col gap-2 w-full">
      <select v-model="subscriptionId" class="select select-bordered w-full focus:outline-none">
        <option value="" disabled selected>
          Subscription
        </option>
        <option v-for="item in data" :key="item.id" :value="item.id">
          {{ item.alias || item.address }}
        </option>
      </select>
    </div>

    <template #footer>
      <button class="btn" @click.prevent="v = false">
        Close
      </button>

      <button class="btn btn-primary" :disabled="!subscriptionId" @click="onBindSubscription">
        Confirm
      </button>
    </template>
  </DaisyModal>
</template>
