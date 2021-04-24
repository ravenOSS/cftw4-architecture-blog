import styles from './Nav.module.css'
import Link from 'next/Link'

export default function Nav() {
	return (
		<ul className={styles.nav}>
			<li>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href='/profile'>
					<a>Profile</a>
				</Link>
			</li>
			<li>
				<Link href='/blog'>
					<a>Blog</a>
				</Link>
			</li>
		</ul>
	)
}
