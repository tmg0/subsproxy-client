<script setup lang="ts">
import Menu from '~icons/carbon/menu'
import Logout from '~icons/carbon/logout'

const router = useRouter()

const onSignOut = async () => {
  await useSignOut()
  router.push({ name: 'sign-in' })
}
</script>

<template>
  <div class="flex w-screen h-screen flex-col bg-[#f2f2f2]">
    <div class="p-4 flex w-full items-center justify-between" :style="{ backgroundImage: 'rgb(248, 247, 252, 0.5)', backdropFilter: 'blur(10px)' }">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-circle text-lg m-1"><Menu /></label>
        <ul tabindex="0" class="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="uppercase" @click="onSignOut">
              <Logout />
              <span>Sign out</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="font-bold uppercase cursor-pointer" @click="router.push({ name: 'dashboard' })">
        Subsproxy
      </div>
    </div>

    <slot />
  </div>
</template>
