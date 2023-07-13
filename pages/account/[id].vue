<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import CopyLink from '~icons/carbon/copy-link'
import TrashCan from '~icons/carbon/trash-can'

definePageMeta({
  redirect: { name: 'account-id-subscription' }
})

const route = useRoute()
const { copy, isSupported } = useClipboard()
const { data } = useAccount(route.params.id as string)

const tabs = [
  { key: 'account-id-subscription', to: { name: 'account-id-subscription' }, label: 'subscription' },
  { key: 'account-id-server', to: { name: 'account-id-server' }, label: 'server' },
  { key: 'account-id-device', to: { name: 'account-id-device' }, label: 'device' }
]

const onCopyLink = () => {
  if (!isSupported.value) { return }
  copy('')
}
</script>

<template>
  <NuxtLayout>
    <div class="p-4 pt-0 w-full flex flex-col gap-4">
      <div class="text-4xl font-light uppercase">
        <span class="mr-2">#</span>
        <span>{{ data?.username }}</span>
      </div>

      <div>
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
    </div>

    <div class="fixed right-6 bottom-20 shadow-xl z-10">
      <div class="join join-vertical">
        <button :disabled="!isSupported" class="btn bg-white no-animation join-item" @click="onCopyLink">
          <CopyLink class="text-base" />
        </button>

        <button class="btn no-animation join-item bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <TrashCan class="text-base" />
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
