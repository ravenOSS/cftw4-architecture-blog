import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/getPosts'

export default function Post({ postData }) {
	return (
		<>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<Layout>
				{/* <div className={utilStyles.postContainer}> */}
				<div className={utilStyles.main}>
					{/* <article> */}
					<div className={utilStyles.headingXl}>{postData.title}</div>
					<br />
					<div className={utilStyles.calendar}>
						<Date dateString={postData.date} />
					</div>
					<img
						className={utilStyles.photo}
						src={postData.image}
						width='475'
						height='475'
						alt='{postData.title}'
					/>

					<br />
					<div>Author: {postData.author}</div>
					<div
						className={utilStyles.content}
						dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
					/>
					{/* </article> */}
				</div>
				{/* </div> */}
			</Layout>
		</>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id) // await
	return {
		props: {
			postData,
		},
	}
}

// export async function getStaticPaths() {
// 	const paths = fs
// 		.readdirSync(path.join(process.cwd(), 'content'))
// 		.map((post) => {
// 			const id = post.substring(0, post.length - 3)
// 			return {
// 				params: { id },
// 			}
// 		})
// }
