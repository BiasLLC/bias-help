import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

// This will be a server component that reads and renders the markdown
export default async function Home() {
  // Read the USER_FEATURES.md file
  const filePath = path.join(process.cwd(), 'content', 'user-guide.md')
  let content = ''
  
  try {
    content = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    content = '# Welcome to BIAS Writer Help\n\nDocumentation is being set up...'
  }

  // Convert markdown to HTML
  const htmlContent = marked(content)

  return (
    <article 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
