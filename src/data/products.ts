import type { ImageMetadata } from 'astro';

// Para agregar la foto de un producto:
// 1. Guardala en src/assets/productos/ (por ejemplo zapatilla-urbana-blanca.jpg)
// 2. Importala arriba:  import zapatillaUrbana from '../assets/productos/zapatilla-urbana-blanca.jpg';
// 3. Asignala al producto:  imagen: zapatillaUrbana,
// Astro la optimiza sola (tamaño y formato). Sin foto se muestra un placeholder.

export type Categoria = 'zapatillas' | 'zapatos' | 'botas' | 'borcegos' | 'sandalias';
export type Horma = 'chica' | 'normal' | 'grande';

export interface Product {
  id: string;
  nombre: string;
  categoria: Categoria;
  /** Precio en pesos, sin puntos: 35000 */
  precio: number;
  talles: number[];
  /** Largo de la plantilla en cm, medido en el talle de referencia */
  medidaPlantillaCm: number;
  /** Talle en el que se midió la plantilla */
  talleReferencia: number;
  horma: Horma;
  imagen?: ImageMetadata;
}

/** Nombre visible de cada categoría y artículo para el mensaje de WhatsApp ("la zapatilla", "el borcego"). */
export const categorias: Record<Categoria, { nombre: string; articulo: 'el' | 'la' }> = {
  zapatillas: { nombre: 'Zapatillas', articulo: 'la' },
  zapatos: { nombre: 'Zapatos', articulo: 'el' },
  botas: { nombre: 'Botas', articulo: 'la' },
  borcegos: { nombre: 'Borcegos', articulo: 'el' },
  sandalias: { nombre: 'Sandalias', articulo: 'la' },
};

/** rango(35, 38) → [35, 36, 37, 38] */
const rango = (desde: number, hasta: number) =>
  Array.from({ length: hasta - desde + 1 }, (_, i) => desde + i);

export const products: Product[] = [
  {
    id: 'zapatilla-urbana-blanca',
    nombre: 'Zapatilla urbana blanca',
    categoria: 'zapatillas',
    precio: 35000,
    talles: rango(35, 40),
    medidaPlantillaCm: 24,
    talleReferencia: 37,
    horma: 'normal',
  },
  {
    id: 'zapatilla-running-gris',
    nombre: 'Zapatilla running gris',
    categoria: 'zapatillas',
    precio: 38000,
    talles: rango(38, 44),
    medidaPlantillaCm: 26.5,
    talleReferencia: 41,
    horma: 'chica',
  },
  {
    id: 'zapatilla-plataforma-negra',
    nombre: 'Zapatilla plataforma negra',
    categoria: 'zapatillas',
    precio: 42000,
    talles: rango(35, 39),
    medidaPlantillaCm: 24,
    talleReferencia: 37,
    horma: 'normal',
  },
  {
    id: 'zapatilla-escolar-negra',
    nombre: 'Zapatilla escolar negra',
    categoria: 'zapatillas',
    precio: 28000,
    talles: rango(30, 38),
    medidaPlantillaCm: 22,
    talleReferencia: 34,
    horma: 'normal',
  },
  {
    id: 'zapato-vestir-negro',
    nombre: 'Zapato de vestir negro',
    categoria: 'zapatos',
    precio: 45000,
    talles: rango(39, 44),
    medidaPlantillaCm: 27,
    talleReferencia: 41,
    horma: 'grande',
  },
  {
    id: 'bota-cana-alta',
    nombre: 'Bota caña alta suela track',
    categoria: 'botas',
    precio: 58000,
    talles: rango(35, 40),
    medidaPlantillaCm: 24,
    talleReferencia: 37,
    horma: 'normal',
  },
  {
    id: 'borcego-trabajo-marron',
    nombre: 'Borcego de trabajo marrón',
    categoria: 'borcegos',
    precio: 55000,
    talles: rango(38, 45),
    medidaPlantillaCm: 27,
    talleReferencia: 41,
    horma: 'grande',
  },
  {
    id: 'borcego-urbano-negro',
    nombre: 'Borcego urbano negro',
    categoria: 'borcegos',
    precio: 48000,
    talles: rango(35, 40),
    medidaPlantillaCm: 24,
    talleReferencia: 37,
    horma: 'normal',
  },
  {
    id: 'sandalia-plataforma-beige',
    nombre: 'Sandalia plataforma beige',
    categoria: 'sandalias',
    precio: 25000,
    talles: rango(35, 40),
    medidaPlantillaCm: 24.5,
    talleReferencia: 37,
    horma: 'chica',
  },
  {
    id: 'sandalia-tiras-negra',
    nombre: 'Sandalia de tiras negra',
    categoria: 'sandalias',
    precio: 20000,
    talles: rango(35, 39),
    medidaPlantillaCm: 24,
    talleReferencia: 37,
    horma: 'normal',
  },
];
