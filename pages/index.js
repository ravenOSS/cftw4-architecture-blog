import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/getPosts' // note import syntax

// Nextjs built-in function
export async function getStaticProps() {
	const allPostsData = await getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default function Home({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Architecture</title>
				<link rel='icon' href='/favicon.ico' />
				<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			</Head>
			<Layout>
				<div className={styles.maincontent}>
					<h1>Striking Architecture</h1>
					<h2>Photographers' Perspectives</h2>
					{/* <div className={styles.grid}> */}
					<ul>
						{allPostsData.map(({ id, date, title, thumbnail, excerpt }) => (
							<li key={id}>
								<Link href={`/posts/${id}`}>
									<div className={styles.card}>
										<img src={thumbnail} width='150' height='150' />
										<div className={styles.cardText}>
											<h5>{date}</h5>
											<h3>{title}</h3>
											<h4>{excerpt}</h4>
										</div>
									</div>
								</Link>
							</li>
						))}
					</ul>
					{/* </div> */}
				</div>
			</Layout>
		</>
	)
}
