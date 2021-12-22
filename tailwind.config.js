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
            lime: colors.lime,
            orange: colors.orange,
            warmGray: colors.warmGray,
            purple: colors.purple,
            fuschia: colors.fuschia,
            cyan: colors.cyan,
            amber: colors.amber,
            sky: colors.sky,
        },
        fontFamily: {
            sans: ["Vidaloka", "serif"],
            serif: ["ui - serif", "Georgia", "Cambria", "serif"],
            body: ["Quicksand", "sans-serif"],
        },
        fontSize: {
            xs: ".75rem",
            sm: ".850rem",
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
        maxWidth: {
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            col40: "40%",
            922: "922px",
            col75: "75vw",
            760: "760px",
        },
        minHeight: {
            0: "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            full: "100%",
            min75: "75vh",
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
                col48: "48.75%",
                col90: "90%",
            },
            height: {
                map: "510px",
                row48: "48.75%",
            },
            minHeight: {},
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
    plugins: [],
};
