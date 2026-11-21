'use client'

import { useState } from 'react'

interface TOCEntry {
  id: string
  title: string
}

interface MobileTOCProps {
  chapters: TOCEntry[]
}

export default function MobileTOC({ chapters }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((open) => {
      const next = !open
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-transform duration-300 ease-out max-h-[80vh] overflow-hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        <div className="px-6 pb-6 overflow-y-auto max-h-[calc(80vh-4rem)]">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">
            Contents
          </div>

          <ul className="space-y-1">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={'#' + chapter.id}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition active:bg-blue-100"
                >
                  {chapter.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                onClick={closeMenu}
                className="block px-4 py-3 text-base text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition active:bg-blue-100"
              >
                ↑ Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30 active:bg-blue-700 transition"
        aria-label="Toggle table of contents"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}
