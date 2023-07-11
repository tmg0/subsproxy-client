<script setup lang="ts">
import CopyLink from '~icons/carbon/copy-link'
import TrashCan from '~icons/carbon/trash-can'
import Add from '~icons/carbon/add'

const route = useRoute()
const visible = ref({ create: false })
const { data } = useAccountSubscriptions(route.params.id as string)
</script>

<template>
  <div>
    <DaisyCarousel class="w-full">
      <DaisyCarouselItem v-for="item in data" :key="item.id">
        <SubscriptionCard />
      </DaisyCarouselItem>

      <DaisyCarouselItem>
        <SubscriptionCard class="flex w-full h-full items-center justify-center bg-gradient-to-br from-primary to-violet-500">
          <button class="btn btn-square btn-lg shadow-xl" @click="visible.create = true">
            <Add class="text-3xl" />
          </button>
        </SubscriptionCard>
      </DaisyCarouselItem>
    </DaisyCarousel>

    <div class="fixed right-4 bottom-20 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div class="join join-vertical">
        <button class="btn btn-ghost no-animation join-item">
          <CopyLink class="text-base" />
        </button>

        <button class="btn no-animation join-item bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <TrashCan class="text-base" />
        </button>
      </div>
    </div>

    <SubscriptionBind v-model:visible="visible.create" />
  </div>
</template>
