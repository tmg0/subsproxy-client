<script setup lang="ts">
const { username, password, signIn } = useSignIn()

const router = useRouter()

const onSignIn = async () => {
  await signIn()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="p-4 w-screen h-screen flex items-center">
    <div class="card w-full bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="car!"></figure>

      <div class="card-body">
        <h2 class="card-title">
          Sign in
        </h2>

        <input v-model="username" placeholder="Username" class="input input-bordered w-full focus:outline-none">
        <input v-model="password" placeholder="Password" type="password" class="input input-bordered w-full focus:outline-none">

        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="onSignIn">
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
