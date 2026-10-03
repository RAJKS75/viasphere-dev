import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, CheckCircle2, Clock3, ExternalLink, GraduationCap, Target } from 'lucide-react'
import { exams } from '@/data/exams'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/exams')({
  component: Exams,
  head: () => seoHead({
    title: 'IELTS, TOEFL, GRE, GMAT & SAT Guidance | ViaSphere',
    description: 'Explore exam guidance for international study applications, including IELTS, TOEFL, GRE, GMAT and SAT, with ViaSphere Global Consultants.',
    path: '/exams',
  }),
})

const examRoutes: Record<string, string> = {
  ielts: '/exams/ielts',
  toefl: '/exams/toefl',
  gmat: '/exams/gmat',
  gre: '/exams/gre',
  sat: '/exams/sat',
}

function examPath(id: string) {
  return examRoutes[id] ?? '/exams'
}

function Exams() {
  return <div>
    <section className="bg-[var(--navy)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-yellow-200">Tests & preparation</span>
        <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">IELTS, TOEFL, GMAT, GRE & SAT</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/75">Explore the complete exam information available in the ViaSphere data: purpose, eligibility, format, sections, timing, scoring, delivery options, score policies, preparation, results, fees and official registration resources.</p>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-10">
        {exams.map((ex) => <article key={ex.id} id={ex.id} className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-violet-50 to-white p-7 md:p-9">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[.18em] text-violet-700">International admissions test</span>
                <h2 className="mt-2 font-display text-4xl font-semibold text-[var(--navy)] md:text-5xl">{ex.name}</h2>
                <p className="mt-2 text-lg text-slate-600">{ex.fullName}</p>
                <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">{ex.format}</p>
              </div>
              <Link to={examPath(ex.id)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white">Full guide <ArrowRight className="h-4 w-4" /></Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <InfoCard icon={<Clock3 className="h-5 w-5" />} label="Duration" value={ex.duration} />
              <InfoCard icon={<Target className="h-5 w-5" />} label="Score scale" value={ex.scoreScale} />
              <InfoCard icon={<GraduationCap className="h-5 w-5" />} label="Typical audience" value={ex.audience} />
              <InfoCard icon={<BookOpen className="h-5 w-5" />} label="Score / format" value={ex.scoring} />
            </div>
          </div>

          <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[1.35fr_.65fr]">
            <div>
              <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">Sections & test structure</h3>
              <div className="mt-5 space-y-3">
                {ex.sections.map((section) => <div key={section.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="font-semibold text-[var(--navy)]">{section.name}</h4>
                    <div className="flex gap-3 text-xs font-semibold text-violet-700"><span>{section.duration}</span><span>{section.score}</span></div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{section.content}</p>
                </div>)}
              </div>

              <div className="mt-9 grid gap-4 md:grid-cols-2">
                <Detail title="Eligibility / who should take it" text={ex.eligibility} />
                <Detail title="Delivery options" text={ex.testOptions} />
                <Detail title="Score validity / policy" text={ex.scoreValidity} />
                <Detail title="Fees" text={ex.feesNote} />
              </div>

              <div className="mt-9 rounded-2xl bg-violet-50 p-6">
                <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">Preparation checklist</h3>
                <ul className="mt-4 space-y-3">
                  {ex.preparation.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />{item}</li>)}
                </ul>
              </div>

              <div className="mt-9">
                <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">Official resources</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {(ex.officialResources || []).map((resource) => <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-violet-100 bg-white p-4 hover:bg-violet-50">
                    <span className="flex items-center gap-2 text-sm font-semibold text-violet-800">{resource.label}<ExternalLink className="h-4 w-4" /></span>
                    <span className="mt-2 block break-all text-xs leading-relaxed text-slate-500">{resource.url}</span>
                  </a>)}
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-[var(--parchment-deep)] p-7">
              <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">Before you register</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{ex.requirements}</p>
              <div className="mt-5 rounded-2xl bg-white/75 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Results</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{ex.resultsInfo}</p>
              </div>
              <div className="mt-5 rounded-2xl bg-amber-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Important</p>
                <p className="mt-2 text-sm leading-relaxed text-amber-900">{ex.note}</p>
              </div>
              <div className="mt-6 space-y-3">
                <OfficialLink label="Register / book test" url={ex.registrationUrl} />
                {ex.prepUrl ? <OfficialLink label="Official preparation" url={ex.prepUrl} /> : null}
                <OfficialLink label="Official information" url={ex.officialUrl} />
              </div>
              <div className="mt-6 rounded-2xl bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Key URLs</p>
                <a href={ex.officialUrl} target="_blank" rel="noreferrer" className="mt-3 block break-all text-xs leading-relaxed text-violet-700 hover:underline">{ex.officialUrl}</a>
                <a href={ex.registrationUrl} target="_blank" rel="noreferrer" className="mt-2 block break-all text-xs leading-relaxed text-violet-700 hover:underline">{ex.registrationUrl}</a>
                {ex.prepUrl ? <a href={ex.prepUrl} target="_blank" rel="noreferrer" className="mt-2 block break-all text-xs leading-relaxed text-violet-700 hover:underline">{ex.prepUrl}</a> : null}
              </div>
            </aside>
          </div>
        </article>)}
      </div>

      <div className="mt-14 rounded-[2rem] bg-[var(--navy)] p-8 text-white md:p-10">
        <h2 className="font-display text-3xl font-semibold">Choosing an exam depends on your target programme</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-5"><strong>English proficiency</strong><p className="mt-2 text-sm leading-relaxed text-white/70">IELTS and TOEFL are English-language proficiency tests. The accepted test and required overall/section scores are determined by each university and programme.</p></div>
          <div className="rounded-2xl bg-white/10 p-5"><strong>Admissions testing</strong><p className="mt-2 text-sm leading-relaxed text-white/70">GMAT is focused on graduate business admissions, GRE is used across many graduate programmes, and SAT is primarily used for undergraduate admissions.</p></div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/70">Always verify the current requirement on the official university/programme admissions page before registering or sending a score.</p>
      </div>
    </section>
  </div>
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100"><div className="text-violet-600">{icon}</div><p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 text-sm font-semibold leading-relaxed text-[var(--navy)]">{value}</p></div>
}

function Detail({ title, text }: { title: string; text?: string }) {
  return <div className="rounded-2xl border border-slate-200 p-5"><h4 className="text-sm font-bold text-[var(--navy)]">{title}</h4><p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{text || 'See the official test provider and target university for the current policy.'}</p></div>
}

function OfficialLink({ label, url }: { label: string; url: string }) {
  return <a href={url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 rounded-full bg-[var(--navy)] px-5 py-3.5 text-sm font-semibold text-white hover:opacity-90"><span>{label}</span><ExternalLink className="h-4 w-4 shrink-0" /></a>
}
