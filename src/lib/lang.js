import i18n from 'sveltekit-i18n'
import { browser } from './utils.js';

function loaders(path = 'lang') {
  let languages;
  if (path == 'locales') {
    languages = setLoaders(path, import.meta.glob('$lib/../locales/**/*.json'));
  }else{
    languages = setLoaders(path, import.meta.glob('$lib/../lang/**/*.json'));
  }

  function setLoaders(path, meta){
    return Object.entries(meta).map(([keyPath, loader]) => {
      const pattern = new RegExp(`/${path}/([^/]+)(?:/([^/.]+))?\\.json$`)
      const [, locale, key] = keyPath.match(pattern)
      return {
        locale,
        key: key || '',
        loader
      }
    });
  }
  return languages
}

export const { t, locale, locales, loading, loadTranslations } = new i18n({
  loaders: loaders()
});

let initLang = 'en'
locale.subscribe((lang)=>{
  // console.log(lang, initLang)
  if(lang && browser){
    history.replaceState(null, null, location.pathname.replace(initLang,lang))
    initLang = lang
  }
})
