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
  const countries = { uk: 'the UK', usa: 'the USA', australia: 'Australia', 'new-zealand': 'New Zealand', france: 'France', germany: 'Germany', ireland: 'Ireland' }
  const routes = ['/', '/about', '/services', '/contact', '/student-visa-consultant-ghaziabad', '/destinations', '/exams', ...Object.keys(countries).map((id) => `/destinations/${id}`), ...['ielts', 'toefl', 'gmat', 'gre', 'sat'].map((id) => `/exams/${id}`)]
  const assets = new Set(['/robots.txt', '/sitemap.xml', '/images/viasphere-logo.png', ...Object.keys(countries).map((id) => `/documents/${id}-student-visa-guide.pdf`)])
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
  assert.equal((await get('/this-page-does-not-exist')).status, 404, 'Unknown route must return 404')
  console.log(`PASS ${routes.length} pages, ${assets.size} assets, and 404 handling`)
} catch (error) {
  console.error(error)
  process.exitCode = 1
} finally {
  server?.kill('SIGTERM')
}
