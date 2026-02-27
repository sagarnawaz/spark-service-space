import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'

type LegalLayoutProps = {
  title: string
  description: string
  canonicalPath: string
  lastUpdated: string
  children: ReactNode
}

const LegalLayout = ({ title, description, canonicalPath, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <>
      <Seo
        title={`${title} | Sovertick`}
        description={description}
        canonicalPath={canonicalPath}
        image='/branding/sovertick-mark.svg'
      />

      <div className='sovertick-root'>
        <main role='main' aria-label={title} className='px-4 pb-20 pt-12 sm:px-6 lg:px-10'>
          <div className='mx-auto w-full max-w-4xl'>
            <Link
              to='/'
              className='inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
            >
              Back to Home
            </Link>

            <section className='mt-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 backdrop-blur-xl sm:p-8'>
              <h1 className='text-3xl font-bold text-foreground sm:text-4xl'>{title}</h1>
              <p className='mt-3 text-sm text-muted-foreground'>Last updated: {lastUpdated}</p>

              <div className='mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base'>{children}</div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default LegalLayout




