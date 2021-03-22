module.exports = {
	title: 'RoManager',
	tagline: 'A free, feature-rich Discord-to-Roblox bot.',
	url: 'https://romanager.jaydenn.dev',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'https://i.jaydenn.dev/rmt.png',
	organizationName: 'RoManager-org', // Usually your GitHub org/user name.
	projectName: 'website', // Usually your repo name.
	themeConfig: {
		prism: {
			additionalLanguages: ['lua'],
		},
		colorMode: {
			defaultMode: 'dark',
			respectPrefersColorScheme: false,
			disableSwitch: true,
		},
		navbar: {
			hideOnScroll: true,
			title: 'RoManager',
			logo: {
				src: 'https://i.jaydenn.dev/rmt.png',
			},
			items: [
				/* {
					to: 'dashboard/',
					activeBasePath: 'dashboard',
					label: 'Dashboard',
					position: 'right',
				}, */
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right',
				},
				{
					to: 'https://jaydenn.dev/romanager-discord',
					label: 'Discord Server',
					position: 'right',
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} jaydensar`,
		},
	},
	themes: [
		[
			'@docusaurus/theme-classic',
			{
				customCss: [
					require.resolve('./src/css/custom.css'),
					require.resolve('./src/css/quicksand.css'),
					require.resolve('./src/css/nord.css'),
				],
			},
		],
	],
	plugins: [
		'@docusaurus/plugin-content-pages',
		[
			'@docusaurus/plugin-content-docs',
			{
				sidebarPath: require.resolve('./sidebars.js'),
				// Please change this to your repo.
				editUrl: 'https://github.com/RoManager-org/website/edit/main/',
			},
		],
		[
			'@docusaurus/plugin-sitemap',
			{
				changefreq: 'weekly',
				priority: 0.5,
				trailingSlash: false,
			},
		],
	],
	scripts: [
		{
			src: 'https://science.jaydensar.net/umami.js',
			async: true,
			defer: true,
			'data-website-id': '3d11690f-43db-47de-a895-d81345623235',
		},
	],
};
