import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				title: ['Recoleta', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'fivegreen': {
					'50': '#edfcf6',
					'100': '#d3f8e6',
					'200': '#aaf0d3',
					'300': '#73e2ba',
					'400': '#3bcc9d',
					'500': '#1ac593',
					'600': '#0b906c',
					'700': '#097359',
					'800': '#0a5b47',
					'900': '#094b3d',
					'950': '#042a22',
				},
				'fiveblue': {
					'50': '#eef7ff',
					'100': '#d9ecff',
					'200': '#bbdeff',
					'300': '#8ccaff',
					'400': '#55abff',
					'500': '#2e87ff',
					'600': '#1968f9',
					'700': '#1050e5',
					'800': '#1442b9',
					'900': '#163b92',
					'950': '#132658',
				},
			},
		},
		plugins: [],
	}
};
