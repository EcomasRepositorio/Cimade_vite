// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primaryrosa': '#ff00d4', // Cambia esto al color rosado que prefieras
        'primaryblue' : '#002e79',
        'primaryceleste' : '#006eb0'
      },
      textColor: {
        'textrosa': '#ff00d4', // Cambia esto al color rosado que prefieras
        'textblue' : '#002e79',
        'textceleste' : '#006eb0'
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-in-out',
        'fade-in-right': 'fade-in-right 0.5s ease-in-out',
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
};
