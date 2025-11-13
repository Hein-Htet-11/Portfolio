<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
function setLang(l: 'en' | 'ja') {
  locale.value = l
  localStorage.setItem('locale', l)
}
</script>

<template>
  <div class="inline-flex gap-2">
    <button class="px-2 py-1 border rounded dark:border-neutral-600" @click="setLang('en')">EN</button>
    <button class="px-2 py-1 border rounded dark:border-neutral-600" @click="setLang('ja')">日本語</button>
  </div>
</template>
