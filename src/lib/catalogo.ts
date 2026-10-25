import { getCollection, type CollectionEntry } from 'astro:content';

export interface Categoria {
  /** Slug: nombre del archivo en src/content/categorias/ */
  id: string;
  nombre: string;
  articulo?: 'el' | 'la';
  orden: number;
}

export type Producto = Omit<CollectionEntry<'productos'>['data'], 'categoria'> & {
  id: string;
  categoria: Categoria;
};

export type Publico = NonNullable<Producto['publico']>;

export const publicos: Record<Publico, string> = {
  mujer: 'Mujer',
  hombre: 'Hombre',
  ninos: 'Niños',
  unisex: 'Unisex',
};

/** Para productos cuya categoría ya no existe (la borraron o cambió el nombre del archivo). */
const otros: Categoria = { id: 'otros', nombre: 'Otros', orden: Infinity };

const porOrden = (a: { orden: number; nombre: string }, b: { orden: number; nombre: string }) =>
  a.orden - b.orden || a.nombre.localeCompare(b.nombre, 'es');

/**
 * Categorías para el filtro y productos visibles, ya ordenados.
 * Productos: primero los destacados, después por `orden` y por nombre.
 * Con `incluirOcultos` también vienen los que tienen "Mostrar en la página" apagado.
 */
export async function getCatalogo({ incluirOcultos = false } = {}) {
  const categorias: Categoria[] = (await getCollection('categorias'))
    .map(({ id, data }) => ({ id, ...data }))
    .sort(porOrden);
  const porId = new Map(categorias.map((c) => [c.id, c]));

  const productos: Producto[] = (await getCollection('productos'))
    .map(({ id, data }) => {
      let categoria = porId.get(data.categoria);
      if (!categoria) {
        console.warn(
          `[catálogo] El producto "${id}" usa la categoría "${data.categoria}", que no existe. Se muestra en "${otros.nombre}".`,
        );
        categoria = porId.get(otros.id) ?? otros;
      }
      return { ...data, id, categoria };
    })
    .filter((p) => incluirOcultos || p.visible)
    .sort((a, b) => Number(b.destacado) - Number(a.destacado) || porOrden(a, b));

  // "Otros" aparece en el filtro solo si algún producto listado quedó sin categoría
  if (!porId.has(otros.id) && productos.some((p) => p.categoria === otros)) {
    categorias.push(otros);
  }

  return { categorias, productos };
}
