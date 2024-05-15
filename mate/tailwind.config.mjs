/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark': '#03040C',
				'white': '#fefefe',
				'black': '#000',
				'gradient1': '#013780',
				'gradient2': '#CA05B4',
			},
			fontFamily: {
				'sans': ['Inter', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
