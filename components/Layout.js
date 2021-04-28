import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
			<style jsx>{`
				main {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			`}</style>
		</>
	)
}
