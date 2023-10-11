/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: []
};
