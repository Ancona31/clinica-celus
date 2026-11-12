import Link from 'next/link';
import { Marco } from '@/components/Marco';
import { es } from '@/content/es';

export default function NoEncontrado() {
  const t = es.noEncontrado;
  return (
    <Marco lang="es">
      <section className="contenedor seccion">
        <div className="encabezado">
          <p className="eyebrow">404</p>
          <h1 className="titulo-seccion">{t.titulo}</h1>
          <p>{t.texto}</p>
          <p>
            <Link href="/" className="boton boton-primario">
              {t.volver}
            </Link>
          </p>
        </div>
      </section>
    </Marco>
  );
}
