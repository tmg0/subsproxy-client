<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import CopyLink from '~icons/carbon/copy-link'
import TrashCan from '~icons/carbon/trash-can'

definePageMeta({
  redirect: { name: 'index-account-id-subscription' }
})

const route = useRoute()
const { copy, isSupported } = useClipboard()
const { data } = useAccount(route.params.id as string)

const tabs = [
  { key: 'index-account-id-subscription', label: 'subscription' },
  { key: 'index-account-id-server', label: 'server' },
  { key: 'index-account-id-device', label: 'device' }
]

const onCopyLink = () => {
  if (!isSupported.value) { return }
  const { protocol, host } = location
  copy(`${protocol}//${location.host}/api/accounts/${route.params.id}/servers?encode=true`)
}
</script>

<template>
  <div>
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
            :to="{ name: tab.key }"
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
      <div class="join join-vertical bg-white">
        <button class="btn bg-white no-animation join-item" @click="onCopyLink">
          <CopyLink class="text-base" />
        </button>

        <button class="btn no-animation join-item bg-gradient-to-br from-pink-500 to-red-500 text-white">
          <TrashCan class="text-base" />
        </button>
      </div>
    </div>
  </div>
</template>
