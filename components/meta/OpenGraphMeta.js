import Head from 'next/head'
import config from '../../config.json'

export default function OpenGraphMeta() {
	return (
		<Head>
			<meta property='og:site_name' content={config.site_title} />
			<meta property='og:url' content={config.base_url} />
			{/* <meta property='og:url' content={config.base_url + url} /> */}
			<meta property='og:title' content={config.site_title} />
			<meta property='og:description' content={config.site_description} />
			<meta
				property='og:image'
				content={config.base_url + '/images/og_image.png'}
			/>
			<meta property='og:type' content='article' />
		</Head>
	)
}
