/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                secondary: "#1e293b",
                accent: "#8b5cf6",
                txt: "#f1f5f9",
            }
        },
    },
    plugins: [],
}