<script setup lang="ts">
import { HeroProvider } from 'hero-motion'
</script>

<template>
  <HeroProvider>
    <NuxtPage />
  </HeroProvider>
</template>

<style>
html, body {
  min-height: 100vh;
  background-color: #f2f2f2;
}
</style>
