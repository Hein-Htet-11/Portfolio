<script setup lang="ts">
import { onMounted, ref } from 'vue'
const dark = ref(false)
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    document.documentElement.classList.toggle('dark', saved === 'dark')
    dark.value = saved === 'dark'
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
    dark.value = true
  }
})
function toggle() {
  dark.value = !dark.value
  document.documentElement.classList.toggle('dark', dark.value)
  localStorage.setItem('theme', dark.value ? 'dark' : 'light')
}
</script>

<template>
  <button class="px-3 py-1 rounded border dark:border-neutral-600" @click="toggle">
    {{ dark ? '☀️' : '🌙' }}
  </button>
</template>
