import type { CSSProperties } from 'react';
import Link from 'next/link';
import {
  CLINICA,
  ESPECIALISTAS,
  ESPECIALISTAS_INICIO,
  FOTOS,
  ICONOS,
  SERVICIOS,
  type IdFoto,
} from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceTelefono, enlaceWhatsApp, rellenar, ruta } from '@/lib/i18n';
import { Foto } from '@/components/Foto';
import { Icono } from '@/components/Icono';
import { Mapa } from '@/components/Mapa';
import { ServiciosFiltrables } from '@/components/ServiciosFiltrables';
import { TarjetaEspecialista } from '@/components/TarjetaEspecialista';
import s from './Inicio.module.css';

// Coreografía de entrada del hero (una vez por visita):
// título = protagonista; subtítulo y botones lo siguen; la foto se asienta
// en paralelo y la tarjeta 24 h aterriza al final sobre la foto.
// Foto de cada bloque de "Por qué Celus" (null = foto pendiente).
const FOTOS_BLOQUES: (IdFoto | null)[] = ['equipo', 'rayosX', null];

const paso = (retraso: number, desde = 12): CSSProperties =>
  ({ '--retraso': `${retraso}ms`, '--desde': `${desde}px` }) as CSSProperties;

export function Inicio({ lang }: { lang: Lang }) {
  const t = diccionario(lang);
  const ti = t.inicio;
  const pendiente = (descripcion: string) => rellenar(t.foto.pendiente, { descripcion });
  const whatsapp = enlaceWhatsApp(t.whatsapp.general);

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
    <>
      {/* ── Hero ── */}
      <section className={`contenedor ${s.hero}`} aria-labelledby="titulo-inicio">
        <div className={s.heroTexto}>
          <p className={`${s.estado} ${s.aparecer}`}>
            <span className={s.pulso} aria-hidden="true" />
            {ti.estado}
          </p>
          <h1 id="titulo-inicio" className={`${s.titulo} entrada`} style={paso(0, 16)}>
            {ti.titulo} <span className={s.resaltado}>{ti.tituloResaltado}</span>
          </h1>
          <p className={`${s.subtitulo} entrada`} style={paso(80, 10)}>
            {ti.subtitulo}
          </p>
          <div className={`${s.ctas} entrada`} style={paso(140, 8)}>
            <a className="boton boton-primario" href={whatsapp}>
              {t.acciones.agendarWhatsapp} <span aria-hidden="true">→</span>
            </a>
            <a className="boton boton-secundario" href={enlaceTelefono}>
              <Icono d={ICONOS.telefono} tamano={18} />
              {rellenar(t.acciones.llamarNumero, { telefono: CLINICA.telefono })}
            </a>
          </div>
        </div>

        <div className={s.heroFoto}>
          <div className={`${s.fotoFachada} ${s.asentar}`}>
            <Foto
              src={FOTOS.fachada.src}
              ancho={FOTOS.fachada.ancho}
              alto={FOTOS.fachada.alto}
              alt={ti.fotoFachada}
              pendiente={pendiente(ti.fotoFachada)}
              prioridad
            />
          </div>
          <div className={`${s.tarjeta24} entrada`} style={paso(420, 8)}>
            <span className={s.tarjeta24Icono}>
              <Icono d={ICONOS.reloj} tamano={20} />
            </span>
            <span>
              <strong>{ti.tarjeta24h.titulo}</strong>
              <span>{ti.tarjeta24h.texto}</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Datos clave ── */}
      <section className={`contenedor ${s.datosSeccion}`} aria-label={ti.datos.aria}>
        <dl className={s.datos}>
          <div>
            <dt>{ti.datos.h24.etiqueta}</dt>
            <dd>{ti.datos.h24.valor}</dd>
          </div>
          <div>
            <dt>{ti.datos.laboratorio.etiqueta}</dt>
            <dd>+{CLINICA.pruebasLaboratorio}</dd>
          </div>
          <div>
            <dt>{ti.datos.servicios.etiqueta}</dt>
            <dd>{SERVICIOS.length}</dd>
          </div>
          <div className={s.filaCofepris}>
            <dt>{ti.datos.cofepris.etiqueta}</dt>
            <dd>{CLINICA.cofepris}</dd>
          </div>
        </dl>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="seccion seccion-blanca" aria-labelledby="titulo-servicios">
        <div className={`contenedor ${s.pila}`}>
          <div className="encabezado revelar">
            <p className="eyebrow">{ti.servicios.eyebrow}</p>
            <h2 id="titulo-servicios" className="titulo-seccion">
              {ti.servicios.titulo}
            </h2>
          </div>
          <ServiciosFiltrables
            servicios={servicios}
            filtros={ti.servicios.filtros}
            etiquetaFiltro={ti.servicios.filtroAria}
            mostrando={ti.servicios.mostrando}
            verServicio={t.acciones.verServicio}
            etiqueta24h={ti.datos.h24.valor}
          />
        </div>
      </section>

      {/* ── Por qué Celus ── */}
      <section className="seccion" aria-labelledby="titulo-porque">
        <div className={`contenedor ${s.pilaAmplia}`}>
          <div className="encabezado revelar">
            <p className="eyebrow">{ti.porque.eyebrow}</p>
            <h2 id="titulo-porque" className="titulo-seccion">
              {ti.porque.titulo}
            </h2>
          </div>
          {ti.porque.bloques.map((b, i) => {
            const foto = FOTOS_BLOQUES[i] ? FOTOS[FOTOS_BLOQUES[i]] : null;
            return (
            <div key={b.titulo} className={`${s.bloque} ${i % 2 ? s.bloqueInvertido : ''} revelar`}>
              <div className={s.bloqueFoto}>
                <Foto
                  src={foto?.src}
                  ancho={foto?.ancho}
                  alto={foto?.alto}
                  alt={b.foto}
                  pendiente={pendiente(b.foto)}
                />
              </div>
              <div className={s.bloqueTexto}>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ── Especialistas ── */}
      <section
        id="especialistas"
        className="seccion seccion-blanca"
        aria-labelledby="titulo-especialistas"
      >
        <div className={`contenedor ${s.pila}`}>
          <div className="encabezado revelar">
            <p className="eyebrow">{ti.especialistas.eyebrow}</p>
            <h2 id="titulo-especialistas" className="titulo-seccion">
              {ti.especialistas.titulo}
            </h2>
          </div>
          <ul className={s.especialistas}>
            {ESPECIALISTAS.filter((e) =>
              (ESPECIALISTAS_INICIO as readonly string[]).includes(e.id),
            ).map((e) => {
              const te = t.especialistas[e.id];
              return (
                <li key={e.id}>
                  <TarjetaEspecialista
                    nombre={te.nombre}
                    especialidad={te.especialidad}
                    horario={te.horario}
                    fotoAlt={te.foto}
                    fotoPendiente={pendiente(te.foto)}
                    sitio={e.sitio}
                    verPerfil={t.acciones.verPerfil}
                    etiquetaPerfil={rellenar(t.acciones.verPerfilDe, { nombre: te.nombre })}
                  />
                </li>
              );
            })}
          </ul>
          <Link href={ruta(lang, '/especialistas')} className={s.verTodos}>
            {ti.especialistas.verTodos} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className={`contenedor ${s.galeriaSeccion}`} aria-label={ti.galeria.aria}>
        <ul className={`${s.galeria} revelar`}>
          {ti.galeria.fotos.map((f) => (
            <li key={f}>
              <Foto alt={f} pendiente={pendiente(f)} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className={`contenedor ${s.ubicacionSeccion}`} aria-labelledby="titulo-ubicacion">
        <div className={`${s.ubicacion} revelar`}>
          <div className={s.ubicacionTexto}>
            <p className={s.eyebrowClaro}>{ti.ubicacion.eyebrow}</p>
            <h2 id="titulo-ubicacion" className={s.ubicacionTitulo}>
              {ti.ubicacion.titulo}
            </h2>
            <address>
              {CLINICA.direccion.calle}, {CLINICA.direccion.colonia}
              <br />
              {CLINICA.direccion.ciudad}, {CLINICA.direccion.estado} · {t.pie.cp} {CLINICA.direccion.cp}
              <br />
              <span className={s.referencia}>{t.contacto.referencia}</span>
            </address>
            <ul className={s.horarios}>
              {ti.ubicacion.horarios.map((h) => (
                <li key={h.etiqueta}>
                  <strong>{h.etiqueta}:</strong> {h.valor}
                </li>
              ))}
            </ul>
            <div className={s.ubicacionBotones}>
              <a className={`boton ${s.botonBlanco}`} href={CLINICA.comoLlegar}>
                <Icono d={ICONOS.ubicacion} tamano={18} />
                {t.acciones.comoLlegar}
              </a>
              <a className={`boton ${s.botonTranslucido}`} href={enlaceTelefono}>
                <Icono d={ICONOS.telefono} tamano={18} />
                {CLINICA.telefono}
              </a>
            </div>
          </div>
          <Mapa titulo={t.mapa.titulo} className={s.mapa} />
        </div>
      </section>
    </>
  );
}
