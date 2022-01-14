import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import React, { useEffect, useState } from "react";

function Captcha(props: { location: { search: string } }) {
	const [description, setDescription] = useState(
		"Please complete the captcha to continue."
	);

	useEffect(() => {
		const handler = (event: MessageEvent) => {
			if (event.data && event.data.captchaState) {
				setDescription(event.data.description);
			}
		};

		// eslint-disable-next-line no-undef
		window.addEventListener("message", handler);

		//eslint-disable-next-line no-undef
		return () => window.removeEventListener("message", handler);
	}, []);

	return (
		<Layout title={"Captcha"}>
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
}

export default Captcha;
