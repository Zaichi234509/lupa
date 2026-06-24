/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./deepseek_html_20260624_6635df.html",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'void': '#0A0A0A',
        'ember': '#FF4D1C',
        'gold': '#FFB800',
        'blood': '#8B0000',
        'ash': '#1A1110',
        'ice': '#E0F2FE',
        'scorch': '#FF6B35'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'ember': '0 0 12px #FF4D1C, 0 0 36px rgba(255,77,28,0.35)',
        'gold': '0 0 10px #FFB800, 0 0 28px rgba(255,184,0,0.3)',
        'inner-glow': 'inset 0 0 30px rgba(255,77,28,0.08)'
      }
    }
  },
  plugins: []
}
