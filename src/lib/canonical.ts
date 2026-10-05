export const SITE_URL = 'https://viasphereglobal.com'

// Only production host aliases redirect; local development and preview hosts stay usable.
export function canonicalRedirect(requestUrl: string): string | null {
  const url = new URL(requestUrl)
  if (!['viasphereglobal.com', 'www.viasphereglobal.com'].includes(url.hostname)) return null
  const target = new URL(url)
  target.protocol = 'https:'
  target.hostname = 'viasphereglobal.com'
  target.port = ''
  // Canonical content URLs have no trailing slash except the homepage.
  if (target.pathname !== '/' && !target.pathname.startsWith('/_') && !target.pathname.split('/').pop()?.includes('.')) {
    target.pathname = target.pathname.replace(/\/+$/, '') || '/'
  }
  return target.href === url.href ? null : target.href
}
