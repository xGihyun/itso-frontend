import type { Category, Route } from './types';

export const ROUTES: Route[] = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'About',
		path: '/about'
	},
	{
		name: 'Register',
		path: '/register'
	}
	// {
	// 	name: 'Login',
	// 	path: '/auth/login'
	// },
	// {
	// 	name: 'Admin',
	// 	path: '/admin'
	// }
];

export const CATEGORIES: Map<string, Category> = new Map([
	[
		'java',
		{
			name: 'Java',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'c_sharp',
		{
			name: 'C#',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'cybersec',
		{
			name: 'Cyber Security',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'webdes',
		{
			name: 'Website Design',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'compnet',
		{
			name: 'Computer Networking',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'digilec',
		{
			name: 'Digital Electronics',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'itquizbee',
		{
			name: 'IT Quiz Bee',
			limit: {
				min: 1,
				max: 1
			}
		}
	],
	[
		'pcda',
		{
			name: 'PC Disassembly and Assembly',
			limit: {
				min: 1,
				max: 1
			}
		}
	],

	[
		'andrproductivity',
		{
			name: 'Android (PRODUCTIVITY)',
			limit: {
				min: 2,
				max: 3
			}
		}
	],
	[
		'andrgame',
		{
			name: 'Android (GAME)',
			limit: {
				min: 2,
				max: 3
			}
		}
	],
	[
		'andriot',
		{
			name: 'Android (IOT)',
			limit: {
				min: 2,
				max: 3
			}
		}
	],
	[
		'andrmicro',
		{
			name: 'Android (MICROFINANCE)',
			limit: {
				min: 2,
				max: 3
			}
		}
	],
	[
		'esport',
		{
			name: 'E-sport',
			limit: {
				min: 5,
				max: 5
			}
		}
	]
]);
