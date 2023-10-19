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
      <AccountAvatar :content="account?.username" :src="account?.avatar" />

      <div class="h-12 text-sm flex-1 flex justify-between">
        <div class="h-full flex flex-col gap-2 justify-center">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-accent/30 rounded-full flex items-center justify-center">
              <div class="w-[6px] h-[6px] bg-accent rounded-full" />
            </div>

            <Hero :layout-id="account.id" class="font-bold uppercase">
              {{ account?.username }}
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
