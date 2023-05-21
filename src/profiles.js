import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
	// eslint-disable-next-line no-undef
	window.$discordMessage = {
		profiles: {
			RoManager: {
				author: "RoManager",
				avatar:
					"https://cdn.discordapp.com/avatars/738035113815834746/1faadb9140b7d1d05b7ecd02f04a223f.webp",
				bot: true,
				verified: true,
			},
			you: {
				author: "You",
				avatar: "https://cdn.discordapp.com/embed/avatars/5.png",
			},
		},
	};
}
