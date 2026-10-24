// Textos de las secciones informativas (beneficios, pasos de compra, garantía y preguntas).
import type { IconName } from '../lib/icons';

export const beneficios: { icono: IconName; titulo: string; texto: string }[] = [
  { icono: 'billete', titulo: 'Pago contra entrega', texto: 'Pagás al recibir.' },
  { icono: 'regla', titulo: 'Talle medido en cm', texto: 'Sin adivinar tu número.' },
  {
    icono: 'camion',
    titulo: 'Entrega o retiro',
    texto: 'Punto de encuentro en Palpalá o retiro en General Savio.',
  },
  { icono: 'cambio', titulo: 'Cambio de talle', texto: 'Si no te queda, lo cambiamos.' },
];

export const pasos: { titulo: string; texto: string }[] = [
  { titulo: 'Elegí tu par', texto: 'Mirá el catálogo y tocá "Lo quiero".' },
  {
    titulo: 'Coordinamos por WhatsApp',
    texto: 'Te paso fotos reales, medidas y confirmamos tu talle.',
  },
  {
    titulo: 'Lo recibís y pagás en el momento',
    texto: 'Nos encontramos en un punto de Palpalá o lo retirás en barrio General Savio.',
  },
];

export const garantia = {
  titulo: 'Te queda o lo cambiamos',
  texto:
    'Si el talle no te queda, lo cambiás sin costo acercándote a nuestro domicilio en barrio General Savio, Palpalá. También podemos coordinar el cambio en un punto de encuentro en Palpalá.',
};

export const preguntas: { pregunta: string; respuesta: string }[] = [
  {
    pregunta: '¿Cómo recibo mi par?',
    respuesta:
      'Coordinamos un punto de encuentro en Palpalá, o lo retirás en nuestro domicilio en barrio General Savio. No hacemos envíos a domicilio.',
  },
  {
    pregunta: '¿Cómo pago?',
    respuesta: 'Pagás cuando recibís el par, en efectivo o por transferencia/Mercado Pago.',
  },
  {
    pregunta: '¿Cómo sé qué talle pedir?',
    respuesta:
      'Cada par tiene la medida de la plantilla en centímetros y te indicamos si la horma es chica, normal o grande. Si tenés dudas, medí tu pie y te ayudamos a elegir.',
  },
  {
    pregunta: '¿Puedo cambiar el talle?',
    respuesta:
      'Sí. Si no te queda, lo cambiás sin costo acercándote a General Savio, o coordinamos el cambio en un punto de encuentro en Palpalá.',
  },
  {
    pregunta: '¿Los calzados son originales?',
    respuesta:
      'No, son calzados alternativos, y lo decimos desde el principio. Así pagás un precio justo por lo que recibís, sin sorpresas.',
  },
  {
    pregunta: '¿Qué días atienden?',
    respuesta: 'Lunes a viernes de 9 a 18 h y sábados de 9 a 13 h.',
  },
];
