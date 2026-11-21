import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BIAS Manuals',
  description: 'User guides for BIAS Writer, Script, and Study.',
}

const guides = [
  { href: '/writer', label: 'Writer' },
  { href: '/script', label: 'Script' },
  { href: '/study', label: 'Study' },
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
              BIAS Manuals
            </Link>
            <nav className="flex gap-2 sm:gap-4 items-center text-sm">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="text-gray-600 hover:text-blue-600 px-2 py-1 rounded transition"
                >
                  {guide.label}
                </Link>
              ))}
              <a
                href="https://bias.pub"
                className="hidden sm:inline-block text-gray-500 hover:text-blue-600 px-2 py-1 rounded transition"
              >
                bias.pub
              </a>
              <a
                href="mailto:support@bias.pub"
                className="hidden sm:inline-block text-gray-500 hover:text-blue-600 px-2 py-1 rounded transition"
              >
                Support
              </a>
            </nav>
          </div>
        </header>

        <div className="mt-16 min-h-screen">{children}</div>

        <footer className="border-t border-gray-200 bg-gray-50 py-8 px-6 text-center text-sm text-gray-600">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4">
            <a href="https://bias.pub" className="hover:text-blue-600">
              Website
            </a>
            <a
              href="https://www.youtube.com/@BIASLLCApps"
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener"
            >
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
            <p className="mb-1">© 2026 BIAS LLC. All rights reserved.</p>
            <p className="text-xs text-gray-500">
              Patent Pending — U.S. Application No. 63/949,099
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
