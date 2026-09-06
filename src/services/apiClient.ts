import { get } from 'svelte/store';
import { lang } from '$lib/i18n/langStore';

/**
 * Small unauthenticated client used by the public contact forms.
 * Authentication belongs to pytune.com and must not be bundled into www.
 */
export async function apiRequest(
  url: string,
  options: RequestInit = {},
  _requiresAuth = false,
  fetchFn: typeof fetch = fetch
): Promise<{ body: unknown; headers: Headers }> {
  const headers = new Headers(options.headers || {});
  headers.set('X-User-Lang', get(lang) || 'en');

  const isFormData = options.body instanceof FormData;
  const method = (options.method || 'GET').toUpperCase();
  if (!isFormData && method !== 'GET' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetchFn(url, {
    ...options,
    method,
    headers,
    credentials: 'omit'
  });

  let body: unknown = {};
  try {
    body = await response.json();
  } catch {
    // Some successful endpoints legitimately return an empty body.
  }

  if (!response.ok) {
    const error: any = new Error((body as any)?.detail || response.statusText);
    error.status = response.status;
    error.body = body;
    throw error;
  }

  return { body, headers: response.headers };
}
