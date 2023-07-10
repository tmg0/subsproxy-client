<script setup lang="ts">
const { data } = useAccounts()
</script>

<template>
  <NuxtLayout name="basic">
    <div class="px-4 flex flex-col gap-3">
      <div v-for="account in data" :key="account.id" class="card shadow-xl cursor-pointer bg-white border-r-2 border-solid border-r-accent">
        <div class="p-3 flex items-center gap-4">
          <div class="avatar placeholder">
            <div class="font-bold text-2xl w-12 rounded-xl bg-gradient-to-br from-sky-500 to-primary text-white uppercase">
              <span>{{ account.username.split('.').at(-1)?.at(0) }}</span>
            </div>
          </div>

          <div class="h-12 text-sm flex-1 flex justify-between">
            <div class="h-full flex flex-col gap-2 justify-center">
              <div class="font-bold uppercase">
                # {{ account.username }}
              </div>

              <div class="flex gap-2 items-center">
                <span class="badge badge-xs text-xs px-2">Just my socks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
