<script setup lang="ts">
import { Hero } from 'hero-motion'

defineProps<{
  account: Account
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <div v-motion :tapped="{ scale: 0.9 }" class="card shadow-xl cursor-pointer bg-white" @click="emit('click')">
    <div class="p-3 flex items-center gap-4">
      <Hero :style="{ height: '48px' }" :layout-id="`ACCOUNT_AVATAR:${account.id}`">
        <AccountAvatar :content="account?.username" :src="account?.avatar" />
      </Hero>

      <div class="h-12 text-sm flex-1 flex justify-between">
        <div class="h-full flex flex-col gap-2 justify-center">
          <div class="flex items-center gap-2">
            <Hero :layout-id="`ACCOUNT_NAME:${account.id}`" :transition="{ duration: 500 }" class="uppercase relative z-10 font-bold">
              <span class="mr-2">#</span>
              <span>{{ account?.username }}</span>
            </Hero>

            <div class="text-xs text-gray-300">
              ( S-{{ account?.accountSubscription?.length || 0 }} )
            </div>
          </div>

          <div class="flex gap-2 items-center">
            <span class="badge badge-xs text-xs px-2">Just my socks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
