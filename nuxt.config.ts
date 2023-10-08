// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Subsproxy'
    }
  },

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'unplugin-icons/nuxt', '@vueuse/motion/nuxt', '@nuxt/image'],

  imports: { dirs: ['./stores'] },

  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
