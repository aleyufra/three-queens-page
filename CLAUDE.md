# Three Queens Calzados: landing / catálogo

Landing estática para un emprendimiento de calzado de Palpalá (Jujuy, Argentina). Idioma del sitio: español rioplatense (`es-AR`, voseo). Se publica en Cloudflare Workers (static assets, `wrangler.jsonc`): https://three-queens-page.ale-yufra28.workers.dev

La dueña edita el catálogo desde `/admin` (Sveltia CMS, backend GitHub). Cada guardado es un commit en `main`, y Workers Builds reconstruye el sitio.

Ver también @AGENTS.md (instrucciones de Astro y del servidor de desarrollo).

## Entorno

- Windows 11 + PowerShell. Todos los comandos tienen que ser de PowerShell (nada de bash).
- Gestor de paquetes: **pnpm** únicamente (no npm ni yarn).

## Stack

- Astro 7, salida `static`. **No agregar el adapter de Cloudflare**: el Worker solo sirve `dist/` como assets
- Content Collections (content layer, `glob()` loader) para productos y categorías, en `src/content.config.ts`
- Sveltia CMS en `public/admin/` (versión fijada en `index.html`; la interfaz solo está en inglés)
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
public/admin/   index.html (carga Sveltia CMS) + config.yml (campos del panel, en español)
src/
  assets/       logo.jpg, siempre vía <Image /> o getImage(). assets/fotos/ es la carpeta general
                de fotos del panel (puede no existir)
  components/   una sección por componente + piezas reutilizables (Boton, Icon, ProductCard)
  content/      LO ESCRIBE EL PANEL (Prettier lo ignora)
    categorias/<slug>.json          nombre, articulo (el/la), orden
    productos/<slug>/index.json     datos del producto + sus fotos en la misma carpeta
  content.config.ts  schemas Zod de las colecciones (tienen que coincidir con config.yml)
  data/
    site.ts       datos del negocio: WhatsApp, horarios, zona, mapa, redes
    contenido.ts  beneficios, pasos de compra, garantía y preguntas frecuentes
  layouts/      BaseLayout.astro: <head>, SEO, Open Graph, favicon y JSON-LD
  lib/
    catalogo.ts   getCatalogo(): categorías + productos visibles ordenados, tipos Producto/Categoria
    format.ts     formatPrecio, formatCm, whatsappUrl, whatsappProductoUrl, horariosTexto
    publicacion.ts  urlProducto (absoluta), textoTalles, textoPublicacion, textoCompartir
    icons.ts      trazos SVG de los íconos + tipo IconName
  pages/
    index.astro             landing con el catálogo
    producto/[slug].astro   una página por producto (también los ocultos, con noindex), con
                            Open Graph para que el link se vea con foto y precio en Facebook
    panel.astro             /panel: copiar o compartir productos para grupos de Facebook
                            (no enlazado, noindex, fuera del sitemap). Sin APIs de Facebook
  styles/       global.css (Tailwind + tokens + estilos base)
docs/           GUIA-PANEL.md: guía del panel y de /panel para la dueña (lenguaje muy simple)
```

(`design-ref/`, el diseño original, ya se borró del repo; sigue excluido en tsconfig y Prettier.)

## Convenciones

- **Nada de datos hardcodeados en componentes**: productos y categorías salen de `getCatalogo()` (`src/lib/catalogo.ts`); teléfono, horarios y textos de secciones, de `src/data/`. Los títulos de sección y los textos del hero sí viven en el componente.
- **Catálogo**:
  - Un campo nuevo se agrega en `src/content.config.ts` **y** en `public/admin/config.yml`, en el mismo orden.
  - Los campos opcionales usan `.nullish()`, porque el panel puede guardar `null`.
  - `categoria` es texto, no `reference()`: si la categoría no existe, el producto va a "Otros" con un `console.warn` y el build no falla.
  - Las fotos usan `image()`, con rutas relativas a la carpeta del producto.
- **Fotos de producto**: componente `FotosProducto.astro` (una foto, carrusel o placeholder). La imagen de Open Graph la genera `BaseLayout` (prop `imagen`), cuadrada y sin agrandar.
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

- **Agregar o editar un producto**: normalmente desde el panel. A mano: crear `src/content/productos/<slug>/index.json` (copiar uno existente) con las fotos en la misma carpeta.
- **Probar el panel en local**: `pnpm dev` y abrir http://localhost:4321/admin/index.html en Chrome o Edge → "Work with Local Repository" (ver README).
- **Actualizar Sveltia CMS**: cambiar la versión en `public/admin/index.html` y en el `$schema` de `config.yml`, y probarlo en local.
- **Cambiar teléfono u horarios**: `src/data/site.ts` (si cambian los horarios, actualizar también `openingHoursSpecification` en `BaseLayout.astro` y la pregunta "¿Qué días atienden?" en `contenido.ts`).
- **Redes sociales**: pegar las URLs en `site.redes` (`src/data/site.ts`). Si están vacías, no se muestran.
