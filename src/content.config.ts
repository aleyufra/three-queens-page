// Colecciones de contenido. Los archivos de src/content/ los edita la dueña desde el panel
// (/admin, Sveltia CMS): si cambiás un campo acá, cambialo también en public/admin/config.yml.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo por categoría: src/content/categorias/zapatillas.json.
// El nombre del archivo es el slug (id) y es lo que guarda cada producto en `categoria`.
const categorias = defineCollection({
  loader: glob({ base: './src/content/categorias', pattern: '*.json' }),
  schema: z.object({
    nombre: z.string().min(1),
    /** Para el mensaje de WhatsApp: "la zapatilla", "el borcego" */
    articulo: z.enum(['el', 'la']).optional(),
    orden: z.number().default(0),
  }),
});

// Una carpeta por producto, con sus fotos al lado: src/content/productos/<slug>/index.json.
// Así image() encuentra las fotos y Astro las optimiza.
const productos = defineCollection({
  loader: glob({ base: './src/content/productos', pattern: '*/index.json' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string().min(1),
      // Texto y no reference(): si borran la categoría, el build no falla y el producto
      // se muestra en "Otros" (ver src/lib/catalogo.ts).
      categoria: z.string(),
      /** Precio en pesos, sin puntos: 35000 */
      precio: z.number().nonnegative(),
      // nullish: el panel puede guardar null en un campo opcional vacío
      precioAnterior: z.number().positive().nullish(),
      publico: z.enum(['mujer', 'hombre', 'ninos', 'unisex']).nullish(),
      talles: z
        .array(
          z.object({
            talle: z.number(),
            /** Largo de la plantilla en cm. Opcional: solo los talles que se midieron */
            plantillaCm: z.number().positive().nullish(),
          }),
        )
        .min(1),
      horma: z.enum(['chica', 'normal', 'grande']),
      // El panel pide al menos 1 foto; acá se acepta vacío para que los productos
      // sin foto todavía muestren el placeholder.
      fotos: z.array(image()).default([]),
      descripcion: z.string().nullish(),
      destacado: z.boolean().default(false),
      visible: z.boolean().default(true),
      orden: z.number().default(0),
    }),
});

export const collections = { categorias, productos };
