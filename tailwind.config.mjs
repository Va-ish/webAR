/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					0: '#FFFFFF',
					50: '#E9F5EB',
					100: '#8F9FAB',
					500: '#8F9FAB',
					600: '#50626D',
					700: '#2E363E',
					800: '#181D21',
					900: '#111111'
				}
			},
			fontFamily: {
				sans: ['Manrope Variable', ...defaultTheme.fontFamily.sans],
			},
			cursor: {
				default: "url('/cursors/default.svg'), auto",
				grab: "url('/cursors/grab.svg'), grab",
				grabbing: "url('/cursors/grabbed.svg'), grabbing",
				pointer: "url('/cursors/point.svg'), pointer",
				text: "url('/cursors/text.svg'), text",
			}
		},
	},
	plugins: [],
}
