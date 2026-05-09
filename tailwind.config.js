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
        fourGreen: "#DEFFA8",
        fiveGreen: "#EBFFC9",

        accentYellow: "#FFE656",
        accentYellowSoft: "#FFF3A3",

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
        neoBrutalism: "3px 3px 0px #000",
        neoBrutalism_100: "4.5px 4.5px 0px #000",
        neoBrutalism_200: "6px 6px 0px #000",
        neoBrutalism_300: "8px 8px 0px #000",
        neoBrutalism_350: "8px 12px 0px #000",
        neoBrutalism_400: "10px 10px 0px #000",
        neoBrutalism_500: "12px 12px 0px #000",

        neoBrutalism_right: "16px 16px 0px #000",
        neoBrutalism_right_mobile: "8px 8px 0px #000",

        neoBrutalism_label: "0px 3px 0px #000, 3px 3px 0px #000 ",
        neoBrutalism_label_mobile: "0px 2px 0px #000, 2px 2px 0px #000 ",

        neoBrutalism_yellow: "3px 3px 0px #FFE656, 6px 6px 0px #000",
      },
      keyframes: {
        flutuar: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spin_slow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse_dot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        flutuar: 'flutuar 4s ease-in-out infinite',
        spin_slow: 'spin_slow 8s linear infinite',
        pulse_dot: 'pulse_dot 1.6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
      },
    },
  },
  plugins: [],
}
