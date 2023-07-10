<script setup lang="ts">
import Menu from '~icons/carbon/menu'
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-[#f2f2f2]">
    <div class="p-4 flex w-full items-center justify-between">
      <button class="btn btn-circle text-lg">
        <Menu />
      </button>

      <div class="font-bold uppercase">
        Subsproxy
      </div>
    </div>

    <slot />
  </div>
</template>
