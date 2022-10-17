import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
	// eslint-disable-next-line no-undef
	window.$discordMessage = {
		profiles: {
			RoManager: {
				author: "RoManager",
				avatar:
					"https://cdn.discordapp.com/avatars/738035113815834746/9c943bdaadc550fc4d7af38c6d2bc8ba.png",
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
