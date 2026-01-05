import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BIAS Writer - User Guide',
  description: 'Complete user guide for BIAS Writer with features, workflows, and best practices',
}

const chapters = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'core-concepts', title: 'Core Concepts' },
  { id: 'annotation-syntax', title: 'Annotation Syntax' },
  { id: 'the-find-panel', title: 'The Find Panel' },
  { id: 'two-stage-filtering-patent-pending', title: 'Two-Stage Filtering' },
  { id: 'document-management', title: 'Document Management' },
  { id: 'project-organization', title: 'Project Organization' },
  { id: 'export-features', title: 'Export Features' },
  { id: 'markdown-guide', title: 'Markdown Guide' },
  { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
  { id: 'use-cases--workflows', title: 'Use Cases & Workflows' },
  { id: 'tips--best-practices', title: 'Tips & Best Practices' },
  { id: 'getting-help', title: 'Getting Help' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
          <div className="h-full px-6 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              BIAS Writer
            </Link>
            <div className="flex gap-6 items-center text-sm">
              <a href="https://bias.pub" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="https://www.youtube.com/@BIASLLCApps" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener">
                Tutorials
              </a>
              <a href="mailto:support@bias.pub" className="text-gray-600 hover:text-blue-600">
                Support
              </a>
            </div>
          </div>
        </header>

        <div className="flex mt-16 min-h-screen">
          <aside className="fixed left-0 w-64 h-[calc(100vh-4rem)] bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <nav className="p-6">
              <div className="mb-6">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                Contents
              </div>
              
              <ul className="space-y-1">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    
                      href={`#${chapter.id}`}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                    >
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <main className="ml-64 flex-1 p-8 max-w-4xl">
            {children}
          </main>
        </div>

        <footer className="ml-64 border-t border-gray-200 bg-gray-50 py-8 px-8 text-center text-sm text-gray-600">
          <div className="flex justify-center gap-8 mb-4">
            <a href="https://bias.pub" className="hover:text-blue-600">
              Website
            </a>
            <a href="https://www.youtube.com/@BIASLLCApps" className="hover:text-blue-600" target="_blank" rel="noopener">
              YouTube Tutorials
            </a>
            <a href="mailto:support@bias.pub" className="hover:text-blue-600">
              Support
            </a>
            <a href="mailto:info@bias.pub" className="hover:text-blue-600">
              Contact
            </a>
          </div>
          <div>
            <p className="mb-1">© 2025 BIAS LLC. All rights reserved.</p>
            <p className="text-xs text-gray-500">Patent Pending - U.S. Application No. 63/949,099</p>
          </div>
        </footer>
      </body>
    </html>
  )
}