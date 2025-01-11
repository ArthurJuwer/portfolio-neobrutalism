/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#D9D9D9",
        secondBackground: "#E0E7F1",

        mainGreen: "#A3E636",
        secondGreen: "#7FBC8C",
        thirdGreen: "#97BD9F",

        titleGray: "#282826",
        textGray: "#7B7B7B",
        boxGray: "#171717",


        
      },
      borderWidth: {
        neoBrutalism: "2px"
      },
      borderColor: {
        neoBrutalism: "#000"
      },
      boxShadow: {
        neoBrutalism: "3px 3px 0px #000" /* Sombra sólida e marcante */


        
      }
    },
  },
  plugins: [],
}

