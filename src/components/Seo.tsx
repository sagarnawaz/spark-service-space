import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://sovertick.com'
const DEFAULT_IMAGE = `${SITE_URL}/branding/sovertick-logo.svg`
const DEFAULT_KEYWORDS =
  'web development agency, mobile app development, AI solutions, UI UX design, software development company, Sovertick'

type JsonLd = Record<string, unknown>

type SeoProps = {
  title: string
  description: string
  keywords?: string
  canonicalPath?: string
  image?: string
  robots?: string
  structuredData?: JsonLd[]
}

const normalizeUrl = (value: string) => {
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`
}

const Seo = ({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  image = DEFAULT_IMAGE,
  robots = 'index, follow',
  structuredData = [],
}: SeoProps) => {
  const { pathname } = useLocation()
  const canonicalUrl = normalizeUrl(canonicalPath ?? pathname)
  const socialImageUrl = normalizeUrl(image)

  const organizationSchema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sovertick',
    url: SITE_URL,
    logo: `${SITE_URL}/branding/sovertick-logo.svg`,
    sameAs: ['https://www.linkedin.com/company/sovertick/'],
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='robots' content={robots} />
      <link rel='canonical' href={canonicalUrl} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={canonicalUrl} />
      <meta property='og:image' content={socialImageUrl} />
      <meta property='og:site_name' content='Sovertick' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={socialImageUrl} />

      <script type='application/ld+json'>{JSON.stringify(organizationSchema)}</script>
      {structuredData.map((schema, index) => (
        <script key={`jsonld-${index}`} type='application/ld+json'>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo
