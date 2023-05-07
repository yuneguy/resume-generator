import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Navbar } from '~/components';

import type { WithChildren, WithProps } from '~/types';

type SeoProps = WithProps<typeof NextSeo>;

interface BasicLayoutProps extends WithChildren, Partial<SeoProps> {}

const title = 'Nextwind';
const description = 'Bootstrap Next.js with WindiCSS & more';

export function BasicLayout({ children, ...rest }: BasicLayoutProps) {
	const router = useRouter();

	const origin = typeof window !== 'undefined' ? window.location.origin : '';
	const defaultSeo: Partial<SeoProps> = {
		title,
		description,
		canonical: `${origin}/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'yune',
			url: `${origin}/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
	};

	return (
		<>
			<NextSeo {...Object.assign(defaultSeo, rest)} />
      <Navbar.Standard />
			{children}
		</>
	);
}
