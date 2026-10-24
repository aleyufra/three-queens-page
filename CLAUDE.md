# Three Queens Calzados: landing / catálogo

Landing estática para un emprendimiento de calzado de Palpalá (Jujuy, Argentina). Idioma del sitio: español rioplatense (`es-AR`, voseo). Se publica en Vercel: https://threequeenscalzados.vercel.app

Ver también @AGENTS.md (instrucciones de Astro y del servidor de desarrollo).

## Entorno

- Windows 11 + PowerShell. Todos los comandos tienen que ser de PowerShell (nada de bash).
- Gestor de paquetes: **pnpm** únicamente (no npm ni yarn).

## Stack

- Astro 7, salida `static` (sin SSR ni adapter: Vercel detecta Astro solo)
- TypeScript strict (`astro/tsconfigs/strict`). Se queda en TS 6 porque `@astrojs/check` todavía no soporta TS 7
- Tailwind CSS v4 vía `@tailwindcss/vite`. **No hay `tailwind.config.js`**: los tokens están en `src/styles/global.css` dentro de `@theme`
- Fuentes Inter y Poppins con la API de fuentes de Astro (`fonts` en `astro.config.mjs` + `<Font />` en el layout): se descargan en el build y se sirven desde el propio sitio
- `@astrojs/sitemap`, Prettier (con `prettier-plugin-astro` y `prettier-plugin-tailwindcss`) y `@astrojs/check`
- Sin frameworks de UI (React, Vue): la interactividad es JS mínimo en `<script>` de Astro

## Comandos

| Comando             | Qué hace                                        |
| ------------------- | ----------------------------------------------- |
| `pnpm dev`          | Servidor de desarrollo en http://localhost:4321 |
| `pnpm build`        | Genera el sitio estático en `dist/`             |
| `pnpm preview`      | Sirve `dist/` para probar el build              |
| `pnpm check`        | Verifica tipos (`astro check`)                  |
| `pnpm format`       | Formatea todo con Prettier                      |
| `pnpm format:check` | Verifica el formato sin modificar               |

Antes de dar algo por terminado: `pnpm format`, `pnpm check` y `pnpm build` sin errores.

## Estructura

```
src/
  assets/       logo.jpg (y fotos de productos en assets/productos/), siempre vía <Image /> o getImage()
  components/   una sección por componente + piezas reutilizables (Boton, Icon, ProductCard)
  data/
    site.ts       datos del negocio: WhatsApp, horarios, zona, mapa, redes
    products.ts   tipo Product, categorías y lista de productos
    contenido.ts  beneficios, pasos de compra, garantía y preguntas frecuentes
  layouts/      BaseLayout.astro: <head>, SEO, Open Graph, favicon y JSON-LD
  lib/
    format.ts     formatPrecio, formatCm, whatsappUrl, whatsappProductoUrl, horariosTexto
    icons.ts      trazos SVG de los íconos + tipo IconName
  pages/        index.astro (la única página)
  styles/       global.css (Tailwind + tokens + estilos base)
design-ref/     diseño original exportado de Claude Design. SOLO REFERENCIA: no modificar,
                está excluido de tsconfig, Prettier y build
```

## Convenciones

- **Nada de datos hardcodeados en componentes**: precios, teléfono, horarios, textos de secciones y productos salen de `src/data/`. Los títulos de sección y los textos del hero sí viven en el componente.
- **Links de WhatsApp**: siempre con `whatsappUrl()` o `whatsappProductoUrl()` de `src/lib/format.ts`. Nunca armar `wa.me` a mano.
- **Precios**: siempre `formatPrecio()` (`Intl.NumberFormat('es-AR', ARS)` sin decimales).
- **Colores y estilos**: usar los tokens (`bg-brand`, `text-navy`, `bg-celeste-50`, `text-muted`, `rounded-tile`, `shadow-card`…). Si hace falta un color nuevo, se agrega a `@theme`, no como valor suelto.
- **Layout**: `container-page` (utilidad propia) para el ancho máximo de 1200px y los márgenes laterales. Padding vertical de sección: `py-14 md:py-18 lg:py-22`.
- **Mobile first**: clases base para celular, `md:` (768px) para tablet y `lg:` (1024px) para escritorio, los mismos cortes que el diseño.
- **Botones**: componente `Boton.astro` (`variante` primario/secundario, `tamano` md/lg, `whatsapp` para el ícono).
- **Íconos**: `<Icon name="..." />`. Para sumar uno nuevo se agrega su trazo en `src/lib/icons.ts`.
- **Accesibilidad**: `alt` en imágenes, foco visible (contorno azul global, blanco en el footer), áreas táctiles de al menos 44px (`min-h-11`), `aria-label` cuando el texto del botón no alcanza.
- **JS**: solo cuando sea imprescindible, en `<script>` dentro del componente y con mejora progresiva (sin JS la página tiene que funcionar). El acordeón usa `<details>` nativo.
- Nombres de componentes, props y datos en español.

## Tareas frecuentes

- **Agregar o editar un producto**: `src/data/products.ts`. Las fotos van en `src/assets/productos/`, se importan y se asignan a `imagen`.
- **Cambiar teléfono u horarios**: `src/data/site.ts` (si cambian los horarios, actualizar también `openingHoursSpecification` en `BaseLayout.astro` y la pregunta "¿Qué días atienden?" en `contenido.ts`).
- **Redes sociales**: pegar las URLs en `site.redes` (`src/data/site.ts`). Si están vacías, no se muestran.
