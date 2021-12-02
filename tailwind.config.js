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
            colors: {
                rosado: {
                    0: "#620042",
                    100: "#870557",
                    200: "#A30664",
                    300: "#BC0A6F",
                    400: "#DA127D",
                    500: "#E8368F",
                    600: "#F364A2",
                    700: "#FF8CBA",
                    800: "#FFB8D2",
                    900: "#FFE3EC",
                },
                amarillo: {
                    0: "hsl(15, 86%, 30%)",
                    100: "hsl(22, 82%, 39%)",
                    200: "hsl(29, 80%, 44%)",
                    300: "hsl(36, 77%, 49%)",
                    400: "hsl(42, 87%, 55%)",
                    500: "hsl(44, 92%, 63%)",
                    600: "hsl(48, 94%, 68%)",
                    700: "hsl(48, 95%, 76%)",
                    800: "hsl(48, 100%, 88%)",
                    900: "hsl(49, 100%, 96%)",
                },
                verdeAzulado: {
                    0: "hsl(170, 97%, 15%)",
                    100: "hsl(168, 80%, 23%)",
                    200: "hsl(166, 72%, 28%)",
                    300: "hsl(164, 71%, 34%)",
                    400: "hsl(162, 63%, 41%)",
                    500: "hsl(160, 51%, 49%)",
                    600: "hsl(158, 58%, 62%)",
                    700: "hsl(156, 73%, 74%)",
                    800: "hsl(154, 75%, 87%)",
                    900: "hsl(152, 68%, 96%)",
                },
                olive: {
                    50: "#faf9f3",
                    100: "#f8efbb",
                    200: "#efdd80",
                    300: "#d7be69",
                    400: "#b3912a",
                    500: "#937215",
                    600: "#77590e",
                    700: "#5b430d",
                    800: "#3e2e0b",
                    900: "#2a1d09",
                },
                asparagus: {
                    50: "#f9f9f2",
                    100: "#f5efc4",
                    200: "#e7e08c",
                    300: "#c7bf58",
                    400: "#959831",
                    500: "#737a19",
                    600: "#5c6110",
                    700: "#48490f",
                    800: "#31320d",
                    900: "#211f0a",
                },
                seagreen: {
                    50: "#f3f6f4",
                    100: "#dfefeb",
                    200: "#b8e4d3",
                    300: "#81c8a8",
                    400: "#3fa779",
                    500: "#2c8b52",
                    600: "#26733c",
                    700: "#215831",
                    800: "#183c26",
                    900: "#11251c",
                },
                pine: {
                    50: "#f0f6f6",
                    100: "#d4eff4",
                    200: "#a4e4e8",
                    300: "#6cc8cb",
                    400: "#31a8a8",
                    500: "#238c85",
                    600: "#1f736b",
                    700: "#1c5854",
                    800: "#153c3d",
                    900: "#0e262c",
                },
                steel: {
                    50: "#f3f8f8",
                    100: "#dcf0f9",
                    200: "#b4e0f2",
                    300: "#82c1e0",
                    400: "#4c9dc9",
                    500: "#397db2",
                    600: "#306399",
                    700: "#284b78",
                    800: "#1d3356",
                    900: "#122039",
                },
                denim: {
                    50: "#f5f9fa",
                    100: "#e2f0fb",
                    200: "#c2dbf7",
                    300: "#96baea",
                    400: "#6994db",
                    500: "#5371cc",
                    600: "#4456b8",
                    700: "#364095",
                    800: "#262c6b",
                    900: "#161c44",
                },
                royalblue: {
                    50: "#f8fafa",
                    100: "#eceffa",
                    200: "#d9d6f6",
                    300: "#b8b1e9",
                    400: "#9c88da",
                    500: "#8364cd",
                    600: "#6c48b7",
                    700: "#523693",
                    800: "#382568",
                    900: "#20183e",
                },
                orchid: {
                    50: "#fafafa",
                    100: "#f3eff8",
                    200: "#e7d4f1",
                    300: "#ceacdf",
                    400: "#bc81c9",
                    500: "#a55db6",
                    600: "#8a429b",
                    700: "#683177",
                    800: "#482250",
                    900: "#2a162e",
                },
                blush: {
                    50: "#fcfbfa",
                    100: "#f9efed",
                    200: "#f4d2da",
                    300: "#e5a8b5",
                    400: "#dc7a8d",
                    500: "#ca576c",
                    600: "#b03c4e",
                    700: "#892d3a",
                    800: "#601f27",
                    900: "#3b1416",
                },
                chocolate: {
                    50: "#fcfbf8",
                    100: "#faefdb",
                    200: "#f4d6b5",
                    300: "#e5ad83",
                    400: "#d78056",
                    500: "#c15f35",
                    600: "#a54423",
                    700: "#7f331c",
                    800: "#592315",
                    900: "#38160e",
                },
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
    plugins: [],
};
