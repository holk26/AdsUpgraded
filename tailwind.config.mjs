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
        'color-accent': 'var(--brand-accent)',
        'color-secondary': 'var(--brand-secondary)',
        'color-surface': 'var(--brand-surface)',
        'text-color-accent': 'var(--brand-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        saas: 'var(--radius-saas)',
      },
      // Consistent z-index system
      zIndex: {
        'skip': '100',
        'header': '50',
        'modal': '40',
        'overlay': '40',
        'section': '10',
        'background': '0',
      },
      // Animation utilities
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out backwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'dash': 'dash 3s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 15s infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'pulse-line': 'pulse-line 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.8', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(4px)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'dash': {
          'to': { strokeDashoffset: '-40' },
        },
        'orbit': {
          'from': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(180px) rotate(-360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(33.333%)' },
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(40px) translateX(40px)' },
        },
        'pulse-line': {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(0.95)' },
          '50%': { opacity: '0.7', transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
