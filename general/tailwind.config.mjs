/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ["SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",'sans-serif'],
			'mono': ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
		},
		colors: {
			'white': '#fefefe',
			// 'black': '#010309',
			'black': '#121212',
			'mateblue': '#013780',
			'mateviolet': '#CA05B4',
			"mustard": {
				50: "oklch(97.35% 0.018 89.36 / <alpha-value>)",
				100: "oklch(95.12% 0.031 86.46 / <alpha-value>)",
				200: "oklch(89.54% 0.064 84.93 / <alpha-value>)",
				300: "oklch(84.43% 0.091 83.03 / <alpha-value>)",
				400: "oklch(79.05% 0.115 79.51 / <alpha-value>)",
				500: "oklch(73.27% 0.136 73.92 / <alpha-value>)",
				600: "oklch(64.74% 0.126 75.55 / <alpha-value>)",
				700: "oklch(52.74% 0.1 78.52 / <alpha-value>)",
				800: "oklch(39.69% 0.073 80.49 / <alpha-value>)",
				900: "oklch(26.54% 0.045 82.7 / <alpha-value>)",
				950: "oklch(17.68% 0.026 85.78 / <alpha-value>)"
			}
		},
		extend: {
			"colors": {
				"blue": {
					50: "oklch(95.35% 0.021 274.04 / <alpha-value>)",
					100: "oklch(90.76% 0.042 275.14 / <alpha-value>)",
					200: "oklch(80.57% 0.091 273.19 / <alpha-value>)",
					300: "oklch(71.91% 0.137 271.1 / <alpha-value>)",
					400: "oklch(62.89% 0.186 268.01 / <alpha-value>)",
					500: "oklch(55.64% 0.228 265 / <alpha-value>)",
					600: "oklch(46.39% 0.25 264.28 / <alpha-value>)",
					700: "oklch(37.79% 0.203 264.5 / <alpha-value>)",
					800: "oklch(28.07% 0.148 265.04 / <alpha-value>)",
					900: "oklch(19.04% 0.09 265.68 / <alpha-value>)",
					950: "oklch(13.39% 0.053 263.31 / <alpha-value>)"
				},
				"gray": {
					50: "oklch(93.57% 0.004 301.42 / <alpha-value>)",
					100: "oklch(87.14% 0.007 286.26 / <alpha-value>)",
					200: "oklch(74.51% 0.014 290.65 / <alpha-value>)",
					300: "oklch(60.49% 0.023 285.71 / <alpha-value>)",
					400: "oklch(47.55% 0.019 285.65 / <alpha-value>)",
					500: "oklch(33.17% 0.012 285.71 / <alpha-value>)",
					600: "oklch(29.15% 0.011 285.71 / <alpha-value>)",
					700: "oklch(24.1% 0.008 285.82 / <alpha-value>)",
					800: "oklch(20.11% 0.004 286.04 / <alpha-value>)",
					900: "oklch(14.52% 0.002 286.13 / <alpha-value>)",
					950: "oklch(11.49% 0 NaN / <alpha-value>)"
				},
			}
		},
	},
	plugins: [],
}
