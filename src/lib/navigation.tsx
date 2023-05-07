import { useTheme } from 'next-themes';

import { NavigationItemType, ThemeType } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:home',
			text: 'Главная',
			href: '/',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:edit-3',
			text: 'Блог',
			href: '/blog',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:copy',
			text: 'Проекты',
			href: '/projects',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: 'Таймлайн',
			href: '/timeline',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:link',
			text: 'Резюме',
			href: '/resume',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:send',
			text: 'Телеграм',
			href: 'https://t.me/yuneguy',
			external: true,
		},
    {
			type: NavigationItemType.LINK,
			icon: 'feather:user',
			text: 'Вконтакте',
			href: 'https://vk.com/che_tam_s_bashkoj',
			external: true,
		},
    {
			type: NavigationItemType.LINK,
			icon: 'feather:git-pull-request',
			text: 'Codeberg',
			href: 'https://codeberg.org/yuneguy',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:github',
			text: 'GitHub',
			href: 'https://github.com/yuneguy',
			external: true,
		},
	],
];

export function useNavigation(): {
	menu: NavigationItems;
	settings: NavigationItems;
} {
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
	];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				text: 'Системная тема',
				onClick: () => setTheme(ThemeType.DARK),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				text: 'Светлая тема',
				onClick: () => setTheme(ThemeType.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				text: 'Темная тема',
				onClick: () => setTheme(ThemeType.DARK),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}
