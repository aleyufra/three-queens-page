// Datos del negocio. Si cambia el teléfono, el horario o la zona, se edita solo acá.

export const site = {
  nombre: 'Three Queens Calzados',
  nombreCorto: 'Three Queens',
  descripcion:
    'Calzado para toda la familia en Palpalá, Jujuy. Probalos sin compromiso en barrio General Savio y pagá contra entrega. Consultá por WhatsApp.',
  localidad: 'Palpalá, Jujuy',

  whatsapp: {
    // Formato internacional sin "+" ni espacios, como lo pide wa.me
    numero: '5493888560158',
    visible: '388 856-0158',
    mensajeGeneral: 'Hola Guadalupe! Quiero consultar por calzados',
  },

  horarios: [
    { dias: 'Lun a Vie', horas: '9–20 h' },
    { dias: 'Sáb', horas: '9–18 h' },
  ],

  entrega: 'Puntos de encuentro en Palpalá · Retiro en barrio General Savio',

  // Líneas fijas del texto que se copia desde /panel para los grupos de Facebook
  publicacion: {
    entrega: 'Entrega en punto de encuentro en Palpalá o retiro en B° General Savio',
    pago: 'Pagos por efectivo y transferencia',
  },

  mapa: {
    // Búsqueda que se muestra en el iframe de Google Maps (zona general, no la dirección exacta).
    busqueda: 'Barrio General Savio, Palpalá, Jujuy, Argentina',
    zoom: 14,
  },

  redes: {
    // Pegá acá los links completos, por ejemplo 'https://www.facebook.com/threequeenscalzados'.
    // Mientras estén vacíos, el ícono no se muestra en el footer.
    facebook: 'https://www.facebook.com/profile.php?id=100076186866069',
    // Por ejemplo 'https://www.instagram.com/threequeenscalzados'
    instagram: 'https://www.instagram.com/three_queens_2025/',
  },
} as const;
