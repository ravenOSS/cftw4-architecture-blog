import Head from 'next/head'
import styles from '../styles/Home.module.css'
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

export default function Home({ allPostsData }) {
	// destructured props object
	console.log(allPostsData)
	return (
		<div className={styles.container}>
			<h1>Striking Architecture</h1>
			<h2>Blogs</h2>
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
			</ul>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
