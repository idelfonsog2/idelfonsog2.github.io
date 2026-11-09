import { computed, ref, watchEffect } from 'vue'
import { content, type Content } from './content'

export type Locale = 'en' | 'es'

const STORAGE_KEY = 'lang'

function initialLocale(): Locale {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl === 'en' || fromUrl === 'es') return fromUrl
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    // storage/URL access can throw in private windows or previews; fall through
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export const locale = ref<Locale>(initialLocale())

export function setLocale(next: Locale) {
  locale.value = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // ignore
  }
}

export function useContent() {
  return computed<Content>(() => content[locale.value])
}

// Keep <html lang>, <title> and the meta description in sync with the chosen language
watchEffect(() => {
  const c = content[locale.value]
  document.documentElement.lang = locale.value
  document.title = c.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', c.meta.locale)
})
