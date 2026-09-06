import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(301, '/for/piano-owners');
}
