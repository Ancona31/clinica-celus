'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';
import type { Categoria } from '@/content/datos';
import { rellenar } from '@/lib/texto';
import { Icono } from './Icono';
import s from './ServiciosFiltrables.module.css';

type Filtro = 'todos' | Categoria;

export type ItemServicio = {
  slug: string;
  href: string;
  nombre: string;
  resumen: string;
  icono: string;
  categoria: Categoria;
  h24: boolean;
};

type Props = {
  servicios: ItemServicio[];
  filtros: Record<Filtro, string>;
  etiquetaFiltro: string;
  mostrando: string;
  verServicio: string;
  etiqueta24h: string;
  nivelTitulo?: 'h2' | 'h3';
};

const ORDEN: Filtro[] = ['todos', 'urgencias', 'especialidades', 'estudios'];

export function ServiciosFiltrables({
  servicios,
  filtros,
  etiquetaFiltro,
  mostrando,
  verServicio,
  etiqueta24h,
  nivelTitulo: Titulo = 'h3',
}: Props) {
  const [filtro, setFiltro] = useState<Filtro>('todos');
  const [interactuado, setInteractuado] = useState(false);
  const [indicador, setIndicador] = useState<{ x: number; w: number } | null>(null);
  const grupo = useRef<HTMLDivElement>(null);

  // El indicador blanco se mide sobre el botón activo y se desliza con transform.
  // Antes de hidratar, el botón activo pinta su propio fondo (ver CSS).
  useLayoutEffect(() => {
    const cont = grupo.current;
    if (!cont) return;
    const medir = () => {
      const b = cont.querySelector<HTMLButtonElement>('[aria-pressed="true"]');
      if (b) setIndicador({ x: b.offsetLeft, w: b.offsetWidth });
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(cont);
    return () => ro.disconnect();
  }, [filtro]);

  const visibles = servicios.filter((sv) => filtro === 'todos' || sv.categoria === filtro);

  const elegir = (f: Filtro) => {
    setFiltro(f);
    setInteractuado(true);
  };

  return (
    <div className={s.raiz}>
      <div
        ref={grupo}
        role="group"
        aria-label={etiquetaFiltro}
        className={s.segmentos}
        data-indicador={indicador ? '' : undefined}
      >
        {indicador && (
          <span
            aria-hidden="true"
            className={s.indicador}
            style={{ transform: `translateX(${indicador.x}px)`, width: indicador.w }}
          />
        )}
        {ORDEN.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filtro === f}
            className={s.segmento}
            onClick={() => elegir(f)}
          >
            {filtros[f]}
          </button>
        ))}
      </div>

      <p className="solo-lectores" aria-live="polite">
        {interactuado ? rellenar(mostrando, { n: visibles.length }) : ''}
      </p>

      {/* La lista se vuelve a montar al cambiar de filtro: todas las tarjetas aparecen juntas. */}
      <ul key={filtro} className={`${s.rejilla} ${interactuado ? s.animar : ''}`}>
        {visibles.map((sv) => (
          <li key={sv.slug}>
            <Link href={sv.href} className={s.tarjeta}>
              <span className={s.cabeza}>
                <span className={s.icono}>
                  <Icono d={sv.icono} tamano={24} grosor={1.8} />
                </span>
                {sv.h24 && <span className={s.insignia}>{etiqueta24h}</span>}
              </span>
              <Titulo className={s.nombre}>{sv.nombre}</Titulo>
              <span className={s.resumen}>{sv.resumen}</span>
              <span className={s.mas}>
                {verServicio} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
