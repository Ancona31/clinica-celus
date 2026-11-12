import { CLINICA, ICONOS } from '@/content/datos';
import type { Diccionario } from '@/content/types';
import { enlaceTelefono } from '@/lib/i18n';
import { Icono } from './Icono';
import s from './BarraContacto.module.css';

type Props = { t: Diccionario['acciones']; enlaceWhatsApp: string };

/** Barra flotante inferior: WhatsApp, Llamar, Cómo llegar. Siempre a la mano. */
export function BarraContacto({ t, enlaceWhatsApp }: Props) {
  return (
    <nav aria-label={t.barraContacto} className={s.barra}>
      <a href={enlaceWhatsApp} className={`${s.boton} ${s.primario}`}>
        <Icono d={ICONOS.mensaje} />
        {t.whatsapp}
      </a>
      <a href={enlaceTelefono} className={s.boton}>
        <Icono d={ICONOS.telefono} />
        {t.llamar}
      </a>
      <a href={CLINICA.comoLlegar} className={s.boton}>
        <Icono d={ICONOS.ubicacion} />
        {t.comoLlegar}
      </a>
    </nav>
  );
}
