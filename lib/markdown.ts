import fs from 'fs'
import path from 'path'
import { marked } from 'marked'

export interface TOCEntry {
  id: string
  title: string
}

export interface RenderedGuide {
  html: string
  toc: TOCEntry[]
  title: string
}

export function slugify(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim()
}

export function loadGuide(slug: string): RenderedGuide {
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`)
  const source = fs.readFileSync(filePath, 'utf8')

  const renderer = new marked.Renderer()
  renderer.heading = function (text, level, raw) {
    const id = slugify(raw)
    return `<h${level} id="${id}">${text}</h${level}>\n`
  }

  const html = marked.parse(source, { renderer, async: false }) as string

  const toc: TOCEntry[] = []
  let title = ''
  let inFence = false
  for (const line of source.split('\n')) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const m = /^(#{1,2})\s+(.+?)\s*$/.exec(line)
    if (!m) continue
    const level = m[1].length
    const text = m[2].trim()
    if (level === 1 && !title) {
      title = text
    } else if (level === 2) {
      toc.push({ id: slugify(text), title: text })
    }
  }

  return { html, toc, title }
}
