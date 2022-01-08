import Layout from "@theme/Layout";
import PropTypes from "prop-types";
import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

function Home(props) {
	return (
		<Layout title={"Captcha"}>
			<main className="center">
				<div>
					<h1>Setup</h1>
					<p>Please complete the captcha to continue.</p>
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

Home.propTypes = {
	location: PropTypes.object,
};

export default Home;
