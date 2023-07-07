<script setup lang="ts">
import Menu from '~icons/carbon/menu'
import Search from '~icons/carbon/search'

const { data } = useAccounts()
</script>

<template>
  <div class="w-screen h-screen flex flex-col gap-2 bg-[#f2f2f2]">
    <div class="p-4 flex w-full items-center justify-between">
      <button class="btn btn-circle">
        <Menu />
      </button>

      <button class="btn btn-circle">
        <Search />
      </button>
    </div>

    <div v-for="account in data" :key="account.id" class="rounded shadow">
      #{{ account.username }}
    </div>
  </div>
</template>
