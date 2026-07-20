/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				'iosevka': ['Iosevka Nerd Font', 'sans-serif']
			},
			colors: {
				charcoal: '#242424',
				brick: {
					DEFAULT: '#c04b4b',
					dark: '#622f2f',
					light: '#d95a5a',
				},
				cream: '#ffebcd',
			}
		}
	},
  	plugins: [require("tailwindcss-animate")],
};
