'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import type { Diccionario, Lang } from '@/content/types';
import { ICONOS } from '@/content/datos';
import { ruta, rutaEnOtroIdioma } from '@/lib/rutas';
import { asset } from '@/site.config';
import { Icono } from './Icono';
import s from './Encabezado.module.css';

type Props = {
  lang: Lang;
  t: Diccionario['nav'];
  agendar: string;
  enlaceAgendar: string;
  mostrarIdioma: boolean;
};

export function Encabezado({ lang, t, agendar, enlaceAgendar, mostrarIdioma }: Props) {
  const pathname = usePathname();
  const otroLang: Lang = lang === 'es' ? 'myn' : 'es';
  const rutaIdioma = rutaEnOtroIdioma(pathname, otroLang);
  const actual = pathname.endsWith('/') ? pathname : pathname + '/';

  const enlaces = [
    { href: ruta(lang, '/'), texto: t.inicio, exacto: true },
    { href: ruta(lang, '/servicios'), texto: t.servicios },
    { href: ruta(lang, '/especialistas'), texto: t.especialistas },
    { href: ruta(lang, '/historias-de-exito'), texto: t.historias },
    { href: ruta(lang, '/contacto'), texto: t.contacto },
  ];

  const esActual = (href: string, exacto?: boolean) => (exacto ? actual === href : actual.startsWith(href));

  // El menú móvil vive en la capa superior; al elegir un enlace hay que cerrarlo,
  // porque la navegación de Next no recarga el encabezado.
  const cerrarMenu = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a')) e.currentTarget.hidePopover?.();
  };

  const lista = (clase: string) => (
    <ul className={clase}>
      {enlaces.map((e) => (
        <li key={e.href}>
          <Link href={e.href} aria-current={esActual(e.href, e.exacto) ? 'page' : undefined}>
            {e.texto}
          </Link>
        </li>
      ))}
    </ul>
  );

  const idioma = mostrarIdioma && (
    <Link
      href={rutaIdioma}
      hrefLang={otroLang === 'myn' ? 'yua' : 'es'}
      lang={otroLang === 'myn' ? 'yua' : 'es'}
      className={s.idioma}
      aria-label={`${t.idioma}: ${t.otroIdioma}`}
    >
      {t.otroIdioma}
    </Link>
  );

  return (
    <header className={s.barra} data-lang={lang}>
      <div className={`contenedor ${s.fila}`}>
        <Link href={ruta(lang, '/')} className={s.logo}>
          <img
            src={asset('/brand/web/logotipo-horizontal.svg')}
            alt={t.logoAlt}
            width={1180}
            height={280}
          />
        </Link>

        <nav aria-label={t.principal} className={s.navEscritorio}>
          {lista(s.enlaces)}
        </nav>

        <div className={s.acciones}>
          <span className={s.soloEscritorio}>{idioma}</span>
          <a className={`boton boton-primario ${s.agendar}`} href={enlaceAgendar}>
            <Icono d={ICONOS.mensaje} tamano={18} />
            {agendar}
          </a>
          <button type="button" popoverTarget="menu-movil" className={s.botonMenu}>
            <Icono d={ICONOS.menu} tamano={20} />
            {t.menu}
          </button>
        </div>
      </div>

      <nav id="menu-movil" popover="auto" aria-label={t.principal} className={s.menu} onClick={cerrarMenu}>
        {lista(s.enlacesMenu)}
        {idioma && <div className={s.idiomaMenu}>{idioma}</div>}
      </nav>
    </header>
  );
}
