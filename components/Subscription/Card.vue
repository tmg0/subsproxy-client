<script setup lang="ts">
import Close from '~icons/carbon/close'

const props = defineProps<{
  subscription?: Subscription
}>()

const emit = defineEmits(['delete'])

const showMore = computed(() => {
  const length = props?.subscription?.accountSubscription?.length || 0
  return length > 3
})
</script>

<template>
  <div class="h-96 w-72 overflow-hidden bg-white rounded-box bg-gradient-to-br from-sky-500 to-primary relative">
    <slot>
      <button class="btn btn-square btn-xs absolute top-4 right-4" @click="emit('delete')">
        <Close class="text-lg" />
      </button>

      <div class="p-4 box-border flex flex-col gap-4">
        <div class="font-bold text-white uppercase">
          {{ subscription?.alias }}
        </div>

        <div class="stats shadow-xl bg-black/10 text-white">
          <div class="stat flex flex-col w-full gap-1">
            <div class="stat-title text-white/75">
              Subscription servers
            </div>
            <div class="stat-value">
              {{ subscription?.server.length.toFixed(2) }}
            </div>
            <div class="stat-desc text-white/75">
              Including unused servers
            </div>
          </div>
        </div>

        <div class="stats shadow-xl bg-black/10 text-white">
          <div class="stat flex flex-col w-full gap-2">
            <div class="stat-title text-white/75">
              Total used accounts
            </div>

            <div>
              <div class="avatar-group -space-x-6">
                <div v-for="account in subscription?.accountSubscription" :key="account.id" class="avatar placeholder border">
                  <div class="font-bold text-2xl w-12 bg-gradient-to-br from-emerald-500 to-sky-500 text-white uppercase">
                    <span>{{ account.account.username.split('.').at(-1)?.at(0) }}</span>
                  </div>
                </div>

                <div v-show="showMore" class="avatar placeholder">
                  <div class="w-12 bg-neutral-focus text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="stat-desc text-white/75">
              Belongs to current subscription
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>
