<script setup lang="ts">
const route = useRoute()
const { data } = useAccountServers(route.params.id as string)

const selected = ref<Server>()
const visible = ref({ create: false, delete: false })

const onShowUnbind = (server?: Server) => {
  selected.value = server
  visible.value.delete = true
}
</script>

<template>
  <div class="my-4">
    <div class="w-full flex flex-col gap-2">
      <ServerCard
        v-for="(server, index) in data"
        :key="server.id"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, scale: 1 }"
        :delay="index * 50"
        :server="server"
        @delete="onShowUnbind"
      />
    </div>

    <ServerUnbind v-model:visible="visible.delete" />
  </div>
</template>
