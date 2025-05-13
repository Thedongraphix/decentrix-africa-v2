/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0340',       // Dark blue/purple
        'secondary': '#49A4F3',     // Light blue
        'accent': '#EEAA38',        // Gold/yellow
      },
      fontFamily: {
        'sans': ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Jost', 'sans-serif'],
        'body': ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        ':root': {
          '--color-primary': '#0A0340',
          '--color-secondary': '#49A4F3',
          '--color-accent': '#EEAA38',
        },
        'html': {
          fontFamily: 'Jost, ui-sans-serif, system-ui, sans-serif',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: 'Jost, sans-serif',
        },
        'p, span, li, a': {
          fontFamily: 'Jost, sans-serif',
        },
      });
    },
  ],
} 