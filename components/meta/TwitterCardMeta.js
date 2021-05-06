import Head from 'next/head'
import config from '../../config.json'

export default function TwitterCardMeta({ url, title, description }) {
	return (
		<Head>
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:site' content={config.twitter_account} />
			<meta property='twitter:url' content={config.base_url + url} />
			<meta property='twitter:title' content={config.site_title} />
			<meta property='twitter:creator' content={config.twitter_account} />
			<meta property='twitter:description' content={config.site_description} />
		</Head>
	)
}
