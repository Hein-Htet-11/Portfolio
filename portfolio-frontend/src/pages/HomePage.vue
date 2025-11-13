<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import projects from '../content/projects.json'

const { t, locale } = useI18n()

type Project = {
  slug: string
  title: string
  title_ja?: string
  year: number
  category: string
  stack: string[]
  summary_en: string
  summary_ja: string
  links?: { github?: string; demo?: string }
}


// take first 2 as "featured"
const featured = computed<Project[]>(() => {
  return (projects as Project[]).slice(0, 2)
})

</script>

<template>
  <section class="max-w-5xl mx-auto px-6 py-16 space-y-12">
    <!-- Hero -->
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Left: text -->
      <div class="space-y-4">
        <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wide dark:border-neutral-700">
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          <span>{{ t('home.badge') }}</span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold">
          {{ t('hero.title') }}
        </h1>

        <p class="text-lg text-neutral-700 dark:text-neutral-200">
          {{ t('home.headline') }}
        </p>

        <p class="text-sm text-neutral-600 dark:text-neutral-300">
          {{ t('home.subheadline') }}
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
          <RouterLink
            to="/projects"
            class="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            {{ t('home.primaryButton') }}
          </RouterLink>
          <!-- TODO: replace with real resume link when ready -->
          <a
            href="#"
            class="px-5 py-2.5 rounded-full border text-sm font-medium dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            {{ t('home.secondaryButton') }}
          </a>
        </div>

        <div class="flex flex-wrap gap-3 pt-4 text-xs text-neutral-600 dark:text-neutral-300">
          <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
            Kyoto Computer Gakuin · 3rd year
          </span>
          <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
            Focus: Web & Backend
          </span>
          <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
            ITPEC FE · IT Passport · TOEIC 870 · JLPT N2
          </span>
        </div>
      </div>

      <!-- Right: profile card -->
      <div class="md:justify-self-end w-full">
        <div class="border rounded-2xl p-6 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300 mb-3">
            Profile Snapshot
          </h2>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="opacity-70">Current</span>
              <span>{{ locale === 'ja' ? 'KCG 情報科学科 3年' : '3rd year · Info Science @ KCG' }}</span>
            </div>
            <div class="flex justify-between">
              <span class="opacity-70">Location</span>
              <span>{{ locale === 'ja' ? '京都・日本' : 'Kyoto, Japan' }}</span>
            </div>
            <div>
              <div class="opacity-70 mb-1">Tech Stack</div>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">Java</span>
                <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">Spring</span>
                <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">PHP</span>
                <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">Vue</span>
                <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs">SQLite / MySQL</span>
              </div>
            </div>
            <div>
              <div class="opacity-70 mb-1">
                {{ locale === 'ja' ? '最近の取組み' : 'Recently focusing on' }}
              </div>
              <ul class="list-disc ml-4 space-y-1">
                <li>
                  {{ locale === 'ja'
                    ? 'ポートフォリオサイトとシフト作成ツールの開発'
                    : 'Portfolio site and Shift Creation Tool development' }}
                </li>
                <li>
                  {{ locale === 'ja'
                    ? '資格学習（ITPEC FE／Java／情報系）'
                    : 'Certification study (ITPEC FE / Java / IT-related)' }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Focus areas -->
    <section>
      <h2 class="text-xl font-semibold mb-4">
        {{ t('home.focusTitle') }}
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-5 border rounded-2xl dark:border-neutral-700 hover:shadow-sm transition">
          <h3 class="font-semibold mb-2 text-sm">
            {{ t('home.focusItems.f1Title') }}
          </h3>
          <p class="text-sm opacity-80">
            {{ t('home.focusItems.f1Body') }}
          </p>
        </div>
        <div class="p-5 border rounded-2xl dark:border-neutral-700 hover:shadow-sm transition">
          <h3 class="font-semibold mb-2 text-sm">
            {{ t('home.focusItems.f2Title') }}
          </h3>
          <p class="text-sm opacity-80">
            {{ t('home.focusItems.f2Body') }}
          </p>
        </div>
        <div class="p-5 border rounded-2xl dark:border-neutral-700 hover:shadow-sm transition">
          <h3 class="font-semibold mb-2 text-sm">
            {{ t('home.focusItems.f3Title') }}
          </h3>
          <p class="text-sm opacity-80">
            {{ t('home.focusItems.f3Body') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Featured projects -->
    <section>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">
          {{ t('home.featuredTitle') }}
        </h2>
        <RouterLink
          to="/projects"
          class="text-sm underline opacity-80 hover:opacity-100"
        >
          {{ t('home.featuredViewAll') }}
        </RouterLink>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <RouterLink
          v-for="p in featured"
          :key="p.slug"
          :to="`/projects/${p.slug}`"
          class="p-4 border rounded-2xl dark:border-neutral-700 hover:shadow-sm transition block"
        >
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-semibold">{{ p.title }}</h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800">
              {{ p.year }}
            </span>
          </div>
          <p class="text-xs uppercase tracking-wide opacity-70 mb-2">
            {{ p.category }}
          </p>
          <p class="text-sm opacity-85">
            {{ locale === 'ja' ? p.summary_ja : p.summary_en }}
          </p>
        </RouterLink>
      </div>
    </section>
  </section>
</template>
