<script setup lang="ts">
import Wikis from '~icons/carbon/wikis'
import Renew from '~icons/carbon/renew'
import TrashCan from '~icons/carbon/trash-can'

defineProps<{
  server: Server
}>()

const emit = defineEmits(['delete'])
</script>

<template>
  <div class="card shadow-xl cursor-pointer bg-white">
    <slot>
      <div class="p-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="avatar placeholder">
            <div class="w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white">
              <Wikis class="text-xl" />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <div class="text-sm leading-4">
              {{ parseServerConf(server).address }}
            </div>
            <div class="text-black/25 text-xs leading-3">
              {{ server.address.split('://')[0] }} / none
            </div>
          </div>
        </div>

        <div class="mx-2 flex items-center gap-3">
          <Renew class="text-black/75 cursor-pointer" />
          <TrashCan class="text-black/75 cursor-pointer" @click="emit('delete')" />
        </div>
      </div>
    </slot>
  </div>
</template>
