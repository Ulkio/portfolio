/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blue-palette-background": "#000F28",
        "blue-palette-navbar": "#00245F",
        "yellow-palette": "#FFD500",
      },
      backgroundImage: {
        "space-bg":
          "linear-gradient(rgba(2,0,36,0.5) 30%, rgba(2,0,36,1) 80%, rgba(0,15,40,1) 100%), url('/assets/spacebg.webp');",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
