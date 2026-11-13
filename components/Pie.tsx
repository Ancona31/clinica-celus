import Link from 'next/link';
import { CLINICA } from '@/content/datos';
import type { Diccionario, Lang } from '@/content/types';
import { enlaceTelefono, rellenar, ruta } from '@/lib/i18n';
import { asset } from '@/site.config';
import s from './Pie.module.css';

type Props = { lang: Lang; t: Diccionario; enlaceWhatsApp: string };

export function Pie({ lang, t, enlaceWhatsApp }: Props) {
  const { direccion } = CLINICA;
  return (
    <footer className={s.pie}>
      <div className={`contenedor ${s.fila}`}>
        <div className={s.marca}>
          <img
            src={asset('/brand/web/logotipo-horizontal.svg')}
            alt={`${t.sitio.nombre} · ${t.sitio.lema}`}
            width={1180}
            height={280}
            loading="lazy"
          />
          <address>
            {direccion.calle}, {direccion.colonia}
            <br />
            {direccion.ciudad}, {direccion.estado} · {t.pie.cp} {direccion.cp}
          </address>
          <p>
            {rellenar(t.pie.cofepris, { numero: CLINICA.cofepris })} {t.pie.descargo}
          </p>
        </div>

        <div className={s.columnas}>
          <div>
            <h2>{t.pie.clinica}</h2>
            <ul>
              <li><Link href={ruta(lang, '/servicios')}>{t.nav.servicios}</Link></li>
              <li><Link href={ruta(lang, '/especialistas')}>{t.nav.especialistas}</Link></li>
              <li><Link href={ruta(lang, '/historias-de-exito')}>{t.nav.historias}</Link></li>
              <li><Link href={ruta(lang, '/contacto')}>{t.nav.contacto}</Link></li>
            </ul>
          </div>
          <div>
            <h2>{t.pie.contacto}</h2>
            <ul>
              <li><a href={enlaceWhatsApp}>{t.acciones.whatsapp}</a></li>
              <li><a href={enlaceTelefono}>{CLINICA.telefono}</a></li>
              <li><Link href={ruta(lang, '/aviso-de-privacidad')}>{t.pie.avisoPrivacidad}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
