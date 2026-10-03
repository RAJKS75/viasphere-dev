import { Link, createFileRoute, useParams } from '@tanstack/react-router'
import { ArrowRight, BookOpen, ExternalLink, CheckCircle2, Clock3, Target, GraduationCap, FileCheck2 } from 'lucide-react'
import { exams } from '@/data/exams'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/exams_/$exam')({
  component: ExamPage,
  head: ({ params }) => {
    const data = exams.find((x) => x.id === params.exam)
    return seoHead({
      title: data ? `${data.name} Guidance for Study Abroad | ViaSphere` : 'English & Admissions Exam Guidance | ViaSphere',
      description: data
        ? `${data.name} (${data.fullName}) guidance for students preparing for international university applications with ViaSphere Global Consultants.`
        : 'Exam guidance for students preparing for international university applications with ViaSphere Global Consultants.',
      path: `/exams/${params.exam}`,
    })
  },
})

function ExamPage(){
  const {exam}=useParams({from:'/exams_/$exam'})
  const data=exams.find(x=>x.id===exam)
  if(!data)return <div className="mx-auto max-w-6xl px-6 py-24"><h1 className="font-display text-4xl">Exam not found</h1><Link to="/exams">Back to exams</Link></div>
  return <div>
    <section className="bg-[linear-gradient(125deg,#312e81,#7c3aed,#db2777)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6"><Link to="/exams" className="text-sm text-white/70">← All exams</Link><span className="mt-8 block text-xs font-bold uppercase tracking-[.2em] text-yellow-200">Tests & preparation</span><h1 className="mt-3 font-display text-5xl font-semibold md:text-7xl">{data.name}</h1><p className="mt-5 text-xl text-white/80">{data.fullName}</p><p className="mt-5 max-w-3xl text-white/75">{data.audience}</p></div>
    </section>

    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"><Clock3 className="h-6 w-6 text-violet-600"/><p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">Duration</p><p className="mt-2 font-semibold text-[var(--navy)]">{data.duration}</p></div>
        <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"><Target className="h-6 w-6 text-violet-600"/><p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">Score scale</p><p className="mt-2 font-semibold text-[var(--navy)]">{data.scoreScale}</p></div>
        <div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm"><GraduationCap className="h-6 w-6 text-violet-600"/><p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-500">Used for</p><p className="mt-2 font-semibold text-[var(--navy)]">{data.audience}</p></div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
        <article className="rounded-[2rem] border border-violet-100 bg-white p-7 shadow-sm md:p-9">
          <BookOpen className="h-8 w-8 text-violet-600"/><h2 className="mt-5 font-display text-3xl font-semibold text-[var(--navy)]">What the test covers</h2><p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{data.format}</p>
          <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--navy)]">Sections & structure</h3>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100"><div className="grid grid-cols-[1fr_120px_1.7fr_100px] gap-3 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500"><span>Section</span><span>Time</span><span>What it tests</span><span>Score</span></div>{data.sections.map(section=><div key={section.name} className="grid grid-cols-1 gap-2 border-t border-slate-100 px-4 py-4 text-sm md:grid-cols-[1fr_120px_1.7fr_100px]"><strong className="text-[var(--navy)]">{section.name}</strong><span className="text-slate-600">{section.duration}</span><span className="text-[var(--ink-soft)]">{section.content}</span><span className="font-semibold text-violet-700">{section.score}</span></div>)}</div>
          <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--navy)]">How scoring works</h3><p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{data.scoring}</p><div className="mt-5 grid gap-3 md:grid-cols-2"><div className="rounded-2xl bg-slate-50 p-4"><strong className="text-sm text-[var(--navy)]">Eligibility / who should take it</strong><p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{data.eligibility}</p></div><div className="rounded-2xl bg-slate-50 p-4"><strong className="text-sm text-[var(--navy)]">Delivery options</strong><p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{data.testOptions}</p></div><div className="rounded-2xl bg-slate-50 p-4"><strong className="text-sm text-[var(--navy)]">Score validity / policy</strong><p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{data.scoreValidity}</p></div><div className="rounded-2xl bg-slate-50 p-4"><strong className="text-sm text-[var(--navy)]">Fees</strong><p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{data.feesNote}</p></div></div>
          <h3 className="mt-10 font-display text-2xl font-semibold text-[var(--navy)]">Preparation checklist</h3><ul className="mt-4 space-y-3">{data.preparation.map(x=><li key={x} className="flex gap-3 text-[var(--ink-soft)]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600"/>{x}</li>)}</ul>
        <div className="mt-10"><h3 className="font-display text-2xl font-semibold text-[var(--navy)]">Official resources</h3><div className="mt-4 grid gap-3 sm:grid-cols-2">{(data.officialResources || []).map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm font-semibold text-violet-800 hover:bg-violet-100">{resource.label}<span className="mt-2 block break-all text-xs font-normal text-violet-600">{resource.url}</span></a>)}</div></div></article>
        <aside className="h-fit rounded-[2rem] bg-[var(--parchment-deep)] p-7">
          <FileCheck2 className="h-8 w-8 text-[var(--gold)]"/><h2 className="mt-5 font-display text-2xl font-semibold text-[var(--navy)]">Before you register</h2><p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{data.requirements}</p>
          <div className="mt-5 rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-[var(--ink-soft)]"><strong className="text-[var(--navy)]">Results:</strong> {data.resultsInfo}</div>
          <a href={data.registrationUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3.5 text-sm font-semibold text-white">Registration / booking <ExternalLink className="h-4 w-4"/></a>
          <a href={data.prepUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[var(--navy)]">Official preparation <ExternalLink className="h-4 w-4"/></a><a href={data.officialUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--navy)]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[var(--navy)]">Official information <ExternalLink className="h-4 w-4"/></a>
          <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">{data.note}</p><div className="mt-5 rounded-2xl bg-white p-4"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Official URLs</p><p className="mt-2 break-all text-xs leading-relaxed text-violet-700">{data.officialUrl}</p><p className="mt-2 break-all text-xs leading-relaxed text-violet-700">{data.registrationUrl}</p></div>
        </aside>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-20"><div className="rounded-[2rem] bg-[var(--navy)] p-9 text-white"><h2 className="font-display text-3xl font-semibold">Need help planning your application?</h2><p className="mt-3 max-w-2xl text-white/70">ViaSphere can help you map your test requirement to your university application timeline and identify which target programmes need English-language or admissions testing.</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-violet-800">Talk to ViaSphere <ArrowRight className="h-4 w-4"/></Link></div></section>
  </div>
}
