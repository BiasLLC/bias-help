'use client'

import { useState, useEffect } from 'react'

const chapters = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'core-concepts', title: 'Core Concepts' },
  { id: 'annotation-syntax', title: 'Annotation Syntax' },
  { id: 'the-find-panel', title: 'The Find Panel' },
  { id: 'two-stage-filtering-patent-pending', title: 'Two-Stage Filtering' },
  { id: 'the-library', title: 'The Library' },
  { id: 'document-management', title: 'Document Management' },
  { id: 'deleting-and-recovery', title: 'Deleting and Recovery' },
  { id: 'writing-tools', title: 'Writing Tools' },
  { id: 'export-features', title: 'Export Features' },
  { id: 'settings', title: 'Settings' },
  { id: 'project-organization', title: 'Project Organization' },
  { id: 'markdown-guide', title: 'Markdown Guide' },
  { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
  { id: 'use-cases-workflows', title: 'Use Cases & Workflows' },
  { id: 'tips-best-practices', title: 'Tips & Best Practices' },
  { id: 'common-questions', title: 'Common Questions' },
  { id: 'troubleshooting', title: 'Troubleshooting' },
  { id: 'resources', title: 'Resources' },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Auto-scroll to introduction on mobile on first load
  useEffect(() => {
    const isMobile = window.innerWidth < 1024
    const hasScrolled = sessionStorage.getItem('hasScrolledToIntro')
    
    if (isMobile && !hasScrolled) {
      setTimeout(() => {
        const introElement = document.getElementById('introduction')
        if (introElement) {
          introElement.scrollIntoView({ behavior: 'smooth' })
          sessionStorage.setItem('hasScrolledToIntro', 'true')
        }
      }, 500)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Mobile Bottom Sheet Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Bottom Sheet */}
      <div 
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 transform transition-transform duration-300 ease-out max-h-[80vh] overflow-hidden ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
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
                  onClick={closeMenu}
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
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-30 active:bg-blue-700 transition"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  )
}
