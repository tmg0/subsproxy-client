<script setup lang="ts">
import IntentRequestCreate from '~icons/carbon/intent-request-create'
import Search from '~icons/carbon/search'

const router = useRouter()
const { data } = useAccounts()
</script>

<template>
  <NuxtLayout name="basic">
    <div class="flex-1 overflow-hidden flex flex-col relative">
      <div class="box-border flex-1 overflow-auto">
        <div class="flex flex-col gap-3 pb-40">
          <div class="mx-4 flex items-center justify-end">
            <button class="btn btn-circle flex">
              <Search class="text-lg" />
            </button>

            <button class="btn btn-circle flex">
              <IntentRequestCreate class="text-lg" />
            </button>
          </div>

          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" @click="router.push({ name: 'account-id', params: { id: account.id }})" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
          <AccountCard v-for="account in data" :key="account.id" :account="account" class="mx-4" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
