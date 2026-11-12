/** Rellena {llaves} en un texto del diccionario. Sin dependencias, usable en el cliente. */
export function rellenar(texto: string, valores: Record<string, string | number>): string {
  return texto.replace(/\{(\w+)\}/g, (_, k: string) => String(valores[k] ?? `{${k}}`));
}
