import { es } from '@/content/es';
import { CLINICA } from '@/content/datos';
import type { Diccionario, Lang } from '@/content/types';

export { rellenar } from './texto';
export { ruta } from './rutas';

const DICCIONARIOS: Record<'es', Diccionario> & Partial<Record<Lang, Diccionario>> = { es };

export function diccionario(lang: Lang): Diccionario {
  return DICCIONARIOS[lang] ?? es;
}

export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const enlaceTelefono = `tel:${CLINICA.telefonoE164}`;
