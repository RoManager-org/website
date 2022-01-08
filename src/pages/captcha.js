import Layout from "@theme/Layout";
import PropTypes from "prop-types";
import React from "react";

function Home(props) {
	return (
		<Layout title={"Captcha"}>
			<main className="center">
				<div>
					<h1>Setup</h1>
					<p>Please complete the captcha to continue.</p>
					<iframe
						src={`https://captcha.romanager.bot/${props.location.search}`}
						className="captcha-frame"
					></iframe>
				</div>
			</main>
		</Layout>
	);
}

Home.propTypes = {
	location: PropTypes.object,
};

export default Home;
