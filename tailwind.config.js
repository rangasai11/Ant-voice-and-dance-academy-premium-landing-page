/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: '#5b21b6',
        magenta: '#d946ef',
        blush: '#fff1fb',
        champagne: '#fff7d6',
        aurum: '#f8c84c',
        velvet: '#2b0b55',
      },
      boxShadow: {
        glow: '0 24px 70px rgba(217, 70, 239, 0.28)',
        gold: '0 18px 45px rgba(248, 200, 76, 0.35)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'academy-radial':
          'radial-gradient(circle at 20% 20%, rgba(248, 200, 76, 0.24), transparent 26%), radial-gradient(circle at 78% 12%, rgba(217, 70, 239, 0.28), transparent 30%), linear-gradient(135deg, #2b0b55 0%, #5b21b6 44%, #f472b6 100%)',
      },
    },
  },
  plugins: [],
};
