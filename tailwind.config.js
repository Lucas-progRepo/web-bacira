/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F4EEE3',
        surface: '#EBE2D2',
        ink: '#1C1A16',
        inkSoft: '#5A5247',
        accent: '#7A2E1F',
        accentSoft: '#E6CFAE',
        line: 'rgba(28,26,22,0.12)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.18em'
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)'
      }
    }
  },
  plugins: []
};
