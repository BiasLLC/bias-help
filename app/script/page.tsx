import type { Metadata } from 'next'
import GuideLayout from '@/components/GuideLayout'

export const metadata: Metadata = {
  title: 'BIAS Script — User Guide',
  description:
    'User guide for BIAS Script — screenwriting on iPad and Mac with Fountain format, FDX import, focus mode, revision tracking, and export. iPhone is planned after v1.',
}

export default function ScriptPage() {
  return <GuideLayout slug="script" />
}
