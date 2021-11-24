const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            blue: colors.blue,
            gray: colors.gray,
            yellow: colors.yellow,
            black: colors.black,
            green: colors.green,
            white: colors.white,
        },
        fontFamily: {
            sans: ["Oswald", "sans-serif"],
            serif: ["ui - serif", "Georgia", "Cambria", "serif"],
            body: ["Dosis", "sans"],
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
        },
        container: {
            center: true,
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            width: {
                map: "600px",
            },
            height: {
                map: "510px",
            },
        },
        flex: {
            1: "1 1 100%",
            auto: "1 1 auto",
            initial: "0 1 auto",
            inherit: "inherit",
            none: "none",
            2: "2 2 0%",
            100: "1 1 100%",
            50: "1 1 50%",
            25: "1 1 25%",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};
