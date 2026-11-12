// Configuración general del sitio.

// Mientras el sitio se sirva desde ancona31.github.io/clinica-celus, la ruta
// base es '/clinica-celus'. Cuando se apunte el dominio clinicacelus.com,
// cambiar BASE_PATH a '' y SITE_ORIGIN a 'https://www.clinicacelus.com'.
export const BASE_PATH = '/clinica-celus';
export const SITE_ORIGIN = 'https://ancona31.github.io';
export const SITE_URL = SITE_ORIGIN + BASE_PATH;

// Versión en maya yucateco: oculta hasta que la revise un hablante nativo.
export const MAYA_PUBLICADO = false;

// Antepone la ruta base a archivos de /public (imágenes, logos).
export const asset = (path: string) => BASE_PATH + path;
