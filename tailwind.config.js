/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "inter": ['Inter', 'sans-serif'],
      "mono": ['Roboto Mono', 'monospace']
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'olive': '#373e02',
      'bg-olive': '#e7ecd4',
      'red': '#ff0000',
      'modal': 'rgba(0,0,0,0.6)',
      'green': '#0f0'
    }
  },
  plugins: [require("daisyui")],
}

