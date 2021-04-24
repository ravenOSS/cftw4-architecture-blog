import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Blog.module.css'

export default function Blog() {
	return (
		<div className={styles.container}>
			<Header />
			<h1>This is the Blog Page</h1>
			<Footer />
		</div>
	)
}
