/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,tx,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
        blurtext: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(4px)" },
        },
      },
      animation: {
        slide: " slide 25s linear infinite",
        "blur-text-0": "blur-text 1.5s 0s infinite linear alternate",
      },

      colors: {
        textDark: "#f3f6f9",
        backgroundDark: "#04090f",
        primaryDark: "#1b3c68",
        secondaryDark: "#0074e4",
        accentDark: "#00b8c0",
        textLight: "#04090f",
      },
      backgroundImage: {
        lines3: "url('/src/assets/oooscillate (3).png')",
        lines4: "url('/src/assets/oooscillate (4).png')",
      }
    },
  },
  plugins: [],
};
