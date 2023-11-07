/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary": "#C1FF72",
        "secondary": "#94B143"
      },
      backgroundSize:{
        "width": "200px",
        "height": "200px"
      }
    },
  },
  plugins: [],
}

