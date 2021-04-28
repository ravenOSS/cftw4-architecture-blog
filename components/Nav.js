import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav() {
	return (
		// <div>
		<ul className={styles.nav}>
			<li>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href='/blogsListing'>
					<a>Blogs</a>
				</Link>
			</li>
			<li>
				<Link href='/profile'>
					<a>Profile</a>
				</Link>
			</li>
		</ul>
		// </div>
	)
}
