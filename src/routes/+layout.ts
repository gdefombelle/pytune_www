import type { LayoutLoad } from './$types';
import { initI18n } from '$lib/i18n/langStore';

export const load: LayoutLoad = async ({ depends }) => {
  depends('app:i18n');
  await initI18n();
  return {};
};
