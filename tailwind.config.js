/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "faded-gray": "#1C1C1C",
            },
            height:{
                "480":"480px",
                "98":"98px"
            },
            width:{
                "463":"463px",
                "125":"125px"
            },
            margin:{
                "18rem":"18rem"
            },
        },
    },
    plugins: [],
};
