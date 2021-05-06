import Head from 'next/head'
import config from '../../config.json'

export default function BasicMeta({
	title,
	description,
	keywords,
	author,
	url,
}) {
	return (
		<Head>
			<title>{config.site_title}</title>
			<meta name='description' content={config.site_description} />
			<meta
				name='keywords'
				content={
					keywords
						? keywords.join(',')
						: config.site_keywords.map((it) => it.keyword).join(',')
				}
			/>
			{author ? <meta name='author' content={author} /> : null}
			<link rel='canonical' href={config.base_url} />
		</Head>
	)
}
