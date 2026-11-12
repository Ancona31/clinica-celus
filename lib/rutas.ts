import type { Lang } from '@/content/types';

/** Ruta interna con prefijo de idioma y barra final: ruta('myn', '/servicios') → '/myn/servicios/'. */
export function ruta(lang: Lang, path: string): string {
  const limpio = path === '/' ? '' : path.replace(/\/$/, '');
  return (lang === 'myn' ? '/myn' : '') + limpio + '/';
}

/** La misma página en el otro idioma. Recibe el pathname sin basePath. */
export function rutaEnOtroIdioma(pathname: string, destino: Lang): string {
  const sinPrefijo = pathname.replace(/^\/myn(?=\/|$)/, '') || '/';
  return ruta(destino, sinPrefijo);
}
