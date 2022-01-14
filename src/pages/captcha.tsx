import BrowserOnly from "@docusaurus/BrowserOnly";
import Layout from "@theme/Layout";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function Captcha(props) {
	const [description, setDescription] = useState(
		"Please complete the captcha to continue."
	);

	useEffect(() => {
			{() => {
				const handler = (event: MessageEvent) => {
					setDescription(event.data);
				};

				// eslint-disable-next-line no-undef
				window.addEventListener("message", handler);

				// eslint-disable-next-line no-undef
				return () => window.removeEventListener("message", handler);
			}}
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

Captcha.propTypes = {
	location: PropTypes.object,
};

export default Captcha;
