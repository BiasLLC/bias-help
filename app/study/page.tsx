import type { Metadata } from 'next'
import GuideLayout from '@/components/GuideLayout'

export const metadata: Metadata = {
  title: 'BIAS Study — User Guide',
  description:
    'User guide for BIAS Study — TestFlight beta with user-built CSV question banks and optional AI imports and explanations.',
}

export default function StudyPage() {
  return <GuideLayout slug="study" />
}
