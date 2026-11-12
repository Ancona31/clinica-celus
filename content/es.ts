import type { Diccionario } from './types';

export const es: Diccionario = {
  lang: 'es',
  codigo: 'es-MX',

  sitio: { nombre: 'Clínica Celus', lema: 'Sociedad Médica' },

  nav: {
    saltar: 'Saltar al contenido',
    principal: 'Principal',
    logoAlt: 'Clínica Celus · Sociedad Médica, ir al inicio',
    inicio: 'Inicio',
    servicios: 'Servicios',
    especialistas: 'Especialistas',
    contacto: 'Contacto',
    menu: 'Menú',
    idioma: 'Idioma',
    otroIdioma: 'Maaya',
  },

  acciones: {
    agendar: 'Agendar',
    agendarWhatsapp: 'Agendar por WhatsApp',
    whatsapp: 'WhatsApp',
    llamar: 'Llamar',
    llamarNumero: 'Llamar {telefono}',
    comoLlegar: 'Cómo llegar',
    verServicio: 'Ver servicio',
    verPerfil: 'Ver perfil',
    verPerfilDe: 'Ver perfil de {nombre}',
    barraContacto: 'Contacto rápido',
  },

  whatsapp: { general: 'Hola, quiero agendar una cita en Clínica Celus.' },

  foto: { pendiente: 'Foto pendiente: {descripcion}' },

  inicio: {
    meta: {
      title: 'Clínica Celus · Urgencias 24 horas, laboratorio y rayos X en Umán, Yucatán',
      description:
        'Clínica en el centro de Umán con consulta general y urgencias 24 horas, rayos X, laboratorio, ultrasonido y especialistas. Agenda por WhatsApp al 999 222 31 73.',
    },
    estado: 'Abierto ahora · Urgencias 24/7',
    titulo: '¿Qué servicio',
    tituloResaltado: 'necesitas hoy?',
    subtitulo:
      'Consulta médica, especialistas, rayos X y laboratorio en un solo lugar, en el centro de Umán. Te atendemos a cualquier hora.',
    fotoFachada: 'Fachada de Clínica Celus',
    tarjeta24h: {
      titulo: '24 horas, 365 días',
      texto: 'Consulta general, rayos X y ambulancia',
    },
    datos: {
      aria: 'Datos clave',
      h24: { valor: '24/7', etiqueta: 'Consulta general y urgencias' },
      laboratorio: { etiqueta: 'Pruebas de laboratorio' },
      servicios: { etiqueta: 'Servicios en un mismo lugar' },
      cofepris: { etiqueta: 'Aviso COFEPRIS' },
    },
    servicios: {
      eyebrow: 'Servicios',
      titulo: 'Todo lo que necesitas, sin ir de un lado a otro.',
      filtroAria: 'Filtrar servicios',
      filtros: {
        todos: 'Todos',
        urgencias: 'Urgencias',
        especialidades: 'Especialidades',
        estudios: 'Estudios',
      },
      mostrando: 'Mostrando {n} servicios',
    },
    porque: {
      eyebrow: 'Por qué Celus',
      titulo: 'Atención humana, a cualquier hora, cerca de ti.',
      bloques: [
        {
          titulo: 'Abiertos día y noche',
          texto:
            'Consulta general, rayos X y ambulancia las 24 horas. Si es de madrugada o en fin de semana, aquí hay un médico para atenderte.',
          foto: 'Consultorio de Clínica Celus',
        },
        {
          titulo: 'Tus estudios en el mismo lugar',
          texto:
            'Laboratorio con más de 800 pruebas, ultrasonido y rayos X. Tu consulta y tus estudios, sin tener que ir a otra parte.',
          foto: 'Área de rayos X o laboratorio',
        },
        {
          titulo: 'Especialistas cerca de ti',
          texto:
            'Pediatría, ginecología y obstetricia, nutrición, y trauma y ortopedia en la misma clínica, con cita previa.',
          foto: 'Equipo médico de Clínica Celus',
        },
      ],
    },
    especialistas: { eyebrow: 'Especialistas', titulo: 'Conoce a nuestros médicos' },
    galeria: {
      aria: 'Galería de la clínica',
      fotos: ['Recepción', 'Sala de espera', 'Ultrasonido', 'Ambulancia'],
    },
    ubicacion: {
      eyebrow: 'Visítanos',
      titulo: 'En el centro de Umán',
      horarios: [
        { etiqueta: 'Urgencias y consulta general', valor: '24 horas' },
        { etiqueta: 'Especialidades', valor: 'con cita previa' },
      ],
      mapaTitulo: 'Mapa de la ubicación de Clínica Celus en Umán',
    },
  },

  servicios: {
    'medicina-general': {
      nombre: 'Medicina general',
      resumen: 'Consulta y urgencias a cualquier hora del día o de la noche.',
    },
    'rayos-x': {
      nombre: 'Rayos X',
      resumen: 'Estudios radiológicos disponibles las 24 horas.',
    },
    laboratorio: {
      nombre: 'Laboratorio clínico',
      resumen: 'Más de 800 pruebas para apoyar el diagnóstico de tu médico.',
    },
    ultrasonido: {
      nombre: 'Ultrasonido',
      resumen: 'Estudios de imagen para diagnóstico y control de embarazo.',
    },
    pediatria: {
      nombre: 'Pediatría',
      resumen: 'Atención para bebés, niñas, niños y adolescentes.',
    },
    'ginecologia-y-obstetricia': {
      nombre: 'Ginecología y Obstetricia',
      resumen: 'Consulta para la salud de la mujer y el control de tu embarazo.',
    },
    nutricion: {
      nombre: 'Nutrición',
      resumen: 'Planes de alimentación a tu medida, con seguimiento.',
    },
    'trauma-y-ortopedia': {
      nombre: 'Trauma y Ortopedia',
      resumen: 'Lesiones, fracturas, dolor articular y de columna.',
    },
    ambulancia: {
      nombre: 'Ambulancia',
      resumen: 'Traslados de urgencia y programados.',
    },
  },

  especialistas: {
    ancona: {
      nombre: 'Dr. Angel M. Ancona Pérez',
      especialidad: 'Trauma, Ortopedia y Cirugía de Columna',
      horario: 'Lunes a viernes · 17:00 a 20:00 h · con cita',
      foto: 'Dr. Angel M. Ancona Pérez',
    },
    pediatria: {
      nombre: '[PENDIENTE]',
      especialidad: 'Pediatría',
      horario: '[PENDIENTE]',
      foto: 'Pediatra de Clínica Celus',
    },
    ginecologia: {
      nombre: '[PENDIENTE]',
      especialidad: 'Ginecología y Obstetricia',
      horario: '[PENDIENTE]',
      foto: 'Especialista en ginecología de Clínica Celus',
    },
    nutricion: {
      nombre: '[PENDIENTE]',
      especialidad: 'Nutrición',
      horario: '[PENDIENTE]',
      foto: 'Especialista en nutrición de Clínica Celus',
    },
  },

  noEncontrado: {
    titulo: 'No encontramos esta página',
    texto: 'Es posible que el enlace haya cambiado. Desde el inicio puedes ver todos nuestros servicios.',
    volver: 'Ir al inicio',
  },

  pie: {
    cp: 'C.P.',
    clinica: 'Clínica',
    contacto: 'Contacto',
    avisoPrivacidad: 'Aviso de privacidad',
    cofepris: 'Aviso de funcionamiento COFEPRIS {numero}.',
    descargo:
      'La información de este sitio es orientativa y no sustituye una consulta médica.',
  },
};
