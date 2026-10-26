import { site } from '../data/site';
import type { Producto } from './catalogo';

const pesos = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

/** 35000 → "$ 35.000" */
export const formatPrecio = (precio: number) => pesos.format(precio);

/** Link a wa.me con el mensaje ya escrito. */
export const whatsappUrl = (mensaje: string = site.whatsapp.mensajeGeneral) =>
  `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

/** "Hola Guadalupe! Me interesa la Zapatilla urbana blanca ($ 35.000). Mi talle es: " */
export const whatsappProductoUrl = (p: Producto) => {
  const { articulo } = p.categoria;
  const nombre = articulo ? `${articulo} ${p.nombre}` : p.nombre;
  return whatsappUrl(
    `Hola Guadalupe! Me interesa ${nombre} (${formatPrecio(p.precio)}). Mi talle es: `,
  );
};

/** "Lun a Vie 9–18 h · Sáb 9–13 h" */
export const horariosTexto = site.horarios.map((h) => `${h.dias} ${h.horas}`).join(' · ');
