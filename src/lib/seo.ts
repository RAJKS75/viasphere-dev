export const SITE_URL = 'https://viasphereglobal.com'

export function seoHead({
  title,
  description,
  path,
  image = '/images/viasphere-logo.png',
}: {
  title: string
  description: string
  path: string
  image?: string
}) {
  const canonical = `${SITE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'ViaSphere Global Consultants' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [{ rel: 'canonical', href: canonical }],
  }
}
