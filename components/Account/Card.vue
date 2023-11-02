<script setup lang="ts">
import { Hero } from 'hero-motion'

defineProps<{
  account: Account
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <div v-motion :tapped="{ scale: 0.9 }">
    <Hero :layout-id="`ACCOUNT_CARD:${account.id}`" :transition="{ bounce: 0 }" :style="{ background: '#ffffff' }" class="card shadow-xl cursor-pointer" @click="emit('click')">
      <div class="p-3 flex items-center gap-4">
        <AccountAvatar :content="account?.username" :src="account?.avatar" />

        <div class="h-12 text-sm flex-1 flex justify-between">
          <div class="h-full flex flex-col gap-2 justify-center">
            <div class="flex items-center gap-2">
              <Hero :layout-id="`ACCOUNT_NAME:${account.id}`" :transition="{ bounce: 0 }" :style="{ fontSize: '0.875rem', fontWeight: 700 }" class="uppercase relative z-10">
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
    </Hero>
  </div>
</template>
