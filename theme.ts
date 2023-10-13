import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #ff3c9e
		'--color-primary-50': '255 226 240', // #ffe2f0
		'--color-primary-100': '255 216 236', // #ffd8ec
		'--color-primary-200': '255 206 231', // #ffcee7
		'--color-primary-300': '255 177 216', // #ffb1d8
		'--color-primary-400': '255 119 187', // #ff77bb
		'--color-primary-500': '255 60 158', // #ff3c9e
		'--color-primary-600': '230 54 142', // #e6368e
		'--color-primary-700': '191 45 119', // #bf2d77
		'--color-primary-800': '153 36 95', // #99245f
		'--color-primary-900': '125 29 77', // #7d1d4d
		// secondary | #f6d32d
		'--color-secondary-50': '254 248 224', // #fef8e0
		'--color-secondary-100': '253 246 213', // #fdf6d5
		'--color-secondary-200': '253 244 203', // #fdf4cb
		'--color-secondary-300': '251 237 171', // #fbedab
		'--color-secondary-400': '249 224 108', // #f9e06c
		'--color-secondary-500': '246 211 45', // #f6d32d
		'--color-secondary-600': '221 190 41', // #ddbe29
		'--color-secondary-700': '185 158 34', // #b99e22
		'--color-secondary-800': '148 127 27', // #947f1b
		'--color-secondary-900': '121 103 22', // #796716
		// tertiary | #e01b24
		'--color-tertiary-50': '250 221 222', // #faddde
		'--color-tertiary-100': '249 209 211', // #f9d1d3
		'--color-tertiary-200': '247 198 200', // #f7c6c8
		'--color-tertiary-300': '243 164 167', // #f3a4a7
		'--color-tertiary-400': '233 95 102', // #e95f66
		'--color-tertiary-500': '224 27 36', // #e01b24
		'--color-tertiary-600': '202 24 32', // #ca1820
		'--color-tertiary-700': '168 20 27', // #a8141b
		'--color-tertiary-800': '134 16 22', // #861016
		'--color-tertiary-900': '110 13 18', // #6e0d12
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #0a1148
		'--color-surface-50': '218 219 228', // #dadbe4
		'--color-surface-100': '206 207 218', // #cecfda
		'--color-surface-200': '194 196 209', // #c2c4d1
		'--color-surface-300': '157 160 182', // #9da0b6
		'--color-surface-400': '84 88 127', // #54587f
		'--color-surface-500': '10 17 72', // #0a1148
		'--color-surface-600': '9 15 65', // #090f41
		'--color-surface-700': '8 13 54', // #080d36
		'--color-surface-800': '6 10 43', // #060a2b
		'--color-surface-900': '5 8 35' // #050823
	}
};
