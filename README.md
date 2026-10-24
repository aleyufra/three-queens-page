# Three Queens Calzados

Landing page con catálogo de **Three Queens Calzados**, emprendimiento de calzado de Palpalá, Jujuy. Hecha con [Astro](https://astro.build) y Tailwind CSS.

## Requisitos

- Node.js 22.23.4 o superior
- pnpm

## Cómo correrlo (PowerShell)

```powershell
pnpm install      # solo la primera vez
pnpm dev          # abre http://localhost:4321
```

## Comandos

| Comando        | Qué hace                                       |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Servidor local con recarga automática          |
| `pnpm build`   | Genera el sitio listo para publicar en `dist/` |
| `pnpm preview` | Muestra el build tal como va a quedar          |
| `pnpm check`   | Revisa errores de tipos                        |
| `pnpm format`  | Ordena y formatea el código                    |

## Dónde cambiar las cosas

- **Productos y precios**: `src/data/products.ts`
- **Teléfono, horarios, zona y redes sociales**: `src/data/site.ts`
- **Beneficios, pasos de compra y preguntas frecuentes**: `src/data/contenido.ts`
- **Colores y estilos de marca**: `src/styles/global.css`

### Agregar fotos a los productos

1. Guardá la foto en `src/assets/productos/` (por ejemplo `bota-negra.jpg`).
2. En `src/data/products.ts` importala arriba: `import botaNegra from '../assets/productos/bota-negra.jpg';`
3. En el producto agregá `imagen: botaNegra,`

Astro la achica y la convierte a un formato liviano automáticamente.

## Publicación

Pensado para [Vercel](https://vercel.com): importás el repositorio y Vercel detecta Astro solo. La URL prevista es https://threequeenscalzados.vercel.app (si cambia, actualizala en `astro.config.mjs`).
