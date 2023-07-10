<script setup lang="ts">
import ArrowRight from '~icons/carbon/arrow-right'

const { username, password, signIn } = useSignIn()

const router = useRouter()

const onSignIn = async () => {
  await signIn()
  router.push({ name: 'dashboard' })
}
</script>

<template>
  <div class="p-4 w-screen h-screen flex items-center bg-[#f2f2f2]">
    <div class="card w-full bg-base-100 shadow-xl image-ful">
      <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="car!"></figure>

      <div class="card-body gap-4">
        <h2 class="card-title uppercase">
          Subsproxy
        </h2>

        <div class="w-full flex flex-col gap-2">
          <input v-model="username" placeholder="Username" class="input input-bordered w-full focus:outline-none">
          <input v-model="password" placeholder="Password" type="password" class="input input-bordered w-full focus:outline-none">
        </div>

        <a class="block link text-xs">View my github repo.</a>

        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="onSignIn">
            <span>Sign in</span>
            <ArrowRight class="text-xl" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
