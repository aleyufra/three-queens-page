// Textos de las secciones informativas (beneficios, pasos de compra, garantía y preguntas).
import type { IconName } from '../lib/icons';

export const beneficios: { icono: IconName; titulo: string; texto: string }[] = [
  { icono: 'billete', titulo: 'Pago contra entrega', texto: 'Pagás al recibir.' },
  {
    icono: 'whatsapp',
    titulo: 'Atención por WhatsApp',
    texto: 'Te ayudamos a elegir tu talle.',
  },
  {
    icono: 'camion',
    titulo: 'Entrega o retiro',
    texto: 'Punto de encuentro en Palpalá o retiro en General Savio.',
  },
  {
    icono: 'zapato',
    titulo: 'Probalos sin compromiso',
    texto: 'En nuestro domicilio en barrio Gral. Savio Palpalá.',
  },
];

export const pasos: { titulo: string; texto: string }[] = [
  { titulo: 'Elegí tu par', texto: 'Mirá el catálogo y tocá "Lo quiero".' },
  {
    titulo: 'Coordinamos por WhatsApp',
    texto: 'Te paso fotos reales y confirmamos tu talle.',
  },
  {
    titulo: 'Lo recibís y pagás en el momento',
    texto: 'Nos encontramos en un punto de Palpalá o lo retirás en barrio General Savio.',
  },
];

export const garantia = {
  titulo: 'Probátelos sin compromiso',
  texto:
    'Vení a nuestro domicilio en barrio General Savio, Palpalá, y probate los pares que quieras antes de decidir. Si no te convencen, no pasa nada: no tenés que llevarte ninguno.',
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
      'Escribinos por WhatsApp y te ayudamos a elegir. Si preferís ir a lo seguro, vení a probártelos sin compromiso a nuestro domicilio en barrio General Savio.',
  },
  {
    pregunta: '¿Me los puedo probar?',
    respuesta:
      'Sí. Vení a nuestro domicilio en barrio General Savio, Palpalá, y probate los pares que quieras, sin compromiso de compra. No hacemos cambios después de la compra, por eso te recomendamos probártelos antes.',
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
