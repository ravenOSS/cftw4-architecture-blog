import styles from './Tweet.module.css'
import Link from 'next/link'

export default function Tweet() {
	return (
		<Link href='https://twitter.com/DavidRi29946190?ref_src=twsrc%5Etfw'>
			<a className='twitter-follow-button' data-show-count='false'>
				Follow @DavidRi29946190
			</a>
			<script
				async
				src='https://platform.twitter.com/widgets.js'
				charset='utf-8'
			></script>
		</Link>
		// <Link
		// 	href='https://twitter.com/intent/tweet?text=Hello%20world'
		// 	data-size='large'
		// >
		// 	<a className='twitter-share-button'>Tweet</a>
		// </Link>
	)
}
