export type Mode = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/** Saved choice wins; otherwise follow the OS preference. */
export function initialMode(): Mode {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage can throw in private windows or previews; fall through
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function saveMode(mode: Mode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // ignore
  }
}
