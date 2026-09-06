import type { RequestHandler } from './$types';

// Retire proprement l'ancien service worker du site public.
export const GET: RequestHandler = () =>
  new Response(null, {
    status: 410,
    headers: {
      'cache-control': 'no-store'
    }
  });
