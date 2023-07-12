<script setup lang="ts">
import CopyLink from '~icons/carbon/copy-link'
import TrashCan from '~icons/carbon/trash-can'

definePageMeta({
  redirect: { name: 'account-id-subscription' }
})

const route = useRoute()

const tabs = [
  { key: 'account-id-subscription', to: { name: 'account-id-subscription' }, label: 'subscription' },
  { key: 'account-id-server', to: { name: 'account-id-server' }, label: 'server' },
  { key: 'account-id-device', to: { name: 'account-id-device' }, label: 'device' }
]
</script>

<template>
  <NuxtLayout>
    <div class="p-4 pt-0">
      <div class="tabs flex">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.key"
          :to="tab.to"
          class="tab tab-bordered flex-1 uppercase"
          :class="{ 'tab-active': route.name === tab.key }"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>

      <NuxtPage />
    </div>

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
  </NuxtLayout>
</template>
