// Textos para publicar un producto en grupos de Facebook (los usa /panel)
// y para su página individual (/producto/<slug>/).
import { site } from '../data/site';
import type { Producto } from './catalogo';
import { formatPrecio } from './format';

/** URL absoluta de la página del producto: https://…/producto/zapatilla-urbana-blanca/ */
export const urlProducto = (id: string) => new URL(`/producto/${id}/`, import.meta.env.SITE).href;

/** [35, 36, 37] → "35 al 37"; [35, 37, 39] → "35, 37, 39" */
export function textoTalles(talles: Producto['talles']) {
  const numeros = talles.map((t) => t.talle).sort((a, b) => a - b);
  const consecutivos =
    numeros.length > 2 &&
    numeros.every((n, i) => Number.isInteger(n) && (i === 0 || n === numeros[i - 1]! + 1));
  return consecutivos
    ? `${numeros[0]} al ${numeros.at(-1)}`
    : numeros.map((n) => n.toLocaleString('es-AR')).join(', ');
}

/** Texto sin el link, para navigator.share (el link va aparte). */
export const textoCompartir = (p: Producto) =>
  [
    `👟 ${p.nombre}`,
    `💲 ${formatPrecio(p.precio)}`,
    `📏 Talles: ${textoTalles(p.talles)}`,
    `🚚 ${site.publicacion.entrega}`,
    `💵 ${site.publicacion.pago}`,
    `📲 WhatsApp: ${site.whatsapp.visible}`,
  ].join('\n');

/** Texto listo para pegar en un grupo de compra y venta. */
export const textoPublicacion = (p: Producto) => `${textoCompartir(p)}\n🔗 ${urlProducto(p.id)}`;
