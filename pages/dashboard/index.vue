<script setup lang="ts">
const { data } = useAccounts()
</script>

<template>
  <div class="p-4 flex flex-col gap-2">
    <div v-for="account in data" :key="account.id" class="rounded shadow">
      #{{ account.username }}
    </div>
  </div>
</template>
