import type { Lang } from '@/content/types';
import { diccionario, enlaceWhatsApp } from '@/lib/i18n';
import { MAYA_PUBLICADO } from '@/site.config';
import { BarraContacto } from './BarraContacto';
import { Encabezado } from './Encabezado';
import { Pie } from './Pie';

// En desarrollo (npm run dev) el selector de maya siempre se ve, para revisarlo.
const mostrarIdioma = MAYA_PUBLICADO || process.env.NODE_ENV === 'development';

/** Estructura común de todas las páginas: barra superior, contenido, pie y barra flotante. */
export function Marco({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = diccionario(lang);
  const whatsapp = enlaceWhatsApp(t.whatsapp.general);

  return (
    <>
      <a href="#contenido" className="saltar">
        {t.nav.saltar}
      </a>
      <Encabezado
        lang={lang}
        t={t.nav}
        agendar={t.acciones.agendar}
        enlaceAgendar={whatsapp}
        mostrarIdioma={mostrarIdioma}
      />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <Pie lang={lang} t={t} enlaceWhatsApp={whatsapp} />
      <BarraContacto t={t.acciones} enlaceWhatsApp={whatsapp} />
    </>
  );
}
