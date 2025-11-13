<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import QRCode from 'qrcode'
import { onMounted } from 'vue'


const { t } = useI18n()

const emailAddress = 'haynesart11@gmail.com'

const name = ref('')
const fromEmail = ref('')
const message = ref('')

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Hein-Htet-11',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/hein-htet-zin-81b40b23b',
    icon: 'linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/hein.htet.zin',
    icon: 'instagram'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/heinhtetzin11',
    icon: 'facebook'
  }
]

function getIcon(name: string) {
  switch (name) {
    case 'github':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.8-.7 2.2-1 .1-.7.4-1.1.7-1.3-2.5-.3-5-1.2-5-5.3 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 1-.3 2-.4 3-.4s2 .1 3 .4c2-1.2 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 4.1-2.5 5-5 5.3.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z"/>
        </svg>`
    case 'linkedin':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5C1 2.4 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 23h3.6V7.98H1.2V23zM8.7 23h3.6v-7.6c0-2 .4-4 3-4s2.6 2.2 2.6 4.2V23h3.6v-8.9c0-4.4-2.3-6.5-5.4-6.5-2.5 0-3.6 1.4-4.2 2.4h-.1V7.9H8.7c.1 1.3 0 15.1 0 15.1z"/>
        </svg>`
    case 'instagram':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.5.2.9.5 1.3.9s.7.8.9 1.3c.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.5-.5.9-.9 1.3s-.8.7-1.3.9c-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.5-.2-.9-.5-1.3-.9s-.7-.8-.9-1.3c-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.5.5-.9.9-1.3s.8-.7 1.3-.9c.4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7 0 5 0 4.3.1 3.6.2 3 0 2.5.3 2 .5 1.6.9 1.4 1.4 1.2 1.9 1 2.5.9 3.3.8 4 .8 4.5.7 5.9.7 12s0 6.1.1 7.5c.1.8.3 1.4.5 1.9.2.5.6.9 1.1 1.1.5.2 1.1.4 1.9.5C5.9 23.3 6.3 23.3 7 23.3c1.3.1 1.7.1 5 .1s3.7 0 5-.1c.8-.1 1.4-.3 1.9-.5.5-.2.9-.6 1.1-1.1.2-.5.4-1.1.5-1.9.1-1.4.1-1.8.1-5s0-3.7-.1-5c-.1-.8-.3-1.4-.5-1.9-.2-.5-.6-.9-1.1-1.1-.5-.2-1.1-.4-1.9-.5C15.7.7 15.3.7 14 0c-1.3-.1-1.7-.1-5-.1z"/>
          <circle cx="12" cy="12" r="3.2"/>
        </svg>`
    case 'facebook':
      return `
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-2v7A10 10 0 0 0 22 12z"/>
        </svg>`
    default:
      return ''
  }
}

const qrDataUrl = ref<string>('')

onMounted(async () => {
  // This QR will link to your portfolio website
  // Replace with your final domain (e.g., Vercel or GitHub Pages)
  const portfolioUrl = 'https://your-portfolio-domain.com'
  qrDataUrl.value = await QRCode.toDataURL(portfolioUrl)
})


function onSubmit() {
  const subject =
    name.value.trim().length > 0
      ? `Portfolio contact from ${name.value}`
      : 'Portfolio contact'

  const bodyLines = [
    `Name: ${name.value}`,
    `Email: ${fromEmail.value}`,
    '',
    'Message:',
    message.value
  ]

  const mailto = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

  window.location.href = mailto
}
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16 space-y-10">
    <!-- Heading -->
    <header class="space-y-3">
      <h1 class="text-3xl font-bold">
        {{ t('contact.title') }}
      </h1>
      <p class="text-neutral-700 dark:text-neutral-200">
        {{ t('contact.subtitle') }}
      </p>
    </header>

    <!-- Main layout: form + sidebar -->
    <div class="grid md:grid-cols-[2fr,1fr] gap-8 items-start">
      <!-- Contact form -->
      <form
        class="space-y-4 p-6 border rounded-2xl dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur"
        @submit.prevent="onSubmit"
      >
        <div>
          <label class="block text-sm font-medium mb-1">
            {{ t('contact.form.nameLabel') }}
          </label>
          <input
            v-model="name"
            type="text"
            class="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-900 dark:border-neutral-700"
            autocomplete="name"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">
            {{ t('contact.form.emailLabel') }}
          </label>
          <input
            v-model="fromEmail"
            type="email"
            class="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-900 dark:border-neutral-700"
            autocomplete="email"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">
            {{ t('contact.form.messageLabel') }}
          </label>
          <textarea
            v-model="message"
            rows="5"
            class="w-full rounded-md border px-3 py-2 text-sm resize-y dark:bg-neutral-900 dark:border-neutral-700"
          ></textarea>
        </div>

        <p class="text-xs text-neutral-500 dark:text-neutral-400">
          {{ t('contact.form.helper') }}
        </p>

        <button
          type="submit"
          class="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          {{ t('contact.form.sendButton') }}
        </button>
      </form>

      <!-- Sidebar: Social + QR -->
      <aside class="space-y-6">
        <!-- Social media section -->
        <div>
          <h2 class="text-sm font-semibold mb-2">
            Social
          </h2>

          <ul class="space-y-2">
            <li
              v-for="link in socialLinks"
              :key="link.name"
            >
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 underline opacity-85 hover:opacity-100"
              >
                <!-- icon -->
                <span
                  class="text-neutral-700 dark:text-neutral-300"
                  v-html="getIcon(link.icon)"
                ></span>

                <!-- label -->
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- QR Code (Portfolio link) -->
        <div class="pt-2">
          <h2 class="text-sm font-semibold mb-2">
            QR Code
          </h2>
          <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
            Scan to open this portfolio on your phone.
          </p>

          <div
            class="border rounded-xl p-3 inline-block dark:border-neutral-700 bg-white dark:bg-neutral-900"
          >
            <img
              v-if="qrDataUrl"
              :src="qrDataUrl"
              alt="QR Code"
              class="w-40 h-40"
            />
            <div v-else class="text-neutral-500 text-sm">
              Generating...
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

