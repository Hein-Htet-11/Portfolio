<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="text-center py-12">
    <h1 class="text-4xl font-bold">{{ t('hero.title') }}</h1>
    <p class="mt-3 opacity-80">{{ t('hero.sub') }}</p>
    <RouterLink to="/projects" class="inline-block mt-6 px-5 py-2 rounded bg-blue-600 text-white">
      {{ t('cta.viewProjects') }}
    </RouterLink>
  </section>
</template>
