import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

// Configure marked to add IDs to headings
const renderer = new marked.Renderer()
const originalHeading = renderer.heading.bind(renderer)

renderer.heading = function(text, level, raw) {
  // Generate ID from heading text
  const id = raw
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single
    .trim()
  
  return `<h${level} id="${id}">${text}</h${level}>\n`
}

marked.setOptions({ renderer })

export default async function Home() {
  const filePath = path.join(process.cwd(), 'content', 'user-guide.md')
  let content = ''
  
  try {
    content = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    content = '# Welcome to BIAS Writer Help\n\nDocumentation is being set up...'
  }

  // Convert markdown to HTML with custom renderer
  const htmlContent = marked(content)

  return (
    <article 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}