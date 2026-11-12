type Props = { d: string; tamano?: number; grosor?: number; className?: string };

/** Icono de trazo decorativo (24 × 24). Siempre aria-hidden: el texto vecino lo nombra. */
export function Icono({ d, tamano = 20, grosor = 2, className }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}
