<script setup lang="ts">
import Add from '~icons/carbon/add'

const route = useRoute()
const visible = ref({ create: false })
const { data } = useAccountSubscriptions(route.params.id as string)
</script>

<template>
  <div>
    <DaisyCarousel class="w-full">
      <DaisyCarouselItem v-for="(item, index) in data" :key="item.id" :index="index">
        <SubscriptionCard />
      </DaisyCarouselItem>

      <DaisyCarouselItem :index="data?.length || 0">
        <SubscriptionCard class="flex h-48 w-72 items-center justify-center bg-gradient-to-br from-primary to-violet-500">
          <button class="btn btn-square btn-lg shadow-xl" @click="visible.create = true">
            <Add class="text-3xl" />
          </button>
        </SubscriptionCard>
      </DaisyCarouselItem>
    </DaisyCarousel>

    <SubscriptionBind v-model:visible="visible.create" />
  </div>
</template>
