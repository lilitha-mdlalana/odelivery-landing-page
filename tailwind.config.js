/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%':{opacity:1}
        }
      },
      animation: {
        fadeIn:'fadeIn 1s ease-in'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#facc15",

          secondary: "#facc15",

          accent: "#fef08a",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#4ade80",

          warning: "#f87171",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
