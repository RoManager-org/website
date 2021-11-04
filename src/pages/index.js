/* eslint-disable no-unused-vars */
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";
/* eslint-enable no-unused-vars */

const features = [
	{
		title: "Group Management",
		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				Quickly rank and exile members, manage group games, accept/deny join
				requests, and more, straight from Discord.
			</>
		),
	},
	{
		title: "Extend your Roblox Group",
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				RoManager extends Roblox's own capabilities. We include a group ban
				feature, where you can ban users from your group, as well as a rank
				locking feature which prevents a user's rank from being changed.
			</>
		),
	},
	{
		title: "Free, forever",
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				RoManager will remain free, for as long as it exists. Both free as in no
				cost, and free as in open-source. You can check out our source-code
				here: https://github.com/RoManager-org/romanager-oss.
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx("col col--4", styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

Feature.propTypes = {
	imageUrl: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.element,
};

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout title={"Home"} description={siteConfig.tagline}>
			<header className={clsx("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<h2 className="hero__subtitle">{siteConfig.tagline}</h2>
					<div className={styles.buttons}>
						<Link
							className={"discord-btn gradient-btn button"}
							to={
								"https://discord.com/api/oauth2/authorize?client_id=738035113815834746&permissions=8&scope=bot"
							}
						>
							<img
								src={"img/logo-discord.svg"}
								className={"gradient-btn-svg"}
								alt=""
							/>
							Add to Discord
						</Link>
						<Link
							className={"github-btn gradient-btn button"}
							to={"https://github.com/RoManager-org"}
						>
							<img
								src={"img/logo-github.svg"}
								className={"gradient-btn-svg"}
								alt=""
							/>
							View on GitHub
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
