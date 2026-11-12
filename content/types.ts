import type { Categoria, IdEspecialista, SlugServicio } from './datos';

export type Lang = 'es' | 'myn';

type Meta = { title: string; description: string };
type Eyebrow = { eyebrow: string; titulo: string };

// Forma de cada diccionario. Si a un idioma le falta un texto, no compila.
// Los textos con {llaves} se rellenan con rellenar() de lib/i18n.ts.
export interface Diccionario {
  lang: Lang;
  /** Código BCP 47 para el atributo lang. */
  codigo: string;

  sitio: { nombre: string; lema: string };

  nav: {
    saltar: string;
    principal: string;
    logoAlt: string;
    inicio: string;
    servicios: string;
    especialistas: string;
    contacto: string;
    menu: string;
    idioma: string;
    otroIdioma: string;
  };

  acciones: {
    agendar: string;
    agendarWhatsapp: string;
    whatsapp: string;
    llamar: string;
    llamarNumero: string;
    comoLlegar: string;
    verServicio: string;
    verPerfil: string;
    verPerfilDe: string;
    barraContacto: string;
  };

  whatsapp: { general: string };

  foto: { pendiente: string };

  inicio: {
    meta: Meta;
    estado: string;
    titulo: string;
    tituloResaltado: string;
    subtitulo: string;
    fotoFachada: string;
    tarjeta24h: { titulo: string; texto: string };
    datos: {
      aria: string;
      h24: { valor: string; etiqueta: string };
      laboratorio: { etiqueta: string };
      servicios: { etiqueta: string };
      cofepris: { etiqueta: string };
    };
    servicios: Eyebrow & {
      filtroAria: string;
      filtros: Record<'todos' | Categoria, string>;
      mostrando: string;
    };
    porque: Eyebrow & { bloques: { titulo: string; texto: string; foto: string }[] };
    especialistas: Eyebrow;
    galeria: { aria: string; fotos: string[] };
    ubicacion: Eyebrow & {
      horarios: { etiqueta: string; valor: string }[];
      mapaTitulo: string;
    };
  };

  servicios: Record<SlugServicio, { nombre: string; resumen: string }>;

  especialistas: Record<
    IdEspecialista,
    { nombre: string; especialidad: string; horario: string; foto: string }
  >;

  noEncontrado: { titulo: string; texto: string; volver: string };

  pie: {
    cp: string;
    clinica: string;
    contacto: string;
    avisoPrivacidad: string;
    cofepris: string;
    descargo: string;
  };
}
