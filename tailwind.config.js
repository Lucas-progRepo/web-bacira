/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
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
        body: ['var(--font-body)', 'sans-serif']
      },
      letterSpacing: {
        eyebrow: '0.18em'
      }
    }
  },
  plugins: []
}
