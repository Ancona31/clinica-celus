import type { Metadata } from 'next';
import { es } from '@/content/es';
import { Especialistas } from '@/views/Especialistas';

export const metadata: Metadata = {
  title: es.paginaEspecialistas.meta.title,
  description: es.paginaEspecialistas.meta.description,
};

export default function Page() {
  return <Especialistas lang="es" />;
}
