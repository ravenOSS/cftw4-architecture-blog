import styles from './Tweet.module.css'
import Link from 'next/link'

export default function Tweet() {
	return (
		<Link
			href='https://twitter.com/intent/tweet?text=Hello%20world'
			data-size='large'
		>
			<a className='twitter-share-button'>Tweet</a>
		</Link>
	)
}
