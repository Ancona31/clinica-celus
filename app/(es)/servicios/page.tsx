import type { Metadata } from 'next';
import { es } from '@/content/es';
import { Servicios } from '@/views/Servicios';

export const metadata: Metadata = {
  title: es.paginaServicios.meta.title,
  description: es.paginaServicios.meta.description,
};

export default function Page() {
  return <Servicios lang="es" />;
}
