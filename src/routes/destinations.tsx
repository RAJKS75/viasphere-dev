import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, FileText, Globe2, MapPin } from 'lucide-react'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations')({
  component: Destinations,
  head: () => seoHead({
    title: 'Study Abroad Destinations for Indian Students | ViaSphere',
    description: 'Explore study destinations including the UK, USA, Australia, Germany, France, Malta, Ireland and New Zealand with ViaSphere Global Consultants.',
    path: '/destinations',
  }),
})

const destinationRoutes: Record<string, string> = {
  uk: '/destinations/uk',
  usa: '/destinations/usa',
  australia: '/destinations/australia',
  'new-zealand': '/destinations/new-zealand',
  france: '/destinations/france',
  germany: '/destinations/germany',
  malta: '/destinations/malta',
  ireland: '/destinations/ireland',
}

function destinationPath(id: string) {
  return destinationRoutes[id] ?? '/destinations'
}

function Destinations() {
  return (
    <div>
      <section className="bg-[var(--navy)] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-yellow-200">Study destinations</span>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold md:text-6xl">
            Study abroad destinations for Indian students
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">
            Select a country to open its dedicated university, admissions and student-visa guide. Each country page contains its own visa process, downloadable guide, university directory and official links.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studyDestinations.map((d) => (
            <article key={d.id} className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-sm">
              <div className="relative h-56 bg-slate-900">
                <img
                  src={d.image}
                    style={{ objectPosition: d.id === 'malta' ? 'center 75%' : 'center' }}
                  alt={`${d.country} study destination`}
                  className="h-full w-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-yellow-200">Study destination</span>
                  <h2 className="mt-2 font-display text-3xl font-semibold">{d.country}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{d.summary}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Visa</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{d.visaType}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Intakes</p>
                    <p className="mt-1 text-sm font-semibold text-[var(--navy)]">{d.intakes}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 text-xs text-slate-500">
                  <span><MapPin className="mr-1 inline h-3.5 w-3.5" />{d.universities.length} universities/institutions</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={destinationPath(d.id)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Open {d.country} guide
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`/documents/${d.id}-student-visa-guide.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-[var(--navy)]"
                  >
                    <FileText className="h-4 w-4" />
                    Visa PDF
                  </a>
                </div>

                <a
                  href={d.officialVisaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-violet-700 hover:underline"
                >
                  <Globe2 className="h-3.5 w-3.5" />
                  Official immigration website
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-[var(--parchment-deep)] p-8 md:p-10">
          <h2 className="font-display text-3xl font-semibold text-[var(--navy)]">What you will find on each country page</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/75 p-5">
              <strong className="text-[var(--navy)]">Student visa pathway</strong>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">Country-specific steps, document guidance and the official immigration source.</p>
            </div>
            <div className="rounded-2xl bg-white/75 p-5">
              <strong className="text-[var(--navy)]">Universities</strong>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">University, city, UG/PG levels, subject areas, QS 2027 rank where available and official links.</p>
            </div>
            <div className="rounded-2xl bg-white/75 p-5">
              <strong className="text-[var(--navy)]">Application guidance</strong>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">Use the official university admissions page for current programme requirements and deadlines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
