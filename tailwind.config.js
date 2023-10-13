// import { join } from 'path';
// import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
// import { myCustomTheme } from './theme';

/** @type {import('tailwindcss').Config} */
export default {
	// darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}'
		// join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				accent: '#00c784',
				background: '#060A29'
			},
			padding: {
				padding: '5%'
			},
			boxShadow: {
				rect: 'rgba(0, 0, 0, 0.6) 0px 5px 10px',
				glass: 'rgba(0, 0, 0, 0.4) 0px 5px 10px',
				'glass-input': 'rgba(0, 0, 0, 0.4) 0px 3px 5px',
				ring: 'rgba(0, 0, 0, 0.25) 0px 0px 40px 10px'
			},
			dropShadow: {
				ring: '0px 0px 20px rgba(0, 0, 0, 0.9)'
			}
		},
		fontFamily: {
			'gt-walsheim-pro-medium': 'gt-walsheim-pro-medium, sans-serif'
		}
	},
	plugins: [
		forms
		// skeleton({
		// 	themes: { preset: ['skeleton'], custom: [myCustomTheme] }
		// })
	]
};
