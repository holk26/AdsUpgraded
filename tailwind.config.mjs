/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Extra small devices
      },
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
          surface: 'var(--brand-surface)',
          border: 'var(--brand-border)',
        },
        bg: {
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          dark: 'var(--bg-dark)',
        },
        text: {
          heading: 'var(--text-heading)',
          body: 'var(--text-body)',
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        saas: 'var(--radius-saas)',
      },
    },
  },
  plugins: [],
}
