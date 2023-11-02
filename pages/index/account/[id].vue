<script setup lang="ts">
import { Hero } from 'hero-motion'

definePageMeta({
  redirect: { name: 'index-account-id-subscriptions' }
})

const route = useRoute()
const accountId = computed(() => route.params.id as string)
const username = computed(() => route.query.username ?? '')

const tabs = [
  { key: 'index-account-id-subscriptions', label: 'subscriptions' },
  { key: 'index-account-id-servers', label: 'servers' },
  { key: 'index-account-id-devices', label: 'devices' },
  { key: 'index-account-id-settings', label: 'settings' }
]
</script>

<template>
  <Hero :layout-id="`ACCOUNT_CARD:${accountId}`" :transition="{ bounce: 0 }" :style="{ background: '#f2f2f2' }">
    <div class="p-4 pt-0 w-full flex flex-col gap-4">
      <Hero :layout-id="`ACCOUNT_NAME:${accountId}`" :transition="{ bounce: 0 }" :style="{ fontSize: '2.25rem', fontWeight: 500 }" class="flex items-center text-4xl uppercase relative z-10">
        <span class="mr-2">#</span>
        <span>{{ username }}</span>
      </Hero>

      <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 300 } }">
        <div class="tabs hidden-horizontal-scrollbar flex w-full flex-nowrap overflow-x-auto">
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.key"
            :to="{ name: tab.key, query: route.query }"
            class="tab tab-bordered flex-1 uppercase snap-center"
            :class="{ 'tab-active': route.name === tab.key }"
          >
            {{ tab.label }}
          </NuxtLink>
        </div>

        <NuxtPage />
      </div>
    </div>
  </Hero>
</template>

<style scoped>
.tabs {
  scrollbar-width: none;
}

.hidden-horizontal-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
