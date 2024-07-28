/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	screens: {
		'sm': '320px',
		'md': '478px',
		'lg': '768px',
		'xl': '1024px',
		'2xl': '1280px',
		'3xl': '1440px',
	},
	fontFamily: {
		'sans': ['Inter', 'sans-serif'],
	},
    extend: {},
  },
  plugins: [
  ],
}
