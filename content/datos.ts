// Datos fijos de la clínica que no se traducen: contacto, ubicación,
// identificadores de servicios y especialistas. Los textos visibles van en
// los diccionarios (es.ts, myn.ts).

export const CLINICA = {
  nombre: 'Clínica Celus',
  telefono: '999 222 31 73',
  telefonoE164: '+529992223173',
  whatsapp: '529992223173',
  direccion: {
    calle: 'Calle 20 × 23 y 25',
    colonia: 'Centro',
    ciudad: 'Umán',
    estado: 'Yucatán',
    cp: '97390',
  },
  geo: { lat: 20.87988952572975, lng: -89.7481702443132 },
  comoLlegar: 'https://maps.app.goo.gl/iFPgfT1iG4HoviLz9',
  mapaEmbed:
    'https://maps.google.com/maps?q=20.87988952572975,-89.7481702443132&z=16&hl=es&output=embed',
  cofepris: '2531012020A00260',
  pruebasLaboratorio: 800,
} as const;

export type Categoria = 'urgencias' | 'especialidades' | 'estudios';
export type NombreIcono = keyof typeof ICONOS;

export const SERVICIOS = [
  { slug: 'medicina-general', icono: 'estetoscopio', categoria: 'urgencias', h24: true },
  { slug: 'rayos-x', icono: 'rayosX', categoria: 'estudios', h24: true },
  { slug: 'laboratorio', icono: 'matraz', categoria: 'estudios', h24: false },
  { slug: 'ultrasonido', icono: 'onda', categoria: 'estudios', h24: false },
  { slug: 'pediatria', icono: 'nino', categoria: 'especialidades', h24: false },
  { slug: 'ginecologia-y-obstetricia', icono: 'mujer', categoria: 'especialidades', h24: false },
  { slug: 'nutricion', icono: 'manzana', categoria: 'especialidades', h24: false },
  { slug: 'trauma-y-ortopedia', icono: 'hueso', categoria: 'especialidades', h24: false },
  { slug: 'ambulancia', icono: 'ambulancia', categoria: 'urgencias', h24: true },
] as const satisfies readonly { slug: string; icono: NombreIcono; categoria: Categoria; h24: boolean }[];

export type SlugServicio = (typeof SERVICIOS)[number]['slug'];

// sitio: enlace externo al perfil del médico, si lo tiene.
export const ESPECIALISTAS = [
  { id: 'ancona', servicio: 'trauma-y-ortopedia', sitio: 'https://www.dranconacolumna.com' },
  { id: 'pediatria', servicio: 'pediatria', sitio: null },
  { id: 'ginecologia', servicio: 'ginecologia-y-obstetricia', sitio: null },
  { id: 'nutricion', servicio: 'nutricion', sitio: null },
] as const satisfies readonly { id: string; servicio: SlugServicio; sitio: string | null }[];

export type IdEspecialista = (typeof ESPECIALISTAS)[number]['id'];

// Iconos de trazo en una cuadrícula de 24 × 24.
export const ICONOS = {
  estetoscopio: 'M6 3v6a4 4 0 0 0 8 0V3M10 13v3a5 5 0 0 0 10 0v-2M20 12a2 2 0 1 0 0-.01',
  rayosX: 'M4 4h16v16H4zM12 7v10M8 9h8M8 12h8M8 15h8',
  matraz: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9',
  onda: 'M3 12h3l2-6 4 12 2-6h7',
  nino: 'M12 4a3 3 0 1 0 0 .01M8 21v-6l-3-3 3-4h8l3 4-3 3v6',
  mujer: 'M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10M12 13v8M9 18h6',
  manzana: 'M12 7c-2-2-6-1.5-6 3 0 4 3 10 6 10s6-6 6-10c0-4.5-4-5-6-3zM12 7c0-2 1-3.5 3-4',
  hueso: 'M7 7a2.5 2.5 0 1 1 3-3l7 7a2.5 2.5 0 1 1 3 3 2.5 2.5 0 1 1-3 3l-7-7a2.5 2.5 0 1 1-3-3z',
  ambulancia: 'M3 16V8h11v8M14 11h4l3 3v2M7 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01M8 10v4M6 12h4',
  mensaje: 'M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z',
  telefono:
    'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z',
  ubicacion: 'M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5',
  reloj: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v5l3 2',
  menu: 'M4 7h16M4 12h16M4 17h16',
} as const;
