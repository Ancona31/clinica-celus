import Link from 'next/link';
import { HISTORIAS, ICONOS } from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceWhatsApp, rellenar, ruta } from '@/lib/i18n';
import { Foto } from '@/components/Foto';
import { Icono } from '@/components/Icono';
import { Migas } from '@/components/Migas';
import p from './Pagina.module.css';
import s from './Historias.module.css';

export function Historias({ lang }: { lang: Lang }) {
  const t = diccionario(lang);
  const th = t.paginaHistorias;

  return (
    <div className={`contenedor ${p.pagina}`}>
      <Migas
        aria={t.migas.aria}
        migas={[{ texto: t.nav.inicio, href: ruta(lang, '/') }, { texto: t.nav.historias }]}
      />
      <header className={`${p.cabecera} entrada`}>
        <p className="eyebrow">{th.eyebrow}</p>
        <h1 className={p.titulo}>{th.titulo}</h1>
        <p className={p.intro}>{th.intro}</p>
      </header>

      {HISTORIAS.length > 0 ? (
        <ul className={s.lista}>
          {HISTORIAS.map((h) => {
            const texto = t.historias[h.id];
            if (!texto) return null;
            const servicio = t.servicios[h.servicio].nombre;
            return (
              <li key={h.id}>
                <article className={s.historia} aria-labelledby={`historia-${h.id}`}>
                  {h.foto && (
                    <div className={s.foto}>
                      <Foto
                        src={h.foto}
                        ancho={h.ancho}
                        alto={h.alto}
                        alt={texto.fotoAlt ?? ''}
                        pendiente={texto.fotoAlt ?? ''}
                      />
                    </div>
                  )}
                  <div className={s.texto}>
                    <Link href={ruta(lang, `/servicios/${h.servicio}`)} className={s.servicio}>
                      {rellenar(th.atendidoEn, { servicio })}
                    </Link>
                    <h2 id={`historia-${h.id}`} className={s.titulo}>
                      {texto.titulo}
                    </h2>
                    {texto.relato.map((parrafo, i) => (
                      <p key={i} className={s.relato}>
                        {parrafo}
                      </p>
                    ))}
                    {texto.cita && (
                      <blockquote className={s.cita}>
                        <p>“{texto.cita}”</p>
                      </blockquote>
                    )}
                    <p className={s.paciente}>{texto.paciente}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <section className={`${p.panel} ${s.vacio}`} aria-labelledby="historias-vacio">
          <h2 id="historias-vacio" className={p.subtitulo}>
            {th.vacio.titulo}
          </h2>
          <p className={s.ayuda}>{th.vacio.texto}</p>
        </section>
      )}

      <section className={`${p.panel} ${s.compartir}`} aria-labelledby="compartir-historia">
        <h2 id="compartir-historia" className={p.subtitulo}>
          {th.compartir.titulo}
        </h2>
        <p className={s.ayuda}>{th.compartir.texto}</p>
        <a className={`boton boton-primario ${s.boton}`} href={enlaceWhatsApp(th.compartir.whatsapp)}>
          <Icono d={ICONOS.mensaje} tamano={18} />
          {th.compartir.boton}
        </a>
      </section>

      <p className={s.consentimiento}>{th.consentimiento}</p>
    </div>
  );
}
