import type { Metadata } from 'next';
import { es } from '@/content/es';
import { Inicio } from '@/views/Inicio';

export const metadata: Metadata = {
  title: es.inicio.meta.title,
  description: es.inicio.meta.description,
};

export default function Page() {
  return <Inicio lang="es" />;
}
