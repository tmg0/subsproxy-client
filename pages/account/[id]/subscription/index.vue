<script setup lang="ts">
import Add from '~icons/carbon/add'

const route = useRoute()
const selected = ref<Subscription>()
const visible = ref({ create: false, delete: false })
const { data, execute } = useAccountSubscriptions(route.params.id as string)

const onShowUnbind = (subscription?: Subscription) => {
  selected.value = subscription
  visible.value.delete = true
}

const account = computed(() => ({ id: route.params.id as string }))
</script>

<template>
  <div>
    <DaisyCarousel class="w-full">
      <DaisyCarouselItem :index="data?.length || 0">
        <SubscriptionCard class="flex h-48 w-72 items-center justify-center bg-gradient-to-br to-sky-500 from-violet-500">
          <button class="btn btn-square btn-lg shadow-xl" @click="visible.create = true">
            <Add class="text-3xl" />
          </button>
        </SubscriptionCard>
      </DaisyCarouselItem>

      <DaisyCarouselItem v-for="(item, index) in data" :key="item.id" :index="index">
        <SubscriptionCard :subscription="item.subscription" @delete="onShowUnbind(item.subscription)" />
      </DaisyCarouselItem>
    </DaisyCarousel>

    <SubscriptionBind v-model:visible="visible.create" @after-close="execute" />
    <SubscriptionUnbind v-model:visible="visible.delete" :subscription="selected" :account="account" @after-close="execute" />
  </div>
</template>
