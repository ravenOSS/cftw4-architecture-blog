import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content') // __dirname

export async function getSortedPostsData() {
	const fileNames = fs.readdirSync(contentDirectory)

	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '')

		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		const parsedMatter = matter(fileContents)

		return {
			id,
			...parsedMatter.data,
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

export function getAllPostIds() {
	const fileNames = fs.readdirSync(contentDirectory)
	return fileNames.map((fileName) => {
		console.log(fileName)
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export async function getPostData(id) {
	//async
	const fullPath = path.join(contentDirectory, `${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const parsedMatter = matter(fileContents)
	// Use remark to convert markdown to HTML string
	const processedContent = await remark() //async-await
		.use(html)
		.process(parsedMatter.content)
	const contentHtml = processedContent.toString()

	return {
		id,
		...parsedMatter.data,
		contentHtml,
	}
}
