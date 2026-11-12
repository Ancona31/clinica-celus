import Link from 'next/link';
import s from './Migas.module.css';

type Miga = { texto: string; href?: string };

/** Ruta de navegación (Inicio › Servicios › …). El último elemento es la página actual. */
export function Migas({ aria, migas }: { aria: string; migas: Miga[] }) {
  return (
    <nav aria-label={aria} className={s.migas}>
      <ol>
        {migas.map((m, i) => (
          <li key={i}>
            {m.href ? <Link href={m.href}>{m.texto}</Link> : <span aria-current="page">{m.texto}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
