<script setup lang="ts">
const { username, password, signIn } = useSignIn()

const router = useRouter()

const onSignIn = async () => {
  await signIn()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div>Sign in</div>

    <input v-model="username" placeholder="username">
    <input v-model="password" placeholder="password" type="password">

    <button class="bg-black text-white" @click="onSignIn">
      Sign in
    </button>
  </div>
</template>
