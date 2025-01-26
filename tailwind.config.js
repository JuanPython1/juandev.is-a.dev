/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'iosevka': ['Iosevka Nerd Font', 'sans-serif']
			}
		}
	},
  	plugins: [require("tailwindcss-animate")],
};
