import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, UsersRound } from 'lucide-react'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/about')({
  component: About,
  head: () => seoHead({
    title: 'About ViaSphere Global Consultants | Study Abroad Consultants Ghaziabad',
    description: 'Learn about ViaSphere Global Consultants, a Ghaziabad-based study abroad consultancy providing university admissions and student visa guidance.',
    path: '/about',
  }),
})

function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[linear-gradient(125deg,#312e81,#7c3aed_48%,#db2777)] py-24 text-white">
        <div className="radiant-grid absolute inset-0 opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_.9fr] md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-yellow-200">About ViaSphere</span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">Study abroad guidance from Ghaziabad</h1>
          </div>
          <p className="text-lg leading-relaxed text-white/80">
            ViaSphere Global Consultants is a Ghaziabad-based overseas education consultancy helping students and families make informed decisions about international study. We bring course selection, university applications, documentation, visa preparation, and pre-departure guidance into one clear and supportive journey.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <div className="md:sticky md:top-28">
            <span className="text-xs font-bold uppercase tracking-[.2em] text-pink-600">Our purpose</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">Make global education easier to understand and pursue.</h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[var(--ink-soft)]">
            <p>Choosing to study abroad affects academics, finances, careers, and family plans. Students deserve advice that considers the complete picture—not just an application deadline.</p>
            <p>Our counsellors begin by understanding each student’s profile, interests, preferred destinations, budget, and long-term goals. We then create a practical pathway with clear next steps, realistic options, and documented timelines.</p>
            <p>As a partner-led consultancy, ViaSphere is building a service model based on personal attention, transparent communication, responsible counselling, and long-term student support.</p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <ValueCard icon={<Compass />} title="Our mission" text="Help students identify suitable international education opportunities and complete each stage with confidence." color="bg-violet-100 text-violet-700" />
          <ValueCard icon={<UsersRound />} title="Our approach" text="Personalised counselling, clear documentation, regular updates, and one coordinated journey from profile review to departure." color="bg-pink-100 text-pink-700" />
          <ValueCard icon={<ShieldCheck />} title="Our promise" text="Honest recommendations, transparent service scope, student-first decisions, and no guarantee of outcomes controlled by universities or visa authorities." color="bg-orange-100 text-orange-700" />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#eef2ff,#fdf2f8_52%,#fff7ed)] py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[.2em] text-violet-700">Why ViaSphere</span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">A responsible, structured way to plan your next chapter.</h2>
            <p className="mt-5 leading-relaxed text-[var(--ink-soft)]">We focus on destinations where students can access strong education pathways and where our team can provide country-aware application and visa guidance.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(76,29,149,.1)]">
            {['Profile and goal-based recommendations','Clear application and document checklists','Support for Germany, France, the Netherlands, Malta, the UK, and Ireland','Visa preparation and pre-departure guidance','Regular communication with students and families'].map((item) => (
              <div key={item} className="flex gap-3 border-b border-violet-100 py-4 last:border-0">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />
                <span className="text-sm font-medium text-[var(--ink-soft)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2rem] bg-[var(--navy)] p-10 text-center text-white md:p-16">
          <h2 className="font-display text-4xl font-semibold">Let’s build your study-abroad roadmap.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">Share your academic background, preferred destination, and intended intake with our counselling team.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--radiant-pink),var(--radiant-orange))] px-7 py-4 text-sm font-bold text-white">Book a free consultation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, text, color }: { icon: React.ReactNode; title: string; text: string; color: string }) {
  return (
    <article className="rounded-3xl border border-violet-100 bg-white p-8 shadow-sm">
      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>{icon}</div>
      <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
    </article>
  )
}
