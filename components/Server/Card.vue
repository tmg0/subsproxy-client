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
            <div class="w-8 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 text-white">
              <Wikis class="text-lg" />
            </div>
          </div>

          <div class="text-sm text-black/50">
            {{ server.address.split('://')[0] }}
          </div>
        </div>

        <div class="mx-2 flex items-center gap-2 text-sm">
          <Renew class="text-black/75 cursor-pointer" />
          <TrashCan class="text-black/75 cursor-pointer" @click="emit('delete')" />
        </div>
      </div>
    </slot>
  </div>
</template>
