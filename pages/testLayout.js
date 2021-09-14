import Layout from '../components/Layout'

export default function TestPage() {
	return (
		<Layout>
			<div>
				<h1>This is the testLayout</h1>
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
