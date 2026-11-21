import { loadGuide } from '@/lib/markdown'
import MobileTOC from './MobileTOC'

interface GuideLayoutProps {
  slug: string
}

export default function GuideLayout({ slug }: GuideLayoutProps) {
  const { html, toc } = loadGuide(slug)

  return (
    <div className="flex w-full" id="top">
      {/* Desktop sidebar TOC */}
      <aside className="hidden lg:block fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-gray-50 border-r border-gray-200 overflow-y-auto">
        <nav className="p-6">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
            On this page
          </div>
          <ul className="space-y-1">
            {toc.map((entry) => (
              <li key={entry.id}>
                <a
                  href={'#' + entry.id}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
                >
                  {entry.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="#top"
              className="block px-3 py-2 text-xs text-gray-500 hover:text-blue-600 rounded-md transition"
            >
              ↑ Back to top
            </a>
          </div>
        </nav>
      </aside>

      <main className="lg:ml-64 w-full flex-1 p-6 lg:p-8 lg:max-w-4xl pb-[40vh]">
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <MobileTOC chapters={toc} />
    </div>
  )
}
