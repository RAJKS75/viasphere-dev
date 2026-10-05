// Run after `pnpm run build`; exercises the production Cloudflare Worker.
import { spawn } from 'node:child_process'
import assert from 'node:assert/strict'

const externalUrl = process.env.SMOKE_BASE_URL
const base = externalUrl || 'http://127.0.0.1:4173'
const server = externalUrl ? null : spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], { stdio: ['ignore', 'pipe', 'pipe'] })
let logs = ''
server?.stdout.on('data', (chunk) => { logs += chunk })
server?.stderr.on('data', (chunk) => { logs += chunk })
async function get(path) {
  return fetch(new URL(path, base), { signal: AbortSignal.timeout(10000) })
}
try {
  for (let attempt = 0; ; attempt++) {
    try { const response = await get('/'); if (response.ok) break } catch {}
    if (attempt >= 60 || (server && server.exitCode !== null)) throw new Error(`Preview did not start.\n${logs}`)
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  const countries = { uk: 'the UK', usa: 'the USA', australia: 'Australia', 'new-zealand': 'New Zealand', france: 'France', germany: 'Germany', ireland: 'Ireland', malta: 'Malta' }
  const routes = ['/', '/about', '/services', '/contact', '/student-visa-consultant-ghaziabad', '/destinations', '/exams', ...Object.keys(countries).map((id) => `/destinations/${id}`), ...['ielts', 'toefl', 'gmat', 'gre', 'sat'].map((id) => `/exams/${id}`)]
  const assets = new Set(['/robots.txt', '/sitemap.xml', '/images/viasphere-logo.png', '/images/australia.jpg', '/images/malta.jpg', ...Object.keys(countries).map((id) => `/documents/${id}-student-visa-guide.pdf`)])
  for (const path of routes) {
    const response = await get(path)
    assert.equal(response.status, 200, path)
    assert.match(response.headers.get('content-type') || '', /text\/html/, path)
    const html = await response.text()
    const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((match) => match[1].replace(/<[^>]*>/g, '').trim())
    assert.equal(headings.length, 1, `${path}: expected one page H1`)
    if (path.startsWith('/destinations/')) {
      assert.equal(headings[0], `Study in ${countries[path.split('/').pop()]}`, path)
      assert.match(html, /Universit/i, `${path}: university content`)
      assert.ok(!html.includes('Study abroad destinations for Indian students'), `${path}: must not render listing instead`)
    }
    if (path.startsWith('/exams/')) assert.equal(headings[0], path.split('/').pop().toUpperCase(), path)
    assert.ok(html.includes(`href="https://viasphereglobal.com${path}"`), `${path}: canonical`)
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: one canonical`)
    assert.equal((html.match(/<title>/g) || []).length, 1, `${path}: one title`)
    assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${path}: no blocking header`)
    assert.ok(!/<meta[^>]+name="robots"[^>]+noindex/i.test(html), `${path}: indexable robots meta`)
    assert.match(html, /<meta name="description" content="[^"]+"/, `${path}: description`)
    for (const match of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
    const styles = [...html.matchAll(/<link\b[^>]*href="([^"]+)"[^>]*>/g)].map((match) => match[1]).filter((href) => href.endsWith('.css'))
    assert.ok(styles.length, `${path}: stylesheet`)
    styles.forEach((href) => assets.add(href))
    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^" ]+\.js)"/g)) assets.add(match[1])
    console.log(`PASS ${path}: ${headings[0]}`)
  }
  for (const path of assets) {
    const response = await get(path)
    assert.equal(response.status, 200, path)
    const type = response.headers.get('content-type') || ''
    if (path.endsWith('.css')) assert.match(type, /text\/css/, path)
    if (path.endsWith('.js')) assert.match(type, /javascript/, path)
    if (path.endsWith('.pdf')) assert.match(type, /application\/pdf/, path)
    await response.arrayBuffer()
  }
  for (const path of ['/this-page-does-not-exist', '/exams/not-a-real-exam']) {
    const missing = await get(path)
    assert.equal(missing.status, 404, `${path}: real 404`)
    assert.match(missing.headers.get('x-robots-tag') || '', /noindex/, `${path}: error response noindex`)
  }
  const robots = await (await get('/robots.txt')).text()
  assert.match(robots, /Sitemap: https:\/\/viasphereglobal\.com\/sitemap\.xml/)
  assert.ok(!/Disallow:\s*\/(?:\s|$)/.test(robots), 'No sitewide crawl block')
  const sitemap = await (await get('/sitemap.xml')).text()
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
  assert.equal(new Set(sitemapUrls).size, routes.length, 'Sitemap covers canonical pages once')
  for (const path of routes) assert.ok(sitemapUrls.includes(`https://viasphereglobal.com${path}`), `${path}: in sitemap`)
  console.log(`PASS ${routes.length} pages, ${assets.size} assets, and 404 handling`)
} catch (error) {
  console.error(error)
  process.exitCode = 1
} finally {
  server?.kill('SIGTERM')
}
