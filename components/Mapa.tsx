import { CLINICA } from '@/content/datos';

/** Mapa de Google embebido; carga solo al acercarse a la vista. */
export function Mapa({ titulo, className }: { titulo: string; className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={CLINICA.mapaEmbed}
        title={titulo}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ display: 'block', width: '100%', height: '100%', border: 0 }}
      />
    </div>
  );
}
