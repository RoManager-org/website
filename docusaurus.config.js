module.exports = {
	title: 'RoManager',
	tagline: 'A free, feature rich and open source Discord-to-Roblox bot.',
	url: 'https://jaydenn.dev',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon:
		'https://cdn.discordapp.com/avatars/738035113815834746/d0383aaa07e3dcc238aaa9cd88bded27.png',
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
			/* logo: {
				src: 'img/logo.svg',
			}, */
			items: [
				/* {
					to: 'dashboard/',
					activeBasePath: 'dashboard',
					label: 'Dashboard',
					position: 'right',
				}, */
				{
					to: 'https://discord.gg/Dan5s9X9jP',
					label: 'Support',
					position: 'right',
				},
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Documentation',
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
			{ customCss: require.resolve('./src/css/custom.css') },
		],
	],
	plugins: [
		'@docusaurus/plugin-content-pages',
		[
			'@docusaurus/plugin-content-docs',
			{
				sidebarPath: require.resolve('./sidebars.js'),
				// Please change this to your repo.
				editUrl: 'https://github.com/jaydensar/RoManager/edit/website',
			},
		],
	],
};
