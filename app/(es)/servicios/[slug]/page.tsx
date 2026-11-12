import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICIOS, servicioPorSlug } from '@/content/datos';
import { es } from '@/content/es';
import { Servicio } from '@/views/Servicio';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const servicio = servicioPorSlug((await params).slug);
  if (!servicio) return {};
  const { meta } = es.servicios[servicio.slug];
  return { title: meta.title, description: meta.description };
}

export default async function Page({ params }: Props) {
  const servicio = servicioPorSlug((await params).slug);
  if (!servicio) notFound();
  return <Servicio lang="es" slug={servicio.slug} />;
}
