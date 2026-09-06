// src/lib/i18n/langStore.ts
import { writable, derived } from 'svelte/store';

// --- Available languages ---
// 'de' and 'el' are temporarily disabled (incomplete since the /discover rework) —
// their JSON files stay on disk for a future reactivation, see locales/de.json and locales/el.json.
export const availableLangs = ['en', 'fr'] as const;
export type LangCode = (typeof availableLangs)[number];

const DEFAULT_LANG: LangCode = 'en';

// --- Store ---
export const lang = writable<LangCode>(DEFAULT_LANG);

// --- Cache for loaded translations to avoid re-imports ---
const cache: Partial<Record<LangCode, Record<string, any>>> = {};
let translations: Record<string, any> = {};

// --- Detect browser language (exported, SSR-safe) ---
export function detectBrowserLang(): LangCode {
  if (typeof navigator === 'undefined') return DEFAULT_LANG; // SSR
  const code = navigator.language?.split('-')[0].toLowerCase();
  return (availableLangs as readonly string[]).includes(code as LangCode)
    ? (code as LangCode)
    : DEFAULT_LANG;
}

// --- Load a language JSON (cached) ---
async function loadLang(code: LangCode) {
  if (cache[code]) {
    translations = cache[code]!;
    return;
  }
  const mod = await import(`./locales/${code}.json`);
  cache[code] = mod.default;
  translations = cache[code]!;
}

// --- Public setter (persists to localStorage when available) ---
export async function setLang(code: LangCode) {
  const target: LangCode = (availableLangs as readonly string[]).includes(code) ? code : DEFAULT_LANG;
  await loadLang(target);
  lang.set(target);
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem('lang', target);
    } catch {
      /* ignore storage errors */
    }
  }
}

// --- One-time client init (prefers saved choice, else browser lang) ---
export async function initI18n() {
  let initial: LangCode = DEFAULT_LANG;

  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lang') as LangCode | null;
    if (stored && (availableLangs as readonly string[]).includes(stored)) {
      initial = stored;
    } else {
      initial = detectBrowserLang();
    }
  } else {
    // SSR: keep default; client will re-init
    initial = DEFAULT_LANG;
  }

  await setLang(initial);
}



// --- Translator helper: use as {t('navbar.home')} ---
export const t = derived(lang, ($lang) => {
  return (path: string): any => {
    // Prefer cache for current lang, fall back to last-loaded "translations"
    const dict = cache[$lang] ?? translations;
    const keys = path.split('.');
    let value: any = dict;
    for (const k of keys) value = value?.[k];
    return value ?? path;
  };
});
