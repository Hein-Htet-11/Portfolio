<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import all from '../content/projects.json'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

type MediaItem =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'youtube'; id: string }
  | { type: 'video'; src: string }

type Project = {
  slug: string
  title: string
  title_ja?: string
  year: number
  category: string
  stack: string[]
  summary_en: string
  summary_ja: string
  role_en?: string
  role_ja?: string
  features_en?: string[]
  features_ja?: string[]
  links?: { github?: string; demo?: string }
  media?: MediaItem[]
}

// DEBUG: show the slug we’re looking for
console.log('[detail] route slug =', route.params.slug)

// find the project by slug
const project = computed<Project | undefined>(() => {
  const slug = String(route.params.slug ?? '')
  const list = (all as Project[])
  const found = list.find(p => p.slug === slug)
  console.log('[detail] found?', !!found, 'slug=', slug)
  return found
})

// localized helpers
const tTitle = computed<string>(() => {
  const p = project.value
  if (!p) return ''
  return locale.value === 'ja' ? (p.title_ja ?? p.title) : p.title
})
const tSummary = computed<string>(() => {
  const p = project.value
  if (!p) return ''
  return locale.value === 'ja' ? p.summary_ja : p.summary_en
})
const tRole = computed<string>(() => {
  const p = project.value
  if (!p) return ''
  return locale.value === 'ja' ? (p.role_ja ?? '') : (p.role_en ?? '')
})
const tFeatures = computed<string[]>(() => {
  const p = project.value
  if (!p) return []
  return locale.value === 'ja' ? (p.features_ja ?? []) : (p.features_en ?? [])
})

// Set tab title
watch(tTitle, (v) => { document.title = v ? `${v} — Haynes` : 'Haynes — Projects' }, { immediate: true })

function back() { router.push('/projects') }
</script>

<template>
  <!-- Always render a small header so you see something -->
  <div class="text-xs opacity-60 mb-4">
    /projects/{{ $route.params.slug }}
  </div>

  <!-- 404 -->
  <div v-if="!project" class="text-center py-16">
    <h1 class="text-2xl font-bold mb-2">404 — Not Found</h1>
    <p class="opacity-80 mb-6">Project does not exist (wrong slug?).</p>
    <button class="px-4 py-2 rounded bg-blue-600 text-white" @click="back">Back to Projects</button>
  </div>

  <!-- Detail -->
  <div v-else class="space-y-6">
    <header class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 class="text-3xl font-bold">{{ tTitle }}</h1>
        <p class="opacity-80">
          {{ project.category }} · {{ project.year }} · {{ project.stack.join(', ') }}
        </p>
      </div>

      <div class="flex gap-3">
        <a v-if="project.links?.github" :href="project.links.github" target="_blank" class="px-3 py-2 border rounded hover:bg-neutral-50 dark:hover:bg-neutral-800">GitHub</a>
        <a v-if="project.links?.demo" :href="project.links.demo" target="_blank" class="px-3 py-2 border rounded hover:bg-neutral-50 dark:hover:bg-neutral-800">Demo</a>
      </div>
    </header>

    <section v-if="project.media?.length" class="grid md:grid-cols-2 gap-4">
      <div v-for="(m, i) in project.media" :key="i" class="rounded-lg overflow-hidden border dark:border-neutral-700">
        <img v-if="m.type === 'image'" :src="m.src" :alt="m.alt || ''" class="w-full h-full object-cover" />
        <iframe
          v-else-if="m.type === 'youtube'"
          class="w-full aspect-video"
          :src="`https://www.youtube.com/embed/${m.id}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <video v-else-if="m.type === 'video'" class="w-full" controls :src="m.src"></video>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">Overview / 概要</h2>
      <p class="opacity-90">{{ tSummary }}</p>
    </section>

    <section v-if="tRole">
      <h2 class="text-xl font-semibold mb-2">My Role / 担当</h2>
      <p class="opacity-90 whitespace-pre-line">{{ tRole }}</p>
    </section>

    <section v-if="tFeatures.length">
      <h2 class="text-xl font-semibold mb-2">Highlights / 主要機能</h2>
      <ul class="list-disc ml-6 space-y-1">
        <li v-for="(f, i) in tFeatures" :key="i">{{ f }}</li>
      </ul>
    </section>
  </div>
</template>
