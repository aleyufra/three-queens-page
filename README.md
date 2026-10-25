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

- **Productos, precios, fotos y categorías**: desde el panel en `/admin` ([guía para la dueña](docs/GUIA-PANEL.md)). Los datos quedan en `src/content/` como archivos JSON.
- **Teléfono, horarios, zona y redes sociales**: `src/data/site.ts`
- **Beneficios, pasos de compra y preguntas frecuentes**: `src/data/contenido.ts`
- **Colores y estilos de marca**: `src/styles/global.css`

## Panel de administración (Sveltia CMS)

El panel está en `public/admin/`: `index.html` carga [Sveltia CMS](https://sveltiacms.app) y `config.yml` define los campos. Cada vez que alguien guarda, Sveltia hace un commit en `main` de GitHub y Cloudflare vuelve a publicar el sitio.

Si cambiás un campo en `public/admin/config.yml`, cambialo también en `src/content.config.ts`. Si no coinciden, el build falla.

### Probar el panel en local (Windows)

Funciona en **Chrome o Edge**: Firefox no tiene la API que usa Sveltia para leer carpetas. No necesitás iniciar sesión en GitHub.

1. En PowerShell, dentro del proyecto:

   ```powershell
   pnpm dev
   ```

2. En Chrome o Edge abrí **http://localhost:4321/admin/index.html**. En local hace falta poner `index.html` al final.
3. Tocá **Work with Local Repository** y elegí la carpeta del proyecto, por ejemplo `C:\dev\three-queens-web`. Aceptá el permiso que pide el navegador.
4. Editá un producto y guardá. El cambio se escribe en `src/content/` y lo ves en http://localhost:4321.
5. Revisá los cambios con `git status` y `git diff`. Commiteá solo si querés conservarlos. Para descartarlos:

   ```powershell
   git restore src/content
   git clean -fd src/content   # borra fotos o productos nuevos que creaste en la prueba
   ```

## Publicación

El sitio se publica en **Cloudflare Workers** (static assets) en https://three-queens-page.ale-yufra28.workers.dev, configurado en `wrangler.jsonc`. Es 100 % estático: `pnpm build` genera `dist/` y no hay adapter de Cloudflare.

Para que los cambios del panel se publiquen solos, el Worker tiene que estar conectado al repositorio con **Workers Builds**: comando de build `pnpm build` y el comando de deploy que propone Cloudflare (`npx wrangler deploy`, que corre en sus servidores, no en el proyecto).

El login del panel lo hace el worker [`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) (https://sveltia-cms-auth.ale-yufra28.workers.dev). Los secretos de la OAuth App de GitHub se cargan en ese worker, nunca en este repo.
