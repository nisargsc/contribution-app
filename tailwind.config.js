module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'home-3': '100px auto 100px',
        'home-1': '0px auto 0px',
      }
    },
  },
  plugins: [],
}