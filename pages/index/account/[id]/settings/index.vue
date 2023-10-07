<script setup lang="ts">
import { join } from 'pathe'
import TrashCan from '~icons/carbon/trash-can'

const route = useRoute()
const router = useRouter()
const visible = ref(false)
const { protocol, host } = location
const prefix = `${protocol}//${host}/api/accounts/${route.params.id}/servers`

const links = [
  { url: join(prefix, 'default'), label: 'default subscription' },
  { url: join(prefix, 'clash', 'jms'), label: 'clash for windows' },
  { url: join(prefix, 'clash', 'bitz'), label: 'clash x' },
  { url: join(prefix, 'xray'), label: 'v2ray' }
]
</script>

<template>
  <div class="my-4">
    <div class="w-full flex flex-col gap-2">
      <Snippet
        v-for="(item, index) in links"
        :key="item.url"
        :content="item.url"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="index * 50"
      >
        {{ item.label }}
      </Snippet>
    </div>

    <div class="divider uppercase">danger zone</div>

    <button class="btn btn-block no-animation join-item bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="visible = true">
      <TrashCan class="text-base" />
      <span>Delete this account</span>
    </button>

    <AccountDelete v-model:visible="visible" :account="data" @after-close="router.go(-1)" />
  </div>
</template>
