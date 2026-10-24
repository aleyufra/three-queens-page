// Trazos SVG (viewBox 0 0 24 24) tomados del diseño. Se dibujan con stroke="currentColor",
// así que el ícono toma el color del texto que lo rodea.

export const icons = {
  whatsapp:
    '<path d="M3 21l1.6-4.6A8.6 8.6 0 1 1 7.7 19.6L3 21z"/><path d="M9.2 9.3c.3 1.7 1.8 3.6 3.6 4.4l1.1-1 1.5.8-.3 1.3c-2.8.3-6.3-2.9-6.4-6l1.3-.3.8 1.5z" fill="currentColor" stroke="none"/>',
  billete:
    '<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9.5v5M18 9.5v5"/>',
  regla:
    '<rect x="2" y="8" width="20" height="8" rx="1.5"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/>',
  camion:
    '<path d="M2.5 6h11v10h-11z"/><path d="M13.5 9.5h4l3 3.5v3h-7"/><circle cx="6.5" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>',
  cambio: '<path d="M4 9h15l-3.5-3.5"/><path d="M20 15H5l3.5 3.5"/>',
  zapato:
    '<path d="M2.5 16.5c0-2.5.4-6.5 1.8-7.5l3 2c1 .8 2.6.9 3.6.3L13.5 10c1.6 2 4.2 3.1 6.3 3.6 1 .3 1.7 1.1 1.7 2.1v1.3H2.5z"/><path d="M2.5 19h19"/>',
  horma: '<path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4"/>',
  escudo:
    '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mas: '<path d="M12 5v14M5 12h14"/>',
  facebook:
    '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M15.5 8H14a2 2 0 0 0-2 2v11M9.5 13h5"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"/>',
} as const;

export type IconName = keyof typeof icons;
