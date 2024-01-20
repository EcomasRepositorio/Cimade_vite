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
      keyframes: {
        'fade-in': {
          '0%, 50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
    },
  },
};
