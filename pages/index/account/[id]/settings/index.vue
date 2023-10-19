<script setup lang="ts">
import { joinURL } from 'ufo'
import { Hero } from 'hero-motion'
import TrashCan from '~icons/carbon/trash-can'

const route = useRoute()
const router = useRouter()
const visible = ref(false)
const accountId = computed(() => route.params.id as string)
const { data, execute } = useAccount(accountId.value)
const { protocol, host } = location
const prefix = `${protocol}//${host}/api/accounts/${accountId.value}/servers`

const links = [
  { url: joinURL(prefix, 'default'), label: 'default subscription' },
  { url: joinURL(prefix, 'clash', 'jms'), label: 'clash for windows' },
  { url: joinURL(prefix, 'clash', 'bitz'), label: 'clash x' },
  { url: joinURL(prefix, 'xray'), label: 'v2ray' }
]

const onUpload = async (avatar: string) => {
  const data = { avatar }
  await usePatchAccount(accountId.value, data)
  execute()
}
</script>

<template>
  <div class="my-4">
    <div class="flex items-center justify-between">
      <div>
        <div class="font-bold">
          Avatar
        </div>
        <div class="text-xs text-black/25">
          profile picture
        </div>
      </div>
      <Hero :layout-id="`ACCOUNT_AVATAR:${accountId}`">
        <Upload class="h-12 overflow-hidden" @done="onUpload">
          <AccountAvatar :content="data?.username" :src="data?.avatar" />
        </Upload>
      </Hero>
    </div>

    <div class="divider uppercase">
      links
    </div>

    <div class="w-full flex flex-col gap-2">
      <Snippet
        v-for="(item, index) in links"
        :key="item.url"
        v-motion
        :content="item.url"
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="index * 50"
      >
        {{ item.label }}
      </Snippet>
    </div>

    <div class="divider uppercase">
      danger zone
    </div>

    <button class="btn btn-block no-animation join-item bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="visible = true">
      <TrashCan class="text-base" />
      <span>Delete this account</span>
    </button>

    <AccountDelete v-model:visible="visible" :account="data" @after-close="router.go(-1)" />
  </div>
</template>
