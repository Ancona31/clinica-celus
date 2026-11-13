import type { Metadata } from 'next';
import { es } from '@/content/es';
import { Historias } from '@/views/Historias';

export const metadata: Metadata = {
  title: es.paginaHistorias.meta.title,
  description: es.paginaHistorias.meta.description,
};

export default function Page() {
  return <Historias lang="es" />;
}
