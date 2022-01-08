import Layout from "@theme/Layout";
import PropTypes from "prop-types";
import React from "react";
import { URLSearchParams } from "url";

function Home(props) {
	const frameUrl = `https://captcha.romanager.bot/?taskId=${new URLSearchParams(
		props.location.search
	).get("taskId")}`;
	return (
		<Layout title={"Captcha"}>
			<main className="center">
				<div>
					<h1>Setup</h1>
					<p>Please complete the captcha to continue.</p>
					<iframe src={frameUrl} className="captcha-frame"></iframe>
				</div>
			</main>
		</Layout>
	);
}

Home.propTypes = {
	location: PropTypes.object,
};

export default Home;
