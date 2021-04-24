import Nav from './Nav'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<Nav></Nav>
		</header>
	)
}
