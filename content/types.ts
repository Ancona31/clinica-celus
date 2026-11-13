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
    historias: string;
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

  mapa: { titulo: string };

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
    especialistas: Eyebrow & { verTodos: string };
    galeria: { aria: string; fotos: string[] };
    ubicacion: Eyebrow & {
      horarios: { etiqueta: string; valor: string }[];
    };
  };

  servicios: Record<
    SlugServicio,
    {
      nombre: string;
      resumen: string;
      meta: Meta;
      intro: string;
      queEs: string[];
      cuandoAcudir: string[];
      /** Aviso de seguridad o de preparación, si aplica. */
      nota?: string;
      horario: string;
      whatsapp: string;
      /** Texto alternativo de la foto del servicio, si tiene. */
      fotoAlt?: string;
    }
  >;

  migas: { aria: string };

  paginaServicios: {
    meta: Meta;
    eyebrow: string;
    titulo: string;
    intro: string;
    tambien: { titulo: string; items: string[] };
  };

  paginaServicio: {
    queEs: string;
    cuandoAcudir: string;
    importante: string;
    horario: string;
    disponible24: string;
    quienTeAtiende: string;
    relacionados: string;
    ctaTitulo: string;
    ctaTexto: string;
    ctaTextoLlamar: string;
  };

  paginaEspecialistas: {
    meta: Meta;
    eyebrow: string;
    titulo: string;
    intro: string;
    verServicio: string;
    especialistas: string;
    generales: string;
  };

  paginaHistorias: {
    meta: Meta;
    eyebrow: string;
    titulo: string;
    intro: string;
    /** "Atendido en {servicio}". */
    atendidoEn: string;
    vacio: { titulo: string; texto: string };
    compartir: { titulo: string; texto: string; boton: string; whatsapp: string };
    consentimiento: string;
  };

  /** Historias de pacientes por id (ver HISTORIAS en datos.ts), solo con su autorización por escrito. */
  historias: Record<
    string,
    {
      /** Nombre como el paciente autorizó publicarlo (p. ej. "Rosa M., 54 años"). */
      paciente: string;
      titulo: string;
      relato: string[];
      /** Frase del paciente, si autorizó citarla. */
      cita?: string;
      fotoAlt?: string;
    }
  >;

  contacto: {
    meta: Meta;
    eyebrow: string;
    titulo: string;
    intro: string;
    direccion: string;
    referencia: string;
    telefono: string;
    telefonoNota: string;
    horarios: string;
    listaHorarios: { servicio: string; horario: string }[];
  };

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
