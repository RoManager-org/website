import clsx from 'clsx';
import React from 'react';
import Layout from '@theme/Layout';
import PropTypes from 'prop-types';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const features = [
	{
		title: 'Group Management',
		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				Quickly rank and exile members, manage group games, accept/deny
				join requests, and more, straight from Discord.
			</>
		),
	},
	{
		title: 'In-Game Moderation',
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				Kick, ban, shutdown the game, and send in-game announcements,
				from Discord, effortlessly, with RoManager. We also plan to have
				a plugin system, where you can easily add your own custom
				in-game functions and commands.
			</>
		),
	},
	{
		title: 'Free, forever',
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				RoManager will remain free, for as long as it exists. We have
				open sourced some components of the bot, and plan to go fully
				open source mid-2021.
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img
						className={styles.featureImage}
						src={imgUrl}
						alt={title}
					/>
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
		<Layout
			title={'Home'}
			description="A free, feature-rich and open-source Discord-to-Roblox bot."
		>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<h2 className="hero__subtitle">{siteConfig.tagline}</h2>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								'discord-btn gradient-btn button',
								styles.getStarted,
							)}
							to={
								'https://discord.com/api/oauth2/authorize?client_id=738035113815834746&permissions=8&scope=bot'
							}
						>
							<img
								src={'img/logo-discord.svg'}
								className={clsx('gradient-btn-svg')}
								alt=""
							/>
							Add to Discord
						</Link>
						<Link
							className={clsx(
								'github-btn gradient-btn button',
								styles.getStarted,
							)}
							to={'https://github.com/RoManager-org'}
						>
							<img
								src={'img/logo-github.svg'}
								className={clsx('gradient-btn-svg')}
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
