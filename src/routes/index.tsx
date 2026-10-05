import { CounsellingButton, CounsellingForm } from '@/components/Counselling'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Award, CheckCircle2, GraduationCap, MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { processSteps, services } from '@/data/content'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => seoHead({
    title: 'Study Abroad Consultants in Ghaziabad | ViaSphere',
    description: 'Study abroad consultants in Rajnagar Extension, Ghaziabad. Get university shortlisting, application and student visa guidance. Avail a free consultation.',
    path: '/',
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

function Home() {
  const featuredDestinations = studyDestinations

  return (
    <div className="home-page overflow-hidden bg-[var(--parchment)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#e4f2fd] text-[var(--ink)]">
        <div className="gold-grid absolute inset-0 opacity-25" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[var(--clay)]/10 blur-3xl" />
        <div className="home-hero-grid">
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/45 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-[var(--gold-bright)]">
              <Sparkles className="h-4 w-4" /> Your future. A world of possibilities.
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-tight md:text-4xl">
              Study abroad consultants <span className="text-blue-800">in Ghaziabad.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
              Plan your next step with ViaSphere Global Consultants in Rajnagar Extension, Ghaziabad. Get personalised university shortlisting, application support and student visa preparation for undergraduate and postgraduate study.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)]">
              Explore UK, USA, Australia, Germany, France, Malta, Ireland and New Zealand study options, with guidance from profile assessment through visa preparation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CounsellingButton className="button-primary">
                Avail Free Consultation <ArrowRight className="h-4 w-4" />
              </CounsellingButton>
              <a href="https://wa.me/919599080935" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-4 text-sm font-semibold text-blue-800 backdrop-blur transition hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[.12em] text-[var(--ink-soft)]">
              <span>Study</span><span>Work</span><span>Visit</span><span>Settle</span><span>Globally</span>
            </div>
            <Link to="/student-visa-consultant-ghaziabad" className="mt-5 inline-flex text-sm font-semibold text-[var(--gold-bright)] underline decoration-[var(--gold)]/50 underline-offset-4 hover:decoration-[var(--gold-bright)]">
              Student visa consultant in Ghaziabad
            </Link>
          </div>

          <aside id="home-consultation" className="home-consultation" aria-labelledby="home-consultation-title">
            <p className="eyebrow">Your study abroad journey starts here</p>
            <h2 id="home-consultation-title">Avail Free Consultation</h2>
            <p className="consultation-intro">Tell us your study plans. Our Ghaziabad team can help you choose your next step.</p>
            <CounsellingForm />
          </aside>
        </div>
      </section>

      {/* Trust Cards */}
      <section className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <TrustCard icon={<GraduationCap />} title="Admissions support" text="Build a practical shortlist and organise your university applications." />
        <TrustCard icon={<ShieldCheck />} title="Visa preparation" text="Understand country-specific requirements and prepare supporting documents." />
        <TrustCard icon={<Award />} title="Personal guidance" text="Get structured support from initial profile review through pre-departure." />
      </section>

      {/* Destinations Section */}
      <section className="bg-[#eaf4fc] py-16 text-[var(--ink)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Study destinations" title="Where would you like to study?" text="Dedicated country pages include university information, admissions guidance and official immigration links." />
            <Link to="/destinations" className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--gold-bright)]">All destinations <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((d) => (
              /* Fixed: Changed standard <a> to TanStack Router <Link> for internal SPA routing & preloading */
              <Link 
                key={d.id} 
                to={destinationRoutes[d.id] ?? '/destinations'} 
                className="group overflow-hidden rounded-3xl border border-blue-100 bg-white transition hover:-translate-y-1 hover:border-[var(--gold)]/50"
              >
                <div className="h-40 overflow-hidden bg-blue-100">
                  {/* Fixed: Added width & height attributes to minimize CLS */}
                  <img 
                    src={d.image}
                    style={{ objectPosition: d.id === 'malta' ? 'center 75%' : 'center' }} 
                    alt={`Study in ${d.country} - University & Visa Guidance`} 
                    loading="lazy" 
                    width={320}
                    height={160}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-85" 
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--gold-bright)]">Study abroad</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{d.country}</h3>
                  <p className="mt-2 text-xs text-[var(--ink-soft)]">{d.universities.length}+ universities/institutions listed</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Why ViaSphere */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <SectionHeading eyebrow="Why ViaSphere" title="A study plan built around you." text="We bring course selection, university applications and visa preparation into one clear journey, so you can make informed decisions at every stage." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['Profile-first planning', 'We consider academics, interests, budget, destination preferences and intended intake before discussing study options.'],
            ['Transparent guidance', 'We explain application stages, documentation and practical next steps without promising admission or visa outcomes.'],
            ['End-to-end support', 'From shortlisting and applications to visa preparation and pre-departure planning, the journey stays connected.'],
          ].map(([title, text], i) => (
            <article key={title} className="rounded-3xl border border-[var(--parchment-deep)] bg-white p-8 shadow-[0_18px_55px_rgba(14,22,38,.07)]">
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--navy)] text-sm font-bold text-[var(--gold-bright)]">0{i + 1}</div>
              <h3 className="font-display text-2xl font-semibold text-[var(--navy)]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Our services" title="Everything you need for the next step" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <article key={service.id} className="group rounded-3xl border border-[var(--parchment-deep)] bg-[var(--parchment)] p-7 transition hover:-translate-y-1 hover:border-[var(--gold)]/50">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)] text-sm font-bold text-[var(--gold-bright)]">{index + 1}</div>
                <h3 className="font-display text-xl font-semibold text-[var(--navy)]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{service.summary}</p>
              </article>
            ))}
          </div>
          <Link to="/services" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[var(--navy)] hover:text-[var(--gold)]">View all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="The process" title="From first conversation to departure" />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative rounded-2xl border border-[var(--parchment-deep)] bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-[var(--gold)]">{step.label}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--navy)]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
              {index < processSteps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-[var(--gold)] md:block" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA & Local Business Info */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#e4f2fd] p-8 text-[var(--ink)] md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold-bright)]">Start today</span>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-4xl">Let's map your next step.</h2>
              <p className="mt-5 max-w-xl text-[var(--ink-soft)]">Tell us about your academic background, preferred destination, course interests and intended intake.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CounsellingButton className="button-primary">Avail Free Consultation <ArrowRight className="h-4 w-4" /></CounsellingButton>
                <a href="tel:+919599080935" className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-7 py-3.5 text-sm font-semibold">Call +91 9599080935</a>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--gold)]/25 bg-white/[.04] p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--gold-bright)]">Visit our Ghaziabad office</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">ViaSphere Global Consultants</h3>
              <div className="mt-6 space-y-4 text-sm text-[var(--ink-soft)]">
                <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[var(--gold-bright)]" /> Shop No-11, First Floor, AVS City Square, Rajnagar Extension, Ghaziabad-201017</p>
                <p className="flex gap-3"><MessageCircle className="h-5 w-5 shrink-0 text-[var(--gold-bright)]" /> +91 9599080935</p>
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--gold-bright)]" /> GSTIN: 09ABCFV8000A1ZL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="max-w-2xl">
      <span className={`text-xs font-bold uppercase tracking-[.2em] ${dark ? 'text-[var(--gold-bright)]' : 'text-[var(--gold)]'}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-4xl font-semibold md:text-4xl ${dark ? 'text-[var(--navy)]' : 'text-[var(--navy)]'}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-2xl text-sm leading-relaxed md:text-base ${dark ? 'text-[var(--ink-soft)]' : 'text-[var(--ink-soft)]'}`}>{text}</p>}
    </div>
  )
}

/* Fixed: Downgraded title from <h2> to <h3> inside TrustCard component */
function TrustCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-[var(--parchment-deep)] bg-white p-7 shadow-[0_18px_50px_rgba(14,22,38,.09)]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">{icon}</div>
      <h3 className="font-display text-xl font-semibold text-[var(--navy)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
    </article>
  )
}