import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

const features = [
	{
		title: "Group Management",
		description: (
			<>
				Quickly rank and exile members, manage group games, accept/deny join
				requests, and more, straight from Discord.
			</>
		),
	},
	{
		title: "Automation",
		description: (
			<>
				RoManager extends Roblox&apos;s own features with automation.
				Automatically exile members, effectively banning them, or lock their
				rank, preventing it from being changed.
			</>
		),
	},
	{
		title: "Free, forever",
		description: (
			<>
				RoManager will remain free, forever. Both free as in free-to-use, and{" "}
				<Link to="https://github.com/RoManager-org/romanager-oss">
					free as in open-source
				</Link>
				, allowing you to host your own version.
			</>
		),
	},
];

const Feature = ({
	title,
	description,
}: {
	title: string;
	description: JSX.Element;
}) => (
	<div className={clsx("col col--4", styles.feature)}>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
);

const Home = () => {
	const { siteConfig } = useDocusaurusContext();

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
};

export default Home;
