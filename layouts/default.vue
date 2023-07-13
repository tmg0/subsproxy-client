<script setup lang="ts">
import Menu from '~icons/carbon/menu'
import Logout from '~icons/carbon/logout'
import LogoGithub from '~icons/carbon/logo-github'

const router = useRouter()

const visible = ref(false)

const onSignOut = async () => {
  await useSignOut()
  router.push({ name: 'sign-in' })
}
</script>

<template>
  <div class="flex flex-col">
    <div class="p-4 flex w-full items-center justify-between fixed top-0 h-20 z-10" :style="{ backgroundImage: 'rgb(248, 247, 252, 0.5)', backdropFilter: 'blur(10px)' }">
      <button class="btn btn-circle text-lg" @click="visible = !visible">
        <Menu />
      </button>

      <div class="font-bold uppercase cursor-pointer" @click="router.push({ name: 'dashboard' })">
        Subsproxy
      </div>
    </div>

    <div class="pt-20 box-border">
      <slot />
    </div>

    <DaisyDrawer v-model:visible="visible" width="75%">
      <div class="p-4">
        <div class="flex justify-end">
          <button class="btn btn-circle">
            <LogoGithub class="text-lg text-gray-500" />
          </button>
        </div>

        <ul class="menu">
          <li><a class="uppercase">dashboard</a></li>
          <li><a class="uppercase">subscription</a></li>
          <li><a class="uppercase">server</a></li>
        </ul>
      </div>

      <template #footer>
        <div class="flex justify-center p-4">
          <button class="btn bg-gradient-to-br from-pink-500 to-red-500 text-white" @click="onSignOut">
            <Logout />
            <span>Sign out</span>
          </button>
        </div>
      </template>
    </DaisyDrawer>
  </div>
</template>
