import Header from '../components/Header'
import Footer from '../components/Footer'
import BasicMeta from './meta/BasicMeta'
import OpenGraphMeta from './meta/OpenGraphMeta'
import TwitterCardMeta from './meta/TwitterCardMeta'

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<BasicMeta />
			<OpenGraphMeta />
			<TwitterCardMeta />

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
