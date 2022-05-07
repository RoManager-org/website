import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";

const Captcha = (props: { location: { search: string } }) => {
	const [description, setDescription] = useState(
		"Please complete the captcha to continue."
	);

	useEffect(() => {
		if (ExecutionEnvironment.canUseDOM) {
			const handler = (event: MessageEvent) => {
				if (event.data && event.data.captchaState) {
					setDescription(event.data.description);
				}
			};

			window.addEventListener("message", handler);

			return () => window.removeEventListener("message", handler);
		}
	}, []);

	return (
		<Layout title={"Captcha"}>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<main className="center">
				<div>
					<h1>Setup</h1>
					<p>{description}</p>
					<BrowserOnly>
						{() => (
							<iframe
								src={`https://captcha.romanager.bot/?taskId=${new URLSearchParams(
									props.location.search
								).get("taskId")}`}
								className="captcha-frame"
							></iframe>
						)}
					</BrowserOnly>
				</div>
			</main>
		</Layout>
	);
};

export default Captcha;
