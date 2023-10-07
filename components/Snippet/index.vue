<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import Copy from '~icons/carbon/copy'
import Checkmark from '~icons/carbon/checkmark'

const props = defineProps<{ content: string }>()

const { copy, isSupported } = useClipboard()
const copied = ref(false)

const onCopy = () => {
  if (!isSupported.value || copied.value) { return }
  const { protocol, host } = location
  copy(props.content)
  copied.value = true
  setTimeout(() => { copied.value = false }, 1.5 * 1000)
}
</script>

<template>
  <div class="inline-flex items-center justify-between h-fit gap-2 px-3 py-1.5 text-small rounded-xl w-full border-[2px] bg-white">
    <pre class="bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap">
      <span class="select-none">$ </span>
      <slot />
    </pre>

    <button class="btn btn-sm btn-ghost" @click="onCopy">
      <component :is="copied ? Checkmark : Copy" v-motion-fade />
    </button>
  </div>
</template>
