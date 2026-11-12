import Link from 'next/link';
import { ESPECIALISTAS } from '@/content/datos';
import type { Lang } from '@/content/types';
import { diccionario, enlaceWhatsApp, rellenar, ruta } from '@/lib/i18n';
import { Migas } from '@/components/Migas';
import { TarjetaEspecialista } from '@/components/TarjetaEspecialista';
import p from './Pagina.module.css';
import s from './Especialistas.module.css';

export function Especialistas({ lang }: { lang: Lang }) {
  const t = diccionario(lang);
  const tp = t.paginaEspecialistas;

  return (
    <div className={`contenedor ${p.pagina}`}>
      <Migas
        aria={t.migas.aria}
        migas={[{ texto: t.nav.inicio, href: ruta(lang, '/') }, { texto: t.nav.especialistas }]}
      />
      <header className={`${p.cabecera} entrada`}>
        <p className="eyebrow">{tp.eyebrow}</p>
        <h1 className={p.titulo}>{tp.titulo}</h1>
        <p className={p.intro}>{tp.intro}</p>
        <div className={p.ctas}>
          <a className="boton boton-primario" href={enlaceWhatsApp(t.whatsapp.general)}>
            {t.acciones.agendarWhatsapp}
          </a>
        </div>
      </header>
      <ul className={s.lista}>
        {ESPECIALISTAS.map((e) => {
          const te = t.especialistas[e.id];
          const servicio = t.servicios[e.servicio].nombre;
          return (
            <li key={e.id}>
              <TarjetaEspecialista
                nombre={te.nombre}
                especialidad={te.especialidad}
                horario={te.horario}
                fotoAlt={te.foto}
                fotoPendiente={rellenar(t.foto.pendiente, { descripcion: te.foto })}
                sitio={e.sitio}
                verPerfil={t.acciones.verPerfil}
                etiquetaPerfil={rellenar(t.acciones.verPerfilDe, { nombre: te.nombre })}
                nivelTitulo="h2"
              >
                <Link href={ruta(lang, `/servicios/${e.servicio}`)} className={s.servicio}>
                  {rellenar(tp.verServicio, { servicio })} <span aria-hidden="true">→</span>
                </Link>
              </TarjetaEspecialista>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
