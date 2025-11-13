<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

type Cert = { name: string; date: string }
const certs = computed(() => tm('about.certs') as Cert[])
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <!-- Photo -->
    <div class="flex justify-center mb-6">
      <div class="relative w-32 h-32 md:w-40 md:h-40">
        <!-- gradient ring -->
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-400 opacity-70"
        ></div>
        <!-- inner circle -->
        <div
          class="absolute inset-[3px] rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
        >
          <!-- TODO: replace src with your real photo later -->
          <img
            src="/images/profile-placeholder.png"
            alt="Profile photo"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Title -->
    <h1
      class="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
    >
      {{ t('about.title') }}
    </h1>

    <!-- Intro + goal -->
    <div class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 space-y-4">
      <p>{{ t('about.intro') }}</p>
      <p class="italic opacity-90">{{ t('about.goal') }}</p>
    </div>

    <!-- Divider -->
    <div class="my-10 h-px bg-gradient-to-r from-transparent via-neutral-400/40 to-transparent"></div>

    <!-- Highlights -->
    <div class="grid md:grid-cols-3 gap-6 text-center">
      <div class="p-6 border dark:border-neutral-700 rounded-2xl hover:shadow transition">
        <p class="text-3xl mb-2">📍</p>
        <p class="text-sm opacity-80">{{ t('about.highlights.h1') }}</p>
      </div>
      <div class="p-6 border dark:border-neutral-700 rounded-2xl hover:shadow transition">
        <p class="text-3xl mb-2">🎓</p>
        <p class="text-sm opacity-80">{{ t('about.highlights.h2') }}</p>
      </div>
      <div class="p-6 border dark:border-neutral-700 rounded-2xl hover:shadow transition">
        <p class="text-3xl mb-2">🗣️</p>
        <p class="text-sm opacity-80">{{ t('about.highlights.h3') }}</p>
      </div>
    </div>

    <!-- Certificates -->
    <h2 class="text-2xl font-semibold mt-12 mb-4">
      {{ t('about.certsTitle') }}
    </h2>
    <ul class="space-y-3">
      <li
        v-for="(c, i) in certs"
        :key="i"
        class="flex items-center justify-between p-4 border rounded-xl dark:border-neutral-700 hover:bg-neutral-50/60 dark:hover:bg-neutral-800/60 transition"
      >
        <span class="font-medium">{{ c.name }}</span>
        <span class="text-xs px-2 py-1 rounded-full border dark:border-neutral-600">
          {{ c.date }}
        </span>
      </li>
    </ul>
  </section>
</template>
