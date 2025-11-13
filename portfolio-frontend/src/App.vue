<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
    <NavBar />
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <footer class="border-t py-6 text-sm text-center dark:border-neutral-700">
      © {{ new Date().getFullYear() }} Haynes — {{ $t('footer.rights') }}
    </footer>
  </div>
</template>
