// Datos de "peor caso" para probar el diseño (nombres largos, traducciones
// más largas, horarios partidos). Solo se usan al compilar en local con
// DATOS_PRUEBA=peor; nunca en producción.
import type { Diccionario } from './types';

type Parcial<T> = { [K in keyof T]?: T[K] extends object ? Parcial<T[K]> : T[K] };

export const peor: Parcial<Diccionario> = {
  nav: {
    inicio: 'Káajbal',
    servicios: "Meyajo'ob ts'aak yaj",
    especialistas: "J-ts'aak yajo'ob",
    contacto: "Náats'al ti'ob",
    menu: "Ba'alo'ob",
    otroIdioma: 'Español',
  },
  acciones: {
    agendar: "Ts'íibt a k'iin",
    whatsapp: 'WhatsApp',
    llamar: "T'aan ti'ob",
    comoLlegar: "Bix u k'uchul te'elo'",
    verServicio: "Il u meyajil",
  },
  inicio: {
    servicios: {
      filtros: {
        todos: "Tuláakal",
        urgencias: "Séeb ts'aak yaj",
        especialidades: "J-ts'aak yajo'ob",
        estudios: "Xak'alo'ob",
      },
    },
  },
  paginaServicio: { disponible24: "Je'el u páajtal 24 ooráas, tuláakal k'iin" },
  servicios: {
    'ginecologia-y-obstetricia': {
      nombre: "Ts'aak yaj ti' ko'olel yéetel ti' u síijil paalal",
      resumen:
        "U ts'aak u yóol ko'olel ich tuláakal u kuxtal, yéetel u yilik bix yaan le ko'olel ken yanak u paal ich u nak'.",
    },
    pediatria: { nombre: 'Pediatría', resumen: 'Bebés.' },
    'trauma-y-ortopedia': {
      horario: 'Lunes, miércoles y viernes · 09:00 a 13:00 h y 16:00 a 19:00 h · sábados 09:00 a 12:00 h · con cita',
    },
  },
  especialistas: {
    ancona: {
      nombre: 'Dra. María Guadalupe Hernández Villanueva de la Cruz',
      especialidad: 'Ginecología, Obstetricia y Medicina Materno-Fetal',
      horario: 'Lunes, miércoles y viernes · 09:00 a 13:00 h y 16:00 a 19:00 h · con cita',
    },
    osorio: { nombre: 'Dr. Jo', especialidad: 'Pediatría', horario: 'Sáb.' },
  },
};
