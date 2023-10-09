<script setup lang="ts">
import { withHttps } from 'ufo'

interface Props {
  content?: string
  src?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="avatar placeholder relative w-12 h-12 rounded-xl overflow-hidden">
    <NuxtImg v-if="src" :src="withHttps(src)" class="block" />
    <div v-if="!src" class="font-bold text-2xl w-full h-full bg-gradient-to-br from-sky-500 to-primary text-white uppercase">
      <span>{{ props.content?.split('.').at(-1)?.at(0) ?? '' }}</span>
    </div>
  </div>
</template>
