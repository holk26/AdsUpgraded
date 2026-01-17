/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
        },
        bg: {
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          dark: 'var(--bg-dark)',
        },
        text: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
