<script setup lang="ts">
import Add from '~icons/carbon/add'

const route = useRoute()
const { data, execute } = useAccountServers(route.params.id as string)

const selected = ref<Server>()
const visible = ref({ create: false, delete: false })

const account = computed(() => ({ id: route.params.id as string }))

const onShowUnbind = (server?: Server) => {
  selected.value = server
  visible.value.delete = true
}

const onBindServer = async () => {
  await useBindServer(account.value.id)
  await execute()
}
</script>

<template>
  <div class="my-4">
    <div class="w-full flex flex-col gap-2">
      <div
        v-motion
        :tapped="{ scale: 0.9 }"
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        class="card h-14 shadow-xl cursor-pointer bg-white flex items-center justify-center"
        @click="onBindServer"
      >
        <Add class="text-3xl" />
      </div>

      <ServerCard
        v-for="(server, index) in data"
        :key="server.id"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="(index + 1) * 50"
        :server="server"
        @delete="onShowUnbind(server)"
      />
    </div>

    <ServerUnbind v-model:visible="visible.delete" :account="account" :server="selected" @after-close="execute" />
  </div>
</template>
