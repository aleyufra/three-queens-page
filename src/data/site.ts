// Datos del negocio. Si cambia el teléfono, el horario o la zona, se edita solo acá.

export const site = {
  nombre: 'Three Queens Calzados',
  nombreCorto: 'Three Queens',
  descripcion:
    'Calzado para toda la familia en Palpalá, Jujuy. Talle medido en centímetros, pago contra entrega y cambio de talle. Consultá por WhatsApp.',
  localidad: 'Palpalá, Jujuy',

  whatsapp: {
    // Formato internacional sin "+" ni espacios, como lo pide wa.me
    numero: '5493884967506',
    visible: '388 496-7506',
    mensajeGeneral: 'Hola Guadalupe! Quiero consultar por calzados',
  },

  horarios: [
    { dias: 'Lun a Vie', horas: '9–18 h' },
    { dias: 'Sáb', horas: '9–13 h' },
  ],

  entrega: 'Puntos de encuentro en Palpalá · Retiro en barrio General Savio',

  // Líneas fijas del texto que se copia desde /panel para los grupos de Facebook
  publicacion: {
    entrega: 'Entrega en punto de encuentro en Palpalá o retiro en B° General Savio',
    pago: 'Pagás cuando lo tenés en la mano',
  },

  mapa: {
    // Búsqueda que se muestra en el iframe de Google Maps (zona general, no la dirección exacta).
    busqueda: 'Barrio General Savio, Palpalá, Jujuy, Argentina',
    zoom: 14,
  },

  redes: {
    // Pegá acá los links completos, por ejemplo 'https://www.facebook.com/threequeenscalzados'.
    // Mientras estén vacíos, el ícono no se muestra en el footer.
    facebook: '',
    // Por ejemplo 'https://www.instagram.com/threequeenscalzados'
    instagram: '',
  },
} as const;
