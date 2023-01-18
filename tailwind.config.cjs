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
        "space-bg": "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url('/assets/spacebg.jpg');",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/index.css -o ./public/output.css --watch
