import defaultTheme from 'windicss/defaultTheme';
import { defineConfig } from 'windicss/helpers';

import { colors } from './src/lib/colors';

export default defineConfig({
	darkMode: 'class',
	extract: {
		include: ['**/*.{jsx,tsx,css}'],
		exclude: ['node_modules', '.git', '.next'],
	},
	shortcuts: {
		'default-focus':
			'focus:(outline-none ring-4 ring-offset-4 dark:ring-offset-gray-900 ring-primary-500)',
		'default-transition': 'transition ease-in-out duration-300',
	},
	theme: {
		extend: {
			backgroundOpacity: {
				15: '0.15',
			},
			colors,
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			saturate: {
				DEFAULT: {
					200: 'saturate(2)',
				},
			},
			transformOrigin: {
				70: '70% 70%',
			},
			typography: {
				DEFAULT: {
					css: {
						img: {
							maxWidth: '100%',
						},
					},
				},
			},
		},
  },
});
