<script setup lang="ts">
definePageMeta({
  redirect: { name: 'account-id-subscription' }
})

const route = useRoute()

const tabs = [
  { key: 'account-id-subscription', to: { name: 'account-id-subscription' }, label: 'subscription' },
  { key: 'account-id-server', to: { name: 'account-id-server' }, label: 'server' },
  { key: 'account-id-device', to: { name: 'account-id-device' }, label: 'device' }
]
</script>

<template>
  <NuxtLayout>
    <div class="p-4 pt-0">
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
  </NuxtLayout>
</template>
