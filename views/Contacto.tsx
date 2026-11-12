import { CLINICA, ICONOS } from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceTelefono, enlaceWhatsApp, rellenar, ruta } from '@/lib/i18n';
import { Icono } from '@/components/Icono';
import { Mapa } from '@/components/Mapa';
import { Migas } from '@/components/Migas';
import p from './Pagina.module.css';
import s from './Contacto.module.css';

export function Contacto({ lang }: { lang: Lang }) {
  const t = diccionario(lang);
  const tc = t.contacto;
  const { direccion } = CLINICA;

  return (
    <div className={`contenedor ${p.pagina}`}>
      <Migas
        aria={t.migas.aria}
        migas={[{ texto: t.nav.inicio, href: ruta(lang, '/') }, { texto: t.nav.contacto }]}
      />
      <header className={`${p.cabecera} entrada`}>
        <p className="eyebrow">{tc.eyebrow}</p>
        <h1 className={p.titulo}>{tc.titulo}</h1>
        <p className={p.intro}>{tc.intro}</p>
      </header>

      <div className={s.rejilla}>
        <div className={s.columna}>
          <section aria-labelledby="direccion" className={p.panel}>
            <h2 id="direccion" className={s.etiqueta}>
              {tc.direccion}
            </h2>
            <address className={s.direccion}>
              {direccion.calle}, {direccion.colonia}
              <br />
              {direccion.ciudad}, {direccion.estado} · {t.pie.cp} {direccion.cp}
            </address>
            <a className={`boton boton-secundario ${s.botonPanel}`} href={CLINICA.comoLlegar}>
              <Icono d={ICONOS.ubicacion} tamano={18} />
              {t.acciones.comoLlegar}
            </a>
          </section>

          <section aria-labelledby="telefono" className={p.panel}>
            <h2 id="telefono" className={s.etiqueta}>
              {tc.telefono}
            </h2>
            <p className={s.numero}>{CLINICA.telefono}</p>
            <p className={s.ayuda}>{tc.telefonoNota}</p>
            <div className={s.botones}>
              <a className="boton boton-primario" href={enlaceTelefono}>
                <Icono d={ICONOS.telefono} tamano={18} />
                {rellenar(t.acciones.llamarNumero, { telefono: CLINICA.telefono })}
              </a>
              <a className="boton boton-secundario" href={enlaceWhatsApp(t.whatsapp.general)}>
                <Icono d={ICONOS.mensaje} tamano={18} />
                {t.acciones.agendarWhatsapp}
              </a>
            </div>
          </section>

          <section aria-labelledby="horarios" className={p.panel}>
            <h2 id="horarios" className={s.etiqueta}>
              {tc.horarios}
            </h2>
            <dl className={s.horarios}>
              {tc.listaHorarios.map((h) => (
                <div key={h.servicio}>
                  <dt>{h.servicio}</dt>
                  <dd>{h.horario}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <Mapa titulo={t.mapa.titulo} className={s.mapa} />
      </div>
    </div>
  );
}
