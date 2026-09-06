import { dev } from '$app/environment';

const configuredAppOrigin = import.meta.env.VITE_APP_ORIGIN?.trim();

export const appOrigin = (
  configuredAppOrigin || (dev ? 'http://localhost:5174' : 'https://pytune.com')
).replace(/\/$/, '');

export function appHref(path: string): string {
  return `${appOrigin}${path.startsWith('/') ? path : `/${path}`}`;
}
