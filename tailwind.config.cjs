/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Manifesto palette — near-black background, mint accent
        ink: {
          900: '#050505',
          800: '#0a0a0a',
          700: '#111111',
          600: '#161616',
          500: '#1c1c1c',
          400: '#2a2a2a',
        },
        bone: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
        },
        mint: {
          DEFAULT: '#1FE9A8',
          400: '#3DF0B5',
          500: '#1FE9A8',
          600: '#13C28A',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      maxWidth: {
        prose: '38rem',
        narrow: '46rem',
        wide: '64rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
