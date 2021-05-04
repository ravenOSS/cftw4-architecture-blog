import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/BlogList.module.css'
import { getSortedPostsData } from '../lib/getPosts' // note import syntax

export async function getStaticProps() {
	// Nextjs built-in function
	const allPostsData = await getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function BlogsListing({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Architecture</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div className={styles.container}>
					<div className={styles.main}>
						<h1>Blog Posts</h1>
						<div className={styles.grid}>
							<ul>
								{allPostsData.map(
									({ id, date, title, thumbnail, heroImage, excerpt }) => (
										<li key={id}>
											<div className={styles.card}>
												<img src={thumbnail} width='150' height='150' />
												<div className={styles.cardText}>
													<h5>{date}</h5>
													<h3>{title}</h3>
													<h4>{excerpt}</h4>
												</div>
											</div>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
