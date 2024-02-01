/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'cinizel': ['Cinzel', 'serif'],
        'inter' : ['Inter', 'sans-serif'],
        'raleway' : ['Raleway', 'sans-seri']
      },
    },
  },
  plugins: [require("daisyui")],
};
