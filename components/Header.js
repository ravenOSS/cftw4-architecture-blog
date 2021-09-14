import Nav from './Nav'
// import Tweet from './Tweet'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<Nav></Nav>
			{/* <Tweet></Tweet> */}
		</header>
	)
}
