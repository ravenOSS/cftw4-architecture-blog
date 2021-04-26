import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/getPosts' // note import syntax

// Nextjs built-in function
export async function getStaticProps() {
	const allPostsData = await getSortedPostsData()
	return {
		props: {
			allPostsData,
			date,
		},
	}
}

export default function Home({ allPostsData }) {
	;<Head>
		<title>Architecture</title>
		<link rel='icon' href='/favicon.ico' />
	</Head>

	// destructured props object
	console.log(allPostsData)
	return (
		<div className={styles.container}>
			<Header />
			<h1>Striking Architecture</h1>
			<ul className='postsList'>
				{allPostsData.map(({ id, date, title, image, excerpt, content }) => (
					<li key={id}>
						<h4>{date}</h4>
						<h3>{title}</h3>
						<img src={image} width='400' height='400' />
						<h4>{excerpt}</h4>
						{/* <div>dangerouslySetInnerHTML={{ __html: content }}</div> */}
					</li>
				))}
				<div className={styles.grid}>
					<a href='https://nextjs.org/docs' className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href='https://nextjs.org/learn' className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href='https://github.com/vercel/next.js/tree/master/examples'
						className={styles.card}
					>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</ul>

			<Footer />
		</div>
	)
}
