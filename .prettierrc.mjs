// @ts-check

/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  printWidth: 100,
  // prettier-plugin-tailwindcss tiene que ir último.
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  // Con Tailwind v4 el plugin lee los tokens desde el CSS (no hay tailwind.config.js).
  tailwindStylesheet: './src/styles/global.css',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
