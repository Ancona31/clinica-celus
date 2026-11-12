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

  mapa: { titulo: 'Mapa de la ubicación de Clínica Celus en Umán' },

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
    fotoFachada: 'Fachada de Clínica Celus en el centro de Umán, de noche',
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
          foto: 'Equipo médico de Clínica Celus',
        },
        {
          titulo: 'Tus estudios en el mismo lugar',
          texto:
            'Laboratorio con más de 800 pruebas, ultrasonido y rayos X. Tu consulta y tus estudios, sin tener que ir a otra parte.',
          foto: 'Técnico de rayos X con una placa de radiografía digital',
        },
        {
          titulo: 'Especialistas cerca de ti',
          texto:
            'Pediatría, ginecología y obstetricia, nutrición, trauma y ortopedia, y cirugía general en la misma clínica, con cita previa.',
          foto: 'Consultorio de especialidad',
        },
      ],
    },
    especialistas: {
      eyebrow: 'Especialistas',
      titulo: 'Conoce a nuestros médicos',
      verTodos: 'Ver a todos los médicos',
    },
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
    },
  },

  servicios: {
    'medicina-general': {
      nombre: 'Medicina general',
      resumen: 'Consulta y urgencias a cualquier hora del día o de la noche.',
      meta: {
        title: 'Médico general 24 horas en Umán · Clínica Celus',
        description:
          'Consulta de medicina general y urgencias las 24 horas, los 365 días, en el centro de Umán, Yucatán. Agenda por WhatsApp o llama al 999 222 31 73.',
      },
      intro: 'Consulta médica y atención de urgencias las 24 horas, todos los días, en el centro de Umán.',
      queEs: [
        'La medicina general es tu primer punto de contacto con la salud: un médico te escucha, te revisa y te orienta sobre el tratamiento o los estudios que necesitas.',
        'Si tu caso requiere un especialista o estudios de laboratorio, rayos X o ultrasonido, te orientamos dentro de la misma clínica.',
      ],
      cuandoAcudir: [
        'Fiebre, tos, dolor de garganta o malestar general.',
        'Dolor de estómago, diarrea o vómito.',
        'Heridas, golpes o caídas que necesitan revisión.',
        'Control de enfermedades como diabetes o presión alta.',
        'Cuando no sabes a qué especialista acudir.',
      ],
      nota: 'Si la situación pone en riesgo la vida (dificultad para respirar, dolor fuerte en el pecho, pérdida del conocimiento), llama al 911 o a la clínica de inmediato.',
      horario: 'Las 24 horas, los 365 días. Sin cita.',
      whatsapp: 'Hola, quiero agendar una consulta de medicina general en Clínica Celus.',
    },
    'rayos-x': {
      nombre: 'Rayos X',
      resumen: 'Estudios radiológicos disponibles las 24 horas.',
      meta: {
        title: 'Rayos X 24 horas en Umán · Clínica Celus',
        description:
          'Estudios de rayos X a cualquier hora, en el centro de Umán, Yucatán. Atención 24 horas, los 365 días. Pregunta por WhatsApp al 999 222 31 73.',
      },
      intro: 'Estudios de rayos X a cualquier hora del día o de la noche.',
      queEs: [
        'Los rayos X son un estudio de imagen rápido que permite ver los huesos y algunos órganos. Ayudan a tu médico a revisar fracturas, lesiones y otras condiciones.',
        'El estudio dura pocos minutos y no duele.',
      ],
      cuandoAcudir: [
        'Después de una caída, un golpe o un accidente.',
        'Si sospechas una fractura o una luxación.',
        'Cuando tu médico te pide una radiografía.',
        'Dolor persistente en huesos o articulaciones.',
      ],
      nota: 'Si tienes orden médica, tráela contigo. Avísanos antes del estudio si estás o podrías estar embarazada.',
      horario: 'Las 24 horas, los 365 días.',
      whatsapp: 'Hola, quiero información para un estudio de rayos X en Clínica Celus.',
      fotoAlt: 'Técnico de rayos X con una placa de radiografía digital',
    },
    laboratorio: {
      nombre: 'Laboratorio clínico',
      resumen: 'Más de 800 pruebas para apoyar el diagnóstico de tu médico.',
      meta: {
        title: 'Laboratorio clínico en Umán · Más de 800 pruebas · Clínica Celus',
        description:
          'Laboratorio clínico con más de 800 pruebas en el centro de Umán, Yucatán: análisis de sangre, orina y más. Pregunta por WhatsApp cómo prepararte.',
      },
      intro: 'Más de 800 pruebas de laboratorio para apoyar el diagnóstico y el seguimiento de tu salud.',
      queEs: [
        'En el laboratorio clínico se analizan muestras como sangre u orina. Los resultados ayudan a tu médico a confirmar un diagnóstico, vigilar un tratamiento o revisar tu salud en general.',
        'Tenemos un catálogo de más de 800 pruebas, y en muchos estudios tus resultados están listos el mismo día.',
      ],
      cuandoAcudir: [
        'Cuando tu médico te pide estudios de laboratorio.',
        'Para chequeos de rutina, como biometría hemática, química sanguínea o examen general de orina.',
        'Para el control de enfermedades como diabetes o colesterol alto.',
      ],
      nota: 'Algunas pruebas requieren ayuno u otra preparación. Escríbenos por WhatsApp antes de venir y te decimos cómo prepararte.',
      horario: 'Horario: [PENDIENTE]',
      whatsapp: 'Hola, quiero información sobre estudios de laboratorio en Clínica Celus.',
    },
    ultrasonido: {
      nombre: 'Ultrasonido',
      resumen: 'Estudios de imagen para diagnóstico y control de embarazo.',
      meta: {
        title: 'Ultrasonido en Umán · Clínica Celus',
        description:
          'Estudios de ultrasonido para diagnóstico y control de embarazo en el centro de Umán, Yucatán. Agenda tu cita por WhatsApp al 999 222 31 73.',
      },
      intro: 'Estudios de ultrasonido para diagnóstico y para el control de tu embarazo.',
      queEs: [
        'El ultrasonido usa ondas de sonido para obtener imágenes del interior del cuerpo. No usa radiación y no duele.',
        'Sirve para revisar órganos como el hígado, la vesícula o los riñones, y para dar seguimiento al embarazo.',
      ],
      cuandoAcudir: [
        'Para el control de tu embarazo.',
        'Cuando tu médico te pide un ultrasonido.',
        'Dolor abdominal que tu médico quiere revisar.',
      ],
      nota: 'Algunos ultrasonidos requieren preparación, como ayuno o tomar agua antes del estudio. Pregúntanos por WhatsApp al agendar.',
      horario: 'Con cita · horario [PENDIENTE]',
      whatsapp: 'Hola, quiero agendar un ultrasonido en Clínica Celus.',
    },
    pediatria: {
      nombre: 'Pediatría',
      resumen: 'Atención para bebés, niñas, niños y adolescentes.',
      meta: {
        title: 'Pediatra en Umán · Clínica Celus',
        description:
          'Consulta de pediatría para bebés, niñas, niños y adolescentes en el centro de Umán, Yucatán. Agenda tu cita por WhatsApp al 999 222 31 73.',
      },
      intro: 'Atención médica para bebés, niñas, niños y adolescentes.',
      queEs: [
        'La pediatría cuida la salud desde el nacimiento hasta la adolescencia: el crecimiento, el desarrollo y las enfermedades propias de cada etapa.',
        'En la consulta, el pediatra revisa a tu hija o hijo y resuelve tus dudas sobre su cuidado.',
      ],
      cuandoAcudir: [
        'Revisiones de crecimiento y desarrollo.',
        'Fiebre, tos, diarrea o vómito.',
        'Dudas sobre alimentación, sueño o cuidados.',
        'Seguimiento de una enfermedad.',
      ],
      nota: 'Si tu bebé, tu hija o tu hijo tiene dificultad para respirar, está muy decaído o tiene fiebre que no baja, ven de inmediato: medicina general te atiende las 24 horas.',
      horario: 'Lunes a viernes, con cita previa.',
      whatsapp: 'Hola, quiero agendar una consulta de pediatría en Clínica Celus.',
    },
    'ginecologia-y-obstetricia': {
      nombre: 'Ginecología y Obstetricia',
      resumen: 'Consulta para la salud de la mujer y el control de tu embarazo.',
      meta: {
        title: 'Ginecología y obstetricia en Umán · Clínica Celus',
        description:
          'Consulta de ginecología y control prenatal en el centro de Umán, Yucatán. Agenda tu cita por WhatsApp al 999 222 31 73.',
      },
      intro: 'Consulta para la salud de la mujer en cada etapa y acompañamiento durante tu embarazo.',
      queEs: [
        'La ginecología atiende la salud del aparato reproductor femenino. La obstetricia acompaña el embarazo y la recuperación después del parto.',
        'En la consulta puedes hablar con confianza de tus síntomas y tus dudas.',
      ],
      cuandoAcudir: [
        'Revisión ginecológica de rutina.',
        'Control prenatal durante tu embarazo.',
        'Cambios en tu menstruación, dolor pélvico o flujo fuera de lo normal.',
        'Dudas sobre métodos anticonceptivos.',
      ],
      nota: 'Si estás embarazada y tienes sangrado, dolor fuerte o dejas de sentir al bebé, busca atención de inmediato.',
      horario: 'Con cita previa · horario [PENDIENTE]',
      whatsapp: 'Hola, quiero agendar una consulta de ginecología en Clínica Celus.',
    },
    nutricion: {
      nombre: 'Nutrición',
      resumen: 'Planes de alimentación a tu medida, con seguimiento.',
      meta: {
        title: 'Nutrición en Umán · Planes de alimentación · Clínica Celus',
        description:
          'Consulta de nutrición con planes de alimentación a tu medida y seguimiento, en el centro de Umán, Yucatán. Agenda por WhatsApp al 999 222 31 73.',
      },
      intro: 'Planes de alimentación hechos a tu medida, con seguimiento.',
      queEs: [
        'En la consulta de nutrición se revisan tus hábitos, tu historial y tus objetivos para diseñar un plan de alimentación que puedas mantener.',
        'Las consultas de seguimiento sirven para ajustar el plan según tu avance.',
      ],
      cuandoAcudir: [
        'Quieres mejorar tu alimentación.',
        'Tienes diabetes, presión alta o colesterol alto y necesitas orientación para comer mejor.',
        'Quieres bajar o subir de peso con acompañamiento.',
        'Embarazo, lactancia u otras etapas que requieren cuidar tu alimentación.',
      ],
      horario: 'Con cita previa · horario [PENDIENTE]',
      whatsapp: 'Hola, quiero agendar una consulta de nutrición en Clínica Celus.',
    },
    'trauma-y-ortopedia': {
      nombre: 'Trauma y Ortopedia',
      resumen: 'Lesiones, fracturas, dolor articular y de columna.',
      meta: {
        title: 'Traumatólogo y ortopedista en Umán · Columna · Clínica Celus',
        description:
          'Consulta de trauma, ortopedia y cirugía de columna en Umán, Yucatán, con el Dr. Angel M. Ancona Pérez. Lunes a viernes de 17:00 a 20:00 h, con cita.',
      },
      intro: 'Atención de lesiones, fracturas, dolor articular y de columna.',
      queEs: [
        'Trauma y ortopedia se ocupa de huesos, articulaciones, músculos, tendones y ligamentos: desde una torcedura o una fractura hasta el dolor de rodilla, hombro o columna.',
        'En la consulta, el especialista te revisa, te explica lo que encuentra y te propone opciones de tratamiento.',
      ],
      cuandoAcudir: [
        'Fracturas, esguinces o torceduras.',
        'Dolor de espalda, cuello o columna que no mejora.',
        'Dolor o rigidez en rodilla, cadera, hombro u otras articulaciones.',
        'Lesiones deportivas.',
      ],
      nota: 'Si tuviste un accidente o una caída fuerte, ven primero a urgencias: medicina general y rayos X te atienden las 24 horas.',
      horario: 'Lunes a viernes, de 17:00 a 20:00 h, con cita.',
      whatsapp: 'Hola, quiero agendar una consulta de trauma y ortopedia en Clínica Celus.',
    },
    'cirugia-general': {
      nombre: 'Cirugía general',
      resumen: 'Hernias, vesícula, apéndice y otras cirugías, con valoración previa.',
      meta: {
        title: 'Cirugía general en Umán · Hernia, vesícula y apéndice · Clínica Celus',
        description:
          'Valoración y cirugía general en Umán, Yucatán: hernias, vesícula, apéndice y más, con valoración preoperatoria. Agenda por WhatsApp al 999 222 31 73.',
      },
      intro: 'Valoración quirúrgica y cirugía general: hernias, vesícula, apéndice y más.',
      queEs: [
        'La cirugía general atiende problemas del abdomen y de la pared abdominal que pueden requerir una operación, como las hernias, las piedras en la vesícula o la apendicitis.',
        'Antes de cualquier cirugía te hacemos una valoración preoperatoria para revisar tu estado de salud y explicarte las opciones, los riesgos y la recuperación.',
      ],
      cuandoAcudir: [
        'Un bulto en la ingle, el ombligo o una cicatriz que duele o crece (posible hernia).',
        'Dolor en la parte alta derecha del abdomen después de comer (posible problema de vesícula).',
        'Dolor abdominal que empieza cerca del ombligo y se mueve hacia el lado derecho.',
        'Cuando tu médico te indica una valoración quirúrgica.',
      ],
      nota: 'Un dolor abdominal fuerte que no cede, con fiebre o vómito, es una urgencia: ven de inmediato, medicina general te atiende las 24 horas.',
      horario: 'Valoración con cita · horario [PENDIENTE]',
      whatsapp: 'Hola, quiero agendar una valoración de cirugía general en Clínica Celus.',
      fotoAlt: 'Cirujanos del equipo de Clínica Celus durante una cirugía',
    },
    electrocardiograma: {
      nombre: 'Electrocardiograma',
      resumen: 'Estudio del corazón disponible las 24 horas, sin cita.',
      meta: {
        title: 'Electrocardiograma 24 horas en Umán · Clínica Celus',
        description:
          'Electrocardiograma las 24 horas, sin cita ni preparación, en el centro de Umán, Yucatán. Llama o escribe al 999 222 31 73.',
      },
      intro: 'Electrocardiograma a cualquier hora, sin cita y sin preparación.',
      queEs: [
        'El electrocardiograma registra la actividad eléctrica de tu corazón con unos electrodos que se colocan en el pecho, los brazos y las piernas.',
        'Es rápido, no duele y no necesita preparación. Ayuda a tu médico a revisar el ritmo del corazón y otras alteraciones.',
      ],
      cuandoAcudir: [
        'Cuando tu médico te pide un electrocardiograma.',
        'Como parte de una valoración antes de una cirugía.',
        'Palpitaciones o sensación de que el corazón late de forma irregular.',
        'Revisiones de control si tienes presión alta, diabetes u otra enfermedad crónica.',
      ],
      nota: 'Si tienes dolor en el pecho, falta de aire o te desmayaste, no esperes: llama al 911 o ven de inmediato a urgencias.',
      horario: 'Las 24 horas, los 365 días. Sin cita.',
      whatsapp: 'Hola, quiero información para hacerme un electrocardiograma en Clínica Celus.',
    },
    ambulancia: {
      nombre: 'Ambulancia',
      resumen: 'Traslados de urgencia y programados.',
      meta: {
        title: 'Ambulancia 24 horas en Umán · Clínica Celus',
        description:
          'Servicio de ambulancia las 24 horas para traslados de urgencia y programados en Umán, Yucatán. Llama al 999 222 31 73.',
      },
      intro: 'Ambulancia las 24 horas para traslados de urgencia y programados.',
      queEs: [
        'Tenemos ambulancia para trasladar pacientes en caso de urgencia y para traslados programados, por ejemplo a otro hospital.',
        'Llámanos y te orientamos sobre el traslado que necesitas.',
      ],
      cuandoAcudir: [
        'Una persona necesita atención urgente y no puede trasladarse por sus propios medios.',
        'Traslados programados a otro hospital o clínica.',
        'Pacientes que necesitan viajar acostados.',
      ],
      nota: 'En una emergencia, llama por teléfono en lugar de escribir: es más rápido. Si la vida está en riesgo, también puedes llamar al 911.',
      horario: 'Las 24 horas, los 365 días.',
      whatsapp: 'Hola, quiero información sobre el servicio de ambulancia de Clínica Celus.',
    },
  },

  migas: { aria: 'Ruta de navegación' },

  paginaServicios: {
    meta: {
      title: 'Servicios médicos en Umán, Yucatán · Clínica Celus',
      description:
        'Medicina general y rayos X 24 horas, laboratorio, ultrasonido, pediatría, ginecología, nutrición, trauma y ortopedia, y ambulancia en el centro de Umán.',
    },
    eyebrow: 'Servicios',
    titulo: 'Servicios médicos en Umán',
    intro: 'Consulta, estudios y especialistas en un mismo lugar. Elige un servicio para saber cuándo acudir y agendar por WhatsApp.',
    tambien: {
      titulo: 'También te atendemos con',
      items: [
        'Medicina interna',
        'Sueroterapia las 24 horas',
        'Curación de heridas avanzadas, como pie diabético',
        'Cirugía de carnosidad (pterigión)',
      ],
    },
  },

  paginaServicio: {
    queEs: 'Qué es',
    cuandoAcudir: 'Cuándo acudir',
    importante: 'Importante',
    horario: 'Horario',
    disponible24: 'Disponible 24/7',
    quienTeAtiende: 'Quién te atiende',
    relacionados: 'Servicios relacionados',
    ctaTitulo: '¿Quieres agendar?',
    ctaTexto: 'Escríbenos por WhatsApp. El mensaje ya va escrito; solo envíalo.',
    ctaTextoLlamar: 'En una urgencia, llama por teléfono: te atendemos las 24 horas.',
  },

  paginaEspecialistas: {
    meta: {
      title: 'Especialistas médicos en Umán · Clínica Celus',
      description:
        'Conoce a los especialistas de Clínica Celus en Umán, Yucatán: trauma y ortopedia, pediatría, ginecología y obstetricia, y nutrición. Agenda con cita.',
    },
    eyebrow: 'Especialistas',
    titulo: 'Conoce a nuestros médicos',
    intro: 'Las consultas de especialidad son con cita previa. Escríbenos por WhatsApp y te damos el horario disponible.',
    verServicio: 'Ver {servicio}',
    especialistas: 'Especialistas',
    generales: 'Medicina general y urgencias',
  },

  contacto: {
    meta: {
      title: 'Contacto y ubicación · Clínica Celus, Umán, Yucatán',
      description:
        'Calle 20 × 23 y 25, Centro, Umán, Yucatán. Teléfono y WhatsApp 999 222 31 73. Urgencias, medicina general, rayos X y ambulancia las 24 horas.',
    },
    eyebrow: 'Contacto',
    titulo: 'Estamos en el centro de Umán',
    intro: 'Ven cuando lo necesites: urgencias, medicina general, rayos X y ambulancia te atienden las 24 horas.',
    direccion: 'Dirección',
    referencia: 'Frente a la Panadería Castillo del mercado, a un costado del Telcel.',
    telefono: 'Teléfono y WhatsApp',
    telefonoNota: 'Para urgencias, llama. Para agendar, escríbenos por WhatsApp.',
    horarios: 'Horarios',
    listaHorarios: [
      { servicio: 'Urgencias y medicina general', horario: '24 horas, los 365 días' },
      { servicio: 'Rayos X', horario: '24 horas, los 365 días' },
      { servicio: 'Electrocardiograma', horario: '24 horas, los 365 días' },
      { servicio: 'Ambulancia', horario: '24 horas, los 365 días' },
      { servicio: 'Laboratorio clínico', horario: '[PENDIENTE]' },
      { servicio: 'Ultrasonido', horario: 'Con cita · [PENDIENTE]' },
      { servicio: 'Trauma y Ortopedia', horario: 'Lunes a viernes, 17:00 a 20:00 h, con cita' },
      { servicio: 'Pediatría', horario: 'Lunes a viernes, con cita' },
      { servicio: 'Ginecología, Nutrición y Cirugía', horario: 'Con cita · [PENDIENTE]' },
    ],
  },

  especialistas: {
    ancona: {
      nombre: 'Dr. Angel M. Ancona Pérez',
      especialidad: 'Trauma, Ortopedia y Cirugía de Columna',
      horario: 'Lunes a viernes · 17:00 a 20:00 h · con cita',
      foto: 'Dr. Angel M. Ancona Pérez',
    },
    cruz: {
      nombre: 'Dr. Maximiliano Cruz Palacios',
      especialidad: 'Traumatología y Ortopedia · Alta especialidad en rodilla',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. Maximiliano Cruz Palacios',
    },
    'roman-herrera': {
      nombre: 'Dr. Juan Josué Román Herrera',
      especialidad: 'Ginecología y Obstetricia · Colposcopia',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. Juan Josué Román Herrera',
    },
    osorio: {
      nombre: 'Dr. Iván de Jesús Osorio Ruiz',
      especialidad: 'Pediatría y Neonatología',
      horario: 'Lunes a viernes · con cita',
      foto: 'Dr. Iván de Jesús Osorio Ruiz',
    },
    'pedro-campos': {
      nombre: 'Dr. Pedro A. Pedro Campos',
      especialidad: 'Médico imagenólogo · Ultrasonido',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. Pedro A. Pedro Campos',
    },
    zurita: {
      nombre: 'Nut. Humberto Zurita',
      especialidad: 'Nutrición y entrenamiento deportivo',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Nut. Humberto Zurita',
    },
    coronado: {
      nombre: 'Dr. César Coronado',
      especialidad: 'Médico cirujano · Dirección general',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. César Coronado',
    },
    manzano: {
      nombre: 'Dr. Eduardo Manzano',
      especialidad: 'Cirugía',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. Eduardo Manzano',
    },
    martinez: {
      nombre: 'Dr. Luis A. Martínez',
      especialidad: 'Valoración preoperatoria y preanestésica',
      horario: 'Con cita · [PENDIENTE]',
      foto: 'Dr. Luis A. Martínez',
    },
    rodriguez: {
      nombre: 'Dr. Humberto Rodríguez',
      especialidad: 'Medicina general',
      horario: 'Turno nocturno',
      foto: 'Dr. Humberto Rodríguez',
    },
    'hernandez-guzman': {
      nombre: 'Dr. José Eduardo Hernández Guzmán',
      especialidad: 'Medicina general',
      horario: 'Horario [PENDIENTE]',
      foto: 'Dr. José Eduardo Hernández Guzmán',
    },
    zavala: {
      nombre: 'Dr. Adrián Zavala',
      especialidad: 'Medicina general',
      horario: 'Horario [PENDIENTE]',
      foto: 'Dr. Adrián Zavala',
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
