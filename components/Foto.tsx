import { asset } from '@/site.config';
import s from './Foto.module.css';

type Props = {
  /** Ruta dentro de /public, p. ej. '/images/fachada.jpg'. Sin src se muestra un espacio reservado. */
  src?: string | null;
  alt: string;
  /** Texto visible del espacio reservado (ya traducido). */
  pendiente: string;
  ancho?: number;
  alto?: number;
  prioridad?: boolean;
  marcaDeAgua?: boolean;
  className?: string;
};

export function Foto({ src, alt, pendiente, ancho, alto, prioridad, marcaDeAgua, className = '' }: Props) {
  if (src) {
    return (
      <img
        src={asset(src)}
        alt={alt}
        width={ancho}
        height={alto}
        loading={prioridad ? 'eager' : 'lazy'}
        fetchPriority={prioridad ? 'high' : undefined}
        decoding="async"
        className={`${s.foto} ${className}`}
      />
    );
  }

  return (
    <div role="img" aria-label={pendiente} className={`${s.foto} ${s.pendiente} ${className}`}>
      {marcaDeAgua && (
        <img src={asset('/brand/web/isotipo-color.svg')} alt="" width={320} height={296} className={s.marca} />
      )}
      <span aria-hidden="true">{pendiente}</span>
    </div>
  );
}
