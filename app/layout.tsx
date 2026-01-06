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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          function toggleMenu() {
            const sheet = document.getElementById('mobile-sheet');
            const backdrop = document.getElementById('mobile-backdrop');
            const isOpen = sheet.classList.contains('translate-y-0');
            
            if (isOpen) {
              sheet.classList.remove('translate-y-0');
              sheet.classList.add('translate-y-full');
              backdrop.classList.add('hidden');
              document.body.style.overflow = '';
            } else {
              sheet.classList.remove('translate-y-full');
              sheet.classList.add('translate-y-0');
              backdrop.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
            }
          }
          
          function closeMenu() {
            const sheet = document.getElementById('mobile-sheet');
            const backdrop = document.getElementById('mobile-backdrop');
            sheet.classList.remove('translate-y-0');
            sheet.classList.add('translate-y-full');
            backdrop.classList.add('hidden');
            document.body.style.overflow = '';
          }
        `}} />
      </head>
      <body>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
          <div className="h-full px-6 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              BIAS Writer
            </Link>
            <div className="flex gap-6 items-center text-sm">
              <a href="https://bias.pub" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="https://www.youtube.com/@BIASLLCApps" className="text-gray-600 hover:text-blue-600 hidden sm:block" target="_blank" rel="noopener">
                Tutorials
              </a>
              <a href="mailto:support@bias.pub?subject=BIAS%20Writer%20Support" className="text-gray-600 hover:text-blue-600 hidden sm:block">
                Support
              </a>
            </div>
          </div>
        </header>

        {/* Layout */}
        <div className="flex mt-16 min-h-screen">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block fixed left-0 w-64 h-[calc(100vh-4rem)] bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <nav className="p-6">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
                Contents
              </div>
              
              <ul className="space-y-1">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <a
                      href={'#' + chapter.id}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                    >
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:ml-64 flex-1 p-6 lg:p-8 max-w-4xl pb-24 lg:pb-8">
            {children}
          </main>
        </div>

        {/* Mobile Bottom Sheet Backdrop */}
        <div 
          id="mobile-backdrop"
          className="lg:hidden fixed inset-0 bg-black/50 z-40 hidden"
          onClick={() => closeMenu()}
        />

        {/* Mobile Bottom Sheet */}
        <div 
          id="mobile-sheet"
          className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform translate-y-full transition-transform duration-300 ease-out max-h-[80vh] overflow-hidden"
        >
          {/* Handle */}
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          </div>
          
          {/* Sheet Content */}
          <div className="px-6 pb-6 overflow-y-auto max-h-[calc(80vh-4rem)]">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
              Contents
            </div>
            
            <ul className="space-y-1">
              {chapters.map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={'#' + chapter.id}
                    onClick={() => closeMenu()}
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition active:bg-blue-100"
                  >
                    {chapter.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => toggleMenu()}
          className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30 active:bg-blue-700 transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Footer */}
        <footer className="lg:ml-64 border-t border-gray-200 bg-gray-50 py-8 px-6 lg:px-8 text-center text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4">
            <a href="https://bias.pub" className="hover:text-blue-600">
              Website
            </a>
            <a href="https://www.youtube.com/@BIASLLCApps" className="hover:text-blue-600" target="_blank" rel="noopener">
              YouTube Tutorials
            </a>
            <a href="mailto:support@bias.pub?subject=BIAS%20Writer%20Support" className="hover:text-blue-600">
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
