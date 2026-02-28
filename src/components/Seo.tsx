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
    '@type': 'LocalBusiness',
    name: 'Sovertick',
    image: `${SITE_URL}/branding/sovertick-logo.svg`,
    '@id': SITE_URL,
    url: SITE_URL,
    telephone: '+923180272619',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Global',
    },
    description: DEFAULT_KEYWORDS,
    sameAs: [
      'https://www.linkedin.com/company/sovertick/',
      'https://www.facebook.com/share/1Hf66TUsce/',
      'https://www.instagram.com/sovertick?igsh=b2JjbWlxdTJsMDBl'
    ],
  }

  const serviceSchema: JsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sovertick'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Web Development',
          description: 'High-performance scalable web applications and enterprise platforms.'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile experiences.'
        },
        {
          '@type': 'OfferCatalog',
          name: 'AI-Powered Solutions',
          description: 'Custom AI integration, automation, and intelligent tools.'
        }
      ]
    }
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
      <script type='application/ld+json'>{JSON.stringify(serviceSchema)}</script>
      {structuredData.map((schema, index) => (
        <script key={`jsonld-${index}`} type='application/ld+json'>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default Seo
