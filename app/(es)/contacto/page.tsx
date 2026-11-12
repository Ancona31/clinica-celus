import type { Metadata } from 'next';
import { es } from '@/content/es';
import { Contacto } from '@/views/Contacto';

export const metadata: Metadata = {
  title: es.contacto.meta.title,
  description: es.contacto.meta.description,
};

export default function Page() {
  return <Contacto lang="es" />;
}
