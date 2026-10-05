import handler, { createServerEntry } from '@tanstack/react-start/server-entry'
import { canonicalRedirect } from './lib/canonical'

export default createServerEntry({
  async fetch(request, options) {
    const target = canonicalRedirect(request.url)
    if (target) return Response.redirect(target, 308)
    const response = await handler.fetch(request, options)
    if (response.status === 404) {
      const headers = new Headers(response.headers)
      headers.set('X-Robots-Tag', 'noindex')
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
    }
    return response
  },
})
