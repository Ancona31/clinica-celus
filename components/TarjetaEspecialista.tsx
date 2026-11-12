import { Foto } from './Foto';
import s from './TarjetaEspecialista.module.css';

type Props = {
  nombre: string;
  especialidad: string;
  horario: string;
  fotoAlt: string;
  fotoPendiente: string;
  foto?: string | null;
  sitio?: string | null;
  verPerfil: string;
  /** Nombre accesible del enlace, p. ej. 'Ver perfil de …'. */
  etiquetaPerfil: string;
  nivelTitulo?: 'h2' | 'h3';
};

export function TarjetaEspecialista({
  nombre,
  especialidad,
  horario,
  fotoAlt,
  fotoPendiente,
  foto,
  sitio,
  verPerfil,
  etiquetaPerfil,
  nivelTitulo: Titulo = 'h3',
}: Props) {
  return (
    <article className={s.tarjeta}>
      <div className={s.foto}>
        <Foto src={foto} alt={fotoAlt} pendiente={fotoPendiente} />
      </div>
      <div className={s.texto}>
        <p className={s.especialidad}>{especialidad}</p>
        <Titulo className={s.nombre}>{nombre}</Titulo>
        <p className={s.horario}>{horario}</p>
        {sitio && (
          <a href={sitio} className={s.perfil} aria-label={etiquetaPerfil}>
            {verPerfil} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
