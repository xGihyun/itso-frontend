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
	},
	{
		name: 'Login',
		path: '/auth/login'
	}
];

export const CATEGORIES: Map<string, Category> = new Map([
	[
		'category_1',
		{
			name: 'Category 1',
			limit: 1
		}
	],
	[
		'category_2',
		{
			name: 'Category 2',
			limit: 5
		}
	],
	[
		'category_3',
		{
			name: 'Category 3',
			limit: 3
		}
	]
]);
