import { loadTranslations } from '$lib/lang';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params }) => {
  const { pathname } = url;

  const initLocale = params.lang; // get from cookie, user session, ...

  await loadTranslations(initLocale, pathname); // keep this just before the `return`

  return {};
}