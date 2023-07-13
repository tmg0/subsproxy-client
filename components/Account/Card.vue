<script setup lang="ts">
defineProps<{
  account: Account
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <div v-motion :tapped="{ scale: 0.9 }" class="card shadow-xl cursor-pointer bg-white" @click="emit('click')">
    <div class="p-3 flex items-center gap-4">
      <div class="avatar placeholder">
        <div class="font-bold text-2xl w-12 rounded-xl bg-gradient-to-br from-sky-500 to-primary text-white uppercase">
          <span>{{ account.username.split('.').at(-1)?.at(0) }}</span>
        </div>
      </div>

      <div class="h-12 text-sm flex-1 flex justify-between">
        <div class="h-full flex flex-col gap-2 justify-center">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 bg-accent/30 rounded-full flex items-center justify-center">
              <div class="w-[6px] h-[6px] bg-accent rounded-full" />
            </div>

            <div class="font-bold uppercase">
              {{ account.username }}
            </div>

            <div class="text-xs text-gray-300">
              ( S-{{ account.accountSubscription?.length || 0 }} )
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
