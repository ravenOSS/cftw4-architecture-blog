import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content') // __dirname
// add async for remark
export async function getSortedPostsData() {
	// Get the posts filenames
	const fileNames = fs.readdirSync(contentDirectory)

	const allPostsData = fileNames.map((fileName) => {
		// Remove .md file extension to create unique file id
		const id = fileName.replace(/\.md$/, '')

		// Read the markdown content
		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Parse file metadata (frontmatter) with gray-matter
		const parsedMatter = matter(fileContents)

		// const remarkContent = await remark().use(html).process(parsedMatter.content)
		// const contentHtml = remarkContent.toString()

		return {
			id,
			...parsedMatter.data,
			// contentHtml,
		}
	})

	// Sort blog posts by date
	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1
		} else {
			return -1
		}
	})
}
