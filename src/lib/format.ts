import { site } from '../data/site';
import { categorias, type Product } from '../data/products';

const pesos = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

/** 35000 → "$ 35.000" */
export const formatPrecio = (precio: number) => pesos.format(precio);

/** 26.5 → "26,5" */
export const formatCm = (cm: number) => cm.toLocaleString('es-AR');

/** Link a wa.me con el mensaje ya escrito. */
export const whatsappUrl = (mensaje: string = site.whatsapp.mensajeGeneral) =>
  `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;

/** "Hola Guadalupe! Me interesa la Zapatilla urbana blanca ($ 35.000). Mi talle es: " */
export const whatsappProductoUrl = (p: Product) => {
  const { articulo } = categorias[p.categoria];
  return whatsappUrl(
    `Hola Guadalupe! Me interesa ${articulo} ${p.nombre} (${formatPrecio(p.precio)}). Mi talle es: `,
  );
};

/** "Lun a Vie 9–18 h · Sáb 9–13 h" */
export const horariosTexto = site.horarios.map((h) => `${h.dias} ${h.horas}`).join(' · ');
