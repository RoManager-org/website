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
		title: 'Automation',
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				RoManager includes an XP system; rank members based on Discord
				activity, in-game activity, or programmatically through the API.
			</>
		),
	},
	{
		title: 'In-game Moderation',
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: <>Kick, ban or send messages in-game through Discord.</>,
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
			title={`${siteConfig.title}`}
			description="A free, feature-rich and open-source Discord-to-Roblox bot."
		>
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
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
							/>
							Add to Discord
						</Link>
						<Link
							className={clsx(
								'github-btn gradient-btn button',
								styles.getStarted,
							)}
							to={'https://github.com/jaydensar/RoManager'}
						>
							<img
								src={'img/logo-github.svg'}
								className={clsx('gradient-btn-svg')}
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
