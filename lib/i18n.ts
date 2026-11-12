import { es } from '@/content/es';
import { CLINICA } from '@/content/datos';
import type { Diccionario, Lang } from '@/content/types';

export { rellenar } from './texto';
export { ruta } from './rutas';

const DICCIONARIOS: Record<'es', Diccionario> & Partial<Record<Lang, Diccionario>> = { es };

export function diccionario(lang: Lang): Diccionario {
  const d = DICCIONARIOS[lang] ?? es;
  // Solo para pruebas de diseño en local: DATOS_PRUEBA=peor npm run build
  if (process.env.DATOS_PRUEBA === 'peor') return mezclar(d, require('@/content/prueba-peor').peor);
  return d;
}

function mezclar<T>(base: T, cambios: unknown): T {
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return (cambios ?? base) as T;
  const salida = { ...base } as Record<string, unknown>;
  for (const [k, v] of Object.entries((cambios ?? {}) as Record<string, unknown>)) {
    salida[k] = mezclar(salida[k], v);
  }
  return salida as T;
}

export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlaceTelefono = `tel:${CLINICA.telefonoE164}`;
