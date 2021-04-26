import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
	;<Head>
		<title>Architecture</title>
		<link rel='icon' href='/favicon.ico' />
	</Head>

	// destructured props object
	console.log(`From blogsList: ${allPostsData}`)
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<Header />
				<h1>Blog Posts</h1>
				{/* <div className={styles.scroll}> */}
				<ul className={styles.grid}>
					{allPostsData.map(({ id, date, title, image, excerpt, content }) => (
						<li className={styles.card} key={id}>
							<div>
								<img src={image} width='150' height='150' />
							</div>
							<div className={styles.cardText}>
								<h4>{date}</h4>
								<h3>{title}</h3>
								<h4>{excerpt}</h4>
								{/* <div>dangerouslySetInnerHTML={{ __html: content }}</div> */}
							</div>
						</li>
					))}
				</ul>
				<Footer />
			</div>
			{/* </div> */}
		</div>
	)
}
