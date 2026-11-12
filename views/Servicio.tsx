import Link from 'next/link';
import {
  CLINICA,
  ESPECIALISTAS,
  FOTOS,
  ICONOS,
  servicioPorSlug,
  type SlugServicio,
} from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceTelefono, enlaceWhatsApp, rellenar, ruta } from '@/lib/i18n';
import { Foto } from '@/components/Foto';
import { Icono } from '@/components/Icono';
import { Migas } from '@/components/Migas';
import { TarjetaEspecialista } from '@/components/TarjetaEspecialista';
import p from './Pagina.module.css';
import s from './Servicio.module.css';

export function Servicio({ lang, slug }: { lang: Lang; slug: SlugServicio }) {
  const t = diccionario(lang);
  const tp = t.paginaServicio;
  const datos = servicioPorSlug(slug)!;
  const ts = t.servicios[slug];
  const especialistas = ESPECIALISTAS.filter((e) => e.servicio === slug);
  const foto = datos.foto ? FOTOS[datos.foto] : null;
  const llamarPrimero = 'llamarPrimero' in datos && datos.llamarPrimero;

  const botonWhatsApp = (
    <a
      key="wa"
      className={`boton ${llamarPrimero ? 'boton-secundario' : 'boton-primario'}`}
      href={enlaceWhatsApp(ts.whatsapp)}
    >
      <Icono d={ICONOS.mensaje} tamano={18} />
      {t.acciones.agendarWhatsapp}
    </a>
  );
  const botonLlamar = (
    <a
      key="tel"
      className={`boton ${llamarPrimero ? 'boton-primario' : 'boton-secundario'}`}
      href={enlaceTelefono}
    >
      <Icono d={ICONOS.telefono} tamano={18} />
      {rellenar(t.acciones.llamarNumero, { telefono: CLINICA.telefono })}
    </a>
  );
  const botones = llamarPrimero ? [botonLlamar, botonWhatsApp] : [botonWhatsApp, botonLlamar];

  return (
    <div className={`contenedor ${p.pagina}`}>
      <Migas
        aria={t.migas.aria}
        migas={[
          { texto: t.nav.inicio, href: ruta(lang, '/') },
          { texto: t.nav.servicios, href: ruta(lang, '/servicios') },
          { texto: ts.nombre },
        ]}
      />

      <header className={`${p.cabecera} entrada`}>
        <div className={s.marca}>
          <span className={s.icono}>
            <Icono d={ICONOS[datos.icono]} tamano={28} grosor={1.8} />
          </span>
          {datos.h24 && <span className={s.insignia}>{tp.disponible24}</span>}
        </div>
        <h1 className={p.titulo}>{ts.nombre}</h1>
        <p className={p.intro}>{ts.intro}</p>
        <div className={p.ctas}>{botones}</div>
      </header>

      {foto && (
        <div className={`${s.foto} revelar`}>
          <Foto
            src={foto.src}
            ancho={foto.ancho}
            alto={foto.alto}
            alt={ts.fotoAlt ?? ts.nombre}
            pendiente={ts.nombre}
          />
        </div>
      )}

      <div className={s.cuerpo}>
        <div className={s.principal}>
          <section aria-labelledby="que-es" className={`${p.panel} revelar`}>
            <h2 id="que-es" className={p.subtitulo}>
              {tp.queEs}
            </h2>
            {ts.queEs.map((parrafo) => (
              <p key={parrafo} className={s.parrafo}>
                {parrafo}
              </p>
            ))}
          </section>

          <section aria-labelledby="cuando-acudir" className={`${p.panel} revelar`}>
            <h2 id="cuando-acudir" className={p.subtitulo}>
              {tp.cuandoAcudir}
            </h2>
            <ul className={s.lista}>
              {ts.cuandoAcudir.map((item) => (
                <li key={item}>
                  <span className={s.check}>
                    <Icono d={ICONOS.check} tamano={16} grosor={2.4} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {ts.nota && (
            <aside className={`${s.nota} revelar`} aria-label={tp.importante}>
              <Icono d={ICONOS.alerta} tamano={22} />
              <p>
                <strong>{tp.importante}.</strong> {ts.nota}
              </p>
            </aside>
          )}
        </div>

        <aside className={s.lateral}>
          <section aria-labelledby="horario" className={p.panel}>
            <h2 id="horario" className={s.etiqueta}>
              {tp.horario}
            </h2>
            <p className={s.horario}>
              <Icono d={ICONOS.reloj} tamano={20} />
              {ts.horario}
            </p>
          </section>

          {especialistas.length > 0 && (
            <section aria-labelledby="quien" className={s.quien}>
              <h2 id="quien" className={s.etiqueta}>
                {tp.quienTeAtiende}
              </h2>
              {especialistas.map((e) => {
                const te = t.especialistas[e.id];
                return (
                  <TarjetaEspecialista
                    key={e.id}
                    nombre={te.nombre}
                    especialidad={te.especialidad}
                    horario={te.horario}
                    fotoAlt={te.foto}
                    fotoPendiente={rellenar(t.foto.pendiente, { descripcion: te.foto })}
                    sitio={e.sitio}
                    verPerfil={t.acciones.verPerfil}
                    etiquetaPerfil={rellenar(t.acciones.verPerfilDe, { nombre: te.nombre })}
                    compacta
                  />
                );
              })}
            </section>
          )}

          <section aria-labelledby="agendar" className={`${p.panel} ${s.cta}`}>
            <h2 id="agendar" className={p.subtitulo}>
              {tp.ctaTitulo}
            </h2>
            <p>{llamarPrimero ? tp.ctaTextoLlamar : tp.ctaTexto}</p>
            <div className={s.ctaBotones}>{botones}</div>
          </section>
        </aside>
      </div>

      <section aria-labelledby="relacionados" className={s.relacionadosSeccion}>
        <h2 id="relacionados" className={p.subtitulo}>
          {tp.relacionados}
        </h2>
        <ul className={s.relacionados}>
          {datos.relacionados.map((r) => {
            const rel = servicioPorSlug(r)!;
            return (
              <li key={r}>
                <Link href={ruta(lang, `/servicios/${r}`)} className={s.relacionado}>
                  <span className={s.iconoChico}>
                    <Icono d={ICONOS[rel.icono]} tamano={22} grosor={1.8} />
                  </span>
                  <span>
                    <strong>{t.servicios[rel.slug].nombre}</strong>
                    <span>{t.servicios[rel.slug].resumen}</span>
                  </span>
                  <span aria-hidden="true" className={s.flecha}>
                    ›
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
