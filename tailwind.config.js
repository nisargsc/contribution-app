module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'home-lg': '150px auto 150px',
                'home-md': '50px auto 50px',
                'home-sm': '0px auto 0px',
            }
        },
    },
    plugins: [],
}