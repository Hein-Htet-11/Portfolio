<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import projects from '../content/projects.json'

type Project = {
  slug: string
  title: string
  title_ja?: string
  year: number
  category: 'Web' | 'Game' | 'Software' | 'Hardware' | string
  stack: string[]
  summary_en: string
  summary_ja: string
  links?: { github?: string; demo?: string }
  images?: string[]
  // optional fields for detail page are fine; unused here
}

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

// ---- Filter state (URL-synced) ----
const categories = ['All', 'Web', 'Game','Software', 'Hardware'] as const
type Cat = (typeof categories)[number]

const activeCat = ref<Cat>('All')
const activeYear = ref<'All' | number>('All')

// Initialize from URL query if present
const q = route.query
if (q.cat && typeof q.cat === 'string' && categories.includes(q.cat as Cat)) {
  activeCat.value = q.cat as Cat
}
if (q.year && typeof q.year === 'string' && /^\d{4}$/.test(q.year)) {
  activeYear.value = Number(q.year)
}

// Update URL when filters change
watch([activeCat, activeYear], ([cat, year]) => {
  const query: Record<string, string> = {}
  if (cat !== 'All') query.cat = String(cat)
  if (year !== 'All') query.year = String(year)
  router.replace({ query })
}, { immediate: false })

// ---- Derived data ----
const years = computed<number[]>(() => {
  const s = new Set<number>()
  ;(projects as Project[]).forEach(p => Number.isFinite(p.year) && s.add(p.year))
  return Array.from(s).sort((a,b) => b - a) // newest first
})

function txt(en: string, ja?: string) {
  return locale.value === 'ja' ? (ja ?? en) : en
}

// ---- Filtering ----
const filtered = computed<Project[]>(() => {
  let list = (projects as Project[]).slice().sort((a,b) => b.year - a.year)
  if (activeCat.value !== 'All') {
    list = list.filter(p => p.category === activeCat.value)
  }
  if (activeYear.value !== 'All') {
    list = list.filter(p => p.year === activeYear.value)
  }
  return list
})
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Projects / プロジェクト</h1>

  <!-- Controls -->
  <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-4">
    <!-- Category chips -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="c in categories"
        :key="c"
        class="px-3 py-1 rounded-full border text-sm transition
               dark:border-neutral-700"
        :class="c === activeCat
          ? 'bg-blue-600 text-white border-blue-600'
          : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'"
        @click="activeCat = c"
      >
        {{ c }}
      </button>
    </div>

    <!-- Year dropdown -->
    <div class="flex items-center gap-2">
      <label class="text-sm opacity-80">Year / 年:</label>
      <select
        class="border rounded px-2 py-1 dark:bg-neutral-900 dark:border-neutral-700"
        v-model="activeYear"
      >
        <option value="All">All</option>
        <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
      </select>
    </div>
  </div>

  <!-- List -->
  <div v-if="filtered.length" class="grid md:grid-cols-2 gap-4">
    <RouterLink
      v-for="p in filtered"
      :key="p.slug"
      class="p-4 border rounded-lg dark:border-neutral-700 hover:shadow transition"
      :to="`/projects/${p.slug}`"
    >
      <div class="flex items-center justify-between">
        <h2 class="text-xl font-semibold">
          {{ txt(p.title, p.title_ja) }}
        </h2>
        <span class="text-sm opacity-70">{{ p.year }}</span>
      </div>
      <div class="mt-1 text-xs uppercase tracking-wide opacity-70">{{ p.category }}</div>
      <p class="mt-2">
        {{ txt(p.summary_en, p.summary_ja) }}
      </p>
      <div class="mt-2 text-sm opacity-80">Stack: {{ p.stack.join(', ') }}</div>
      <div class="mt-3 flex gap-3">
        <span v-if="p.links?.github" class="underline">GitHub</span>
        <span v-if="p.links?.demo" class="underline">Demo</span>
      </div>
    </RouterLink>
  </div>

  <div v-else class="text-center py-16 opacity-80">
    No projects match these filters / 該当するプロジェクトはありません
  </div>
</template>
