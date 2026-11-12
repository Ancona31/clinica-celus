#!/usr/bin/env python3
"""Genera versiones ligeras de los logos para la web.

Los SVG originales de public/brand/ no se tocan. Este script redondea las
coordenadas a enteros (a tamaño web la diferencia es menor a un píxel),
compacta espacios y escribe el resultado en public/brand/web/.

Uso: python3 scripts/optimizar-svg.py
"""
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN = RAIZ / 'public' / 'brand'
DESTINO = ORIGEN / 'web'

# original -> nombre web
LOGOS = {
    '01_isotipo_color.svg': 'isotipo-color.svg',
    '02_isotipo_blanco.svg': 'isotipo-blanco.svg',
    '06_logotipo_horizontal_web.svg': 'logotipo-horizontal.svg',
    '05_logotipo_vertical_blanco.svg': 'logotipo-vertical-blanco.svg',
}


def optimizar(svg: str) -> str:
    svg = re.sub(r'<\?xml[^>]*\?>\s*', '', svg)
    svg = re.sub(r'<title>.*?</title>\s*', '', svg)  # el alt lo pone el <img>
    # Solo los trazos (d="..."); los transform conservan sus decimales.
    svg = re.sub(
        r'\sd="([^"]*)"',
        lambda d: ' d="' + re.sub(r'-?\d+\.\d+', lambda m: str(round(float(m.group()))), d.group(1)) + '"',
        svg,
    )
    svg = re.sub(r'\s+', ' ', svg)
    svg = re.sub(r'>\s+<', '><', svg)
    return svg.strip() + '\n'


def main() -> None:
    DESTINO.mkdir(exist_ok=True)
    for original, web in LOGOS.items():
        texto = (ORIGEN / original).read_text(encoding='utf-8')
        salida = optimizar(texto)
        (DESTINO / web).write_text(salida, encoding='utf-8')
        print(f'{web}: {len(texto) // 1024} KB -> {len(salida) // 1024} KB')


if __name__ == '__main__':
    main()
