import { Link } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, FileText, GraduationCap, MapPin, Globe2, ClipboardCheck } from 'lucide-react'
import type { DestinationStudy } from '@/data/studyAbroadTypes'

export function CountryDestinationPage({ destination }: { destination: DestinationStudy }) {
  const data = destination
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://viasphereglobal.com/' },
      { '@type': 'ListItem', position: 2, name: 'Study Destinations', item: 'https://viasphereglobal.com/destinations' },
      { '@type': 'ListItem', position: 3, name: data.country, item: `https://viasphereglobal.com/destinations/${data.id}` },
    ],
  }

  return <div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className="relative overflow-hidden bg-[var(--navy)] text-white">
      <img src={data.image} style={{ objectPosition: data.id === 'malta' ? 'center 75%' : 'center' }} alt={`${data.country} study destination`} className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0e1626_10%,rgba(22,35,61,.8),rgba(124,58,237,.45))]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <a href="/destinations" className="text-sm text-white/70 hover:text-white">← All destinations</a>
        <span className="mt-8 block text-xs font-bold uppercase tracking-[.18em] text-yellow-200">Study Destination for Indian Students</span>
        <h1 className="mt-3 font-display text-5xl font-semibold md:text-7xl">
          Study in {data.country === 'United Kingdom' ? 'the UK' : data.country === 'United States' ? 'the USA' : data.country}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{data.summary}</p>
        <div className="mt-7 flex flex-wrap gap-3"><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">{data.visaType}</span><span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">{data.intakes}</span></div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
        <article>
          <span className="text-xs font-bold uppercase tracking-[.18em] text-pink-600">Student visa process</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">From admission to visa preparation</h2>
          <div className="mt-8 space-y-4">{data.visaSteps.map((step,i)=><div key={step.title} className="flex gap-4 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">{i+1}</div><div><h3 className="font-display text-xl font-semibold text-[var(--navy)]">{step.title}</h3><p className="mt-2 leading-relaxed text-[var(--ink-soft)]">{step.description}</p></div></div>)}</div>
          <p className="mt-6 rounded-2xl bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">{data.visaNotes}</p>
        </article>
        <aside className="h-fit rounded-3xl bg-[var(--parchment-deep)] p-7">
          <FileText className="h-8 w-8 text-[var(--gold)]" /><h2 className="mt-5 font-display text-2xl font-semibold text-[var(--navy)]">Student Visa Guide</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">Country-specific planning guide with application stages, document checklist and official source.</p>
          <a href={`/documents/${data.id}-student-visa-guide.pdf`} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3.5 text-sm font-semibold text-white">Download PDF <ExternalLink className="h-4 w-4" /></a>
          <a href={data.officialVisaUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[var(--navy)]">Official immigration guidance <ExternalLink className="h-4 w-4" /></a>
        </aside>
      </div>
    </section>

    <section className="bg-[linear-gradient(135deg,#eef2ff,#fff7ed)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-violet-700">University directory</span>
        <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">{data.universities.length >= 50 ? 'Top 50 Universities to Explore' : 'Universities to Explore'}</h2>
        <div className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--navy)] shadow-sm">{data.universities.length} universities / institutions listed</div>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--ink-soft)]">Each institution now includes city, study levels, popular subject areas, a typical admissions checklist and—where verified in the current content—an official university website. Use the official programme page for the final admission requirements and application deadline. QS World University Rankings 2027 positions are shown where available; unlisted ranks are not inferred.</p>
        <div className="mt-10 space-y-4">
          {data.universities.map((uni,index)=><article key={uni.name} className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm md:p-6">
            <div className="grid gap-5 md:grid-cols-[56px_1.4fr_.8fr_.7fr]">
              <span className="text-sm font-bold text-violet-600">{index+1}</span>
              <div><h3 className="font-display text-xl font-semibold text-[var(--navy)]">{uni.name}</h3><p className="mt-2 text-xs leading-relaxed text-slate-500">Popular study areas: {uni.popularAreas.join(' · ')}</p></div>
              <div className="text-sm text-[var(--ink-soft)]"><MapPin className="mr-1 inline h-3.5 w-3.5" />{uni.city}<div className="mt-2 text-xs">{uni.levels.join(' · ')}</div></div>
              <div className="text-sm font-semibold text-[var(--gold)]">{uni.qsRank2027 ? `QS 2027 #${uni.qsRank2027}` : 'QS 2027 rank not listed'}</div>
            </div>
            <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4"><div className="flex items-center gap-2 text-sm font-semibold text-[var(--navy)]"><ClipboardCheck className="h-4 w-4 text-violet-600"/>Admission requirements</div><p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">{uni.admissionRequirements}</p></div>
              <div className="rounded-2xl bg-slate-50 p-4"><div className="flex items-center gap-2 text-sm font-semibold text-[var(--navy)]"><Globe2 className="h-4 w-4 text-violet-600"/>University & application</div><p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">Use the official university website and, where available, the official Admissions / Apply page for the current programme requirements and deadlines.</p><div className="mt-3 flex flex-wrap gap-3">{uni.websiteUrl ? <a href={uni.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-violet-700 hover:underline">Official university website <ExternalLink className="h-3.5 w-3.5"/></a> : <span className="text-[11px] text-slate-400">Official website link pending verification</span>}{uni.admissionsUrl ? <a href={uni.admissionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-violet-700 hover:underline">Admissions / Apply <ExternalLink className="h-3.5 w-3.5"/></a> : null}</div></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-4">
      <div className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm md:p-9">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-violet-700">Local study-abroad support</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--navy)]">Study in {data.country} with guidance from Ghaziabad</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--ink-soft)]">
          ViaSphere Global Consultants supports students in Ghaziabad and Delhi NCR with profile assessment, university shortlisting, applications, document preparation and student visa guidance for {data.country}. Requirements vary by institution and programme, so students should confirm final details with the relevant university and official immigration authority.
        </p>
        <Link to="/student-visa-consultant-ghaziabad" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-bold text-white">Student visa guidance in Ghaziabad <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-20"><div className="rounded-[2rem] bg-[var(--navy)] p-9 text-white md:p-12"><GraduationCap className="h-9 w-9 text-yellow-200" /><h2 className="mt-5 font-display text-4xl font-semibold">Need help choosing a university?</h2><p className="mt-4 max-w-2xl leading-relaxed text-white/70">Share your academic profile, preferred course, budget and intake. ViaSphere can help you build a shortlist and understand the application pathway.</p><Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-violet-800">Start an enquiry <ArrowRight className="h-4 w-4" /></Link></div></section>
  </div>
}
