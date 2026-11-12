import { ICONOS, SERVICIOS } from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceWhatsApp, ruta } from '@/lib/i18n';
import { Migas } from '@/components/Migas';
import { ServiciosFiltrables } from '@/components/ServiciosFiltrables';
import p from './Pagina.module.css';
import s from './Servicios.module.css';

export function Servicios({ lang }: { lang: Lang }) {
  const t = diccionario(lang);
  const tp = t.paginaServicios;

  const servicios = SERVICIOS.map((sv) => ({
    slug: sv.slug,
    href: ruta(lang, `/servicios/${sv.slug}`),
    nombre: t.servicios[sv.slug].nombre,
    resumen: t.servicios[sv.slug].resumen,
    icono: ICONOS[sv.icono],
    categoria: sv.categoria,
    h24: sv.h24,
  }));

  return (
    <div className={`contenedor ${p.pagina}`}>
      <Migas
        aria={t.migas.aria}
        migas={[{ texto: t.nav.inicio, href: ruta(lang, '/') }, { texto: t.nav.servicios }]}
      />
      <header className={`${p.cabecera} entrada`}>
        <p className="eyebrow">{tp.eyebrow}</p>
        <h1 className={p.titulo}>{tp.titulo}</h1>
        <p className={p.intro}>{tp.intro}</p>
      </header>
      <div className={p.panel}>
        <ServiciosFiltrables
          servicios={servicios}
          filtros={t.inicio.servicios.filtros}
          etiquetaFiltro={t.inicio.servicios.filtroAria}
          mostrando={t.inicio.servicios.mostrando}
          verServicio={t.acciones.verServicio}
          etiqueta24h={t.inicio.datos.h24.valor}
          nivelTitulo="h2"
        />
      </div>
      <section aria-labelledby="tambien" className={`${p.panel} ${s.tambien}`}>
        <h2 id="tambien" className={p.subtitulo}>
          {tp.tambien.titulo}
        </h2>
        <ul>
          {tp.tambien.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="boton boton-secundario" href={enlaceWhatsApp(t.whatsapp.general)}>
          {t.acciones.agendarWhatsapp}
        </a>
      </section>
    </div>
  );
}
