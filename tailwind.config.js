/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "cmyk",
            "dark",
        ],
    },
}

