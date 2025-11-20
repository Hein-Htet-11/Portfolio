<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen relative overflow-hidden">
    <NavBar />
    <!-- Decorative background blobs -->
    <div
  class="pointer-events-none fixed -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl -z-10"
></div>
<div
  class="pointer-events-none fixed -right-40 top-1/3 h-72 w-72 rounded-full bg-purple-500/15 blur-3xl -z-10"
></div>
<div
  class="pointer-events-none fixed -bottom-40 left-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl -z-10"
></div>


    <!-- Main content -->
    <RouterView />
    <footer class="border-t py-6 text-sm text-center dark:border-neutral-700">
      © {{ new Date().getFullYear() }} Haynes — {{ $t('footer.rights') }}
    </footer>
  </div>
</template>

