import Link from 'next/link'

const manuals = [
  {
    href: '/writer',
    title: 'BIAS Writer',
    blurb:
      'Writer 2.0 and Writer Pro: Markdown, tags, memos, search, projects, and export.',
  },
  {
    href: '/script',
    title: 'BIAS Script',
    blurb:
      'Coming soon for iPad and Mac. A preview guide to Fountain, outlines, notes, revisions, and export.',
  },
  {
    href: '/study',
    title: 'BIAS Study',
    blurb:
      'TestFlight beta: build CSV question banks first, then explore optional AI imports and explanations.',
  },
]

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          BIAS Manuals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          User guides for the BIAS suite. Choose the app you&rsquo;re using.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {manuals.map((manual) => (
          <Link
            key={manual.href}
            href={manual.href}
            className="group block rounded-xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-sm transition"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
              {manual.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{manual.blurb}</p>
            <span className="inline-block mt-4 text-sm font-medium text-blue-600">
              Open guide →
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-600">
        <p>
          Need help? Email{' '}
          <a
            href="mailto:support@bias.pub"
            className="text-blue-600 hover:underline"
          >
            support@bias.pub
          </a>{' '}
          or visit{' '}
          <a href="https://bias.pub" className="text-blue-600 hover:underline">
            bias.pub
          </a>
          .
        </p>
      </section>
    </main>
  )
}
