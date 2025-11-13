<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import LangSwitch from './LangSwitch.vue'
const { t } = useI18n()
</script>

<template>
  <header class="border-b bg-white/80 dark:bg-neutral-900/80 backdrop-blur sticky top-0 z-50 dark:border-neutral-700">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <RouterLink to="/" class="font-bold text-lg">Haynes</RouterLink>
      <div class="flex items-center gap-4">
        <RouterLink class="hover:underline" to="/">{{ t('nav.home') }}</RouterLink>
        <RouterLink class="hover:underline" to="/projects">{{ t('nav.projects') }}</RouterLink>
        <RouterLink class="hover:underline" to="/about">{{ t('nav.about') }}</RouterLink>
        <RouterLink class="hover:underline" to="/contact">{{ t('nav.contact') }}</RouterLink>
        <LangSwitch />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
