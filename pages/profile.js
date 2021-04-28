import Layout from '../components/Layout'
// import styles from '../styles/Profile.module.css'

export default function Profile() {
	return (
		<Layout>
			<div>
				<h1>This is the Profile Page</h1>
			</div>
			<style jsx>{`
				h1,
				div {
					text-align: center;
					padding-top: 50px;
				}
			`}</style>
		</Layout>
	)
}
