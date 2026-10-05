import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'
const source = await readFile(new URL('../src/lib/canonical.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { canonicalRedirect } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
for (const [input, expected] of [
  ['http://viasphereglobal.com/', 'https://viasphereglobal.com/'],
  ['http://www.viasphereglobal.com/destinations/malta/?utm_source=google&gclid=123', 'https://viasphereglobal.com/destinations/malta?utm_source=google&gclid=123'],
  ['https://www.viasphereglobal.com/services', 'https://viasphereglobal.com/services'],
  ['https://viasphereglobal.com/services/', 'https://viasphereglobal.com/services'],
  ['https://viasphereglobal.com/', null],
  ['https://viasphereglobal.com/services?utm_source=google', null],
  ['http://localhost:3000/services/', null],
  ['https://preview.example.workers.dev/services/', null],
  ['https://viasphereglobal.com/_server/test/', null],
]) assert.equal(canonicalRedirect(input), expected, input)
console.log('PASS canonical redirects: host, HTTPS, trailing slash, query preservation, preview isolation and loop avoidance')
