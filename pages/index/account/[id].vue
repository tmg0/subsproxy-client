<script setup lang="ts">
definePageMeta({
  redirect: { name: 'index-account-id-subscriptions' }
})

const route = useRoute()
const { data } = useAccount(route.params.id as string)

const tabs = [
  { key: 'index-account-id-subscriptions', label: 'subscriptions' },
  { key: 'index-account-id-servers', label: 'servers' },
  { key: 'index-account-id-devices', label: 'devices' },
  { key: 'index-account-id-settings', label: 'settings' }
]
</script>

<template>
  <div>
    <div class="p-4 pt-0 w-full flex flex-col gap-4">
      <div class="text-4xl font-light uppercase">
        <span class="mr-2">#</span>
        <span>{{ data?.username }}</span>
      </div>

      <div>
        <div class="tabs hidden-horizontal-scrollbar flex w-full flex-nowrap overflow-x-auto">
          <NuxtLink
            v-for="tab in tabs"
            :key="tab.key"
            :to="{ name: tab.key }"
            class="tab tab-bordered flex-1 uppercase snap-center"
            :class="{ 'tab-active': route.name === tab.key }"
          >
            {{ tab.label }}
          </NuxtLink>
        </div>

        <NuxtPage />
      </div>
    </div>

   
  </div>
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
