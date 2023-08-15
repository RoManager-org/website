module.exports = {
	title: "RoManager",
	tagline: "A free, feature-rich Discord-to-Roblox bot.",
	url: "https://romanager.bot",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	favicon: "https://i.jaydensar.net/rmt-min.png",
	organizationName: "RoManager-org", // Usually your GitHub org/user name.
	projectName: "website", // Usually your repo name.
	trailingSlash: false,
	themeConfig: {
		prism: {
			theme: require("prism-react-renderer/themes/vsDark"),
			additionalLanguages: ["lua"],
		},
		colorMode: {
			defaultMode: "dark",
			respectPrefersColorScheme: false,
			disableSwitch: true,
		},
		navbar: {
			hideOnScroll: true,
			title: "RoManager",
			logo: {
				src: "https://i.jaydensar.net/rmt-min.png",
			},
			items: [
				/* {
					to: 'dashboard/',
					activeBasePath: 'dashboard',
					label: 'Dashboard',
					position: 'right',
				}, */
				{
					to: "docs/",
					activeBasePath: "docs",
					label: "Docs",
					position: "right",
				},
				{
					to: "https://romanager.bot/discord",
					label: "Discord Server",
					position: "right",
				},
			],
		},
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} RoManager, LLC.`,
		},
	},
	themes: [
		[
			"@docusaurus/theme-classic",
			{
				customCss: [
					require.resolve("./src/css/custom.css"),
					require.resolve("./src/css/quicksand.css"),
					require.resolve("./src/css/nord.css"),
				],
			},
		],
	],
	plugins: [
		"@docusaurus/plugin-content-pages",
		[
			"@docusaurus/plugin-content-docs",
			{
				sidebarPath: require.resolve("./sidebars.js"),
				// Please change this to your repo.
				editUrl: "https://github.com/RoManager-org/website/edit/main/",
			},
		],
		[
			"@docusaurus/plugin-sitemap",
			{
				changefreq: "weekly",
				priority: 0.5,
			},
		],
	],
	clientModules: [require.resolve("./src/profiles.js")],
};
