<script setup lang="ts">
import IntentRequestCreate from '~icons/carbon/intent-request-create'
import Search from '~icons/carbon/search'

const router = useRouter()
const { data, execute } = useAccounts()

const visible = ref(false)
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 flex flex-col">
      <div class="box-border flex-1">
        <div class="flex flex-col gap-3 pb-40">
          <div class="mx-4 flex items-center justify-end gap-2">
            <button v-motion-pop class="btn btn-circle flex">
              <Search class="text-lg" />
            </button>

            <button v-motion-pop class="btn btn-circle flex">
              <IntentRequestCreate class="text-lg" @click="visible = true" />
            </button>
          </div>

          <AccountCard
            v-for="(account, index) in data"
            :key="account.id"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, scale: 1 }"
            :delay="index * 50"
            :account="account"
            class="mx-4"
            @click="router.push({ name: 'account-id', params: { id: account.id }})"
          />
        </div>
      </div>
    </div>

    <AccountCreate v-model:visible="visible" @after-close="execute" />
  </NuxtLayout>
</template>
