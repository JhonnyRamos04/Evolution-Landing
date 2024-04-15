/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			backgroundImage: {
				'footer-bg': "url('/public/ScanBackground.webp')",
			},
			dropShadow: {
				'emerald': '0 45px 65px rgba(52, 211, 153, 0.25)'
			}
		},
	},
	plugins: [
		require('flowbite/plugin'), animations
	],
}
