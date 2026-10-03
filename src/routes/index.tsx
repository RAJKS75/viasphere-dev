import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Award, CheckCircle2, GraduationCap, MapPin, MessageCircle, Plane, ShieldCheck, Sparkles } from 'lucide-react'
import { processSteps, services } from '@/data/content'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => seoHead({
    title: 'Study Abroad & Study Visa Consultants in Ghaziabad | ViaSphere',
    description: 'ViaSphere Global Consultants helps students in Ghaziabad and Delhi NCR with study abroad counselling, university admissions and student visa guidance for the UK, USA, Australia, Germany, France and Europe.',
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
  ireland: '/destinations/ireland',
}

function Home() {
  const featuredDestinations = studyDestinations.slice(0, 7)

  return (
    <div className="overflow-hidden bg-[var(--parchment)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
        <div className="gold-grid absolute inset-0 opacity-25" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--gold)]/20 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[var(--clay)]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.15fr_.85fr] md:items-center md:pb-28 md:pt-24">
          <div className="animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/45 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em] text-[var(--gold-bright)]">
              <Sparkles className="h-4 w-4" /> Global education & visa guidance
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
              Study Abroad & Study Visa Consultants in <span className="gold-text">Ghaziabad.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Personalised study abroad counselling, university admissions and student visa preparation for students in Ghaziabad and Delhi NCR.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
              Explore UK, USA, Australia, Germany, France, Ireland and New Zealand study options, with guidance from profile assessment through visa preparation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-bright)] px-7 py-4 text-sm font-bold text-[var(--navy-deep)] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#e0b65f]">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/919599080935" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[.12em] text-white/50">
              <span>Study</span><span>Work</span><span>Visit</span><span>Settle</span><span>Globally</span>
            </div>
            <Link to="/student-visa-consultant-ghaziabad" className="mt-5 inline-flex text-sm font-semibold text-[var(--gold-bright)] underline decoration-[var(--gold)]/50 underline-offset-4 hover:decoration-[var(--gold-bright)]">
              Student visa consultant in Ghaziabad
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-[var(--gold)]/35 bg-white/[.06] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-[var(--parchment)] p-7 text-[var(--navy)]">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[var(--gold)]">VIA SPHERE</span>
                    {/* Fixed: Downgraded to h3 to maintain proper document outline */}
                    <h3 className="mt-2 font-display text-3xl font-semibold">Your roadmap</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--navy)] text-[var(--gold-bright)]"><Plane className="h-6 w-6" /></div>
                </div>
                <div className="mt-8 space-y-4">
                  {['Profile assessment', 'Course & university selection', 'Application & document review', 'Student visa preparation', 'Pre-departure guidance'].map((item, i) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-xs font-bold text-[var(--gold-bright)]">{i + 1}</span>
                      <span className="text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex items-center gap-2 text-xs text-[var(--ink-soft)]"><ShieldCheck className="h-4 w-4 text-[var(--gold)]" /> Guidance designed around your profile and goals.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards */}
      <section className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <TrustCard icon={<GraduationCap />} title="Admissions support" text="Build a practical shortlist and organise your university applications." />
        <TrustCard icon={<ShieldCheck />} title="Visa preparation" text="Understand country-specific requirements and prepare supporting documents." />
        <TrustCard icon={<Award />} title="Personal guidance" text="Get structured support from initial profile review through pre-departure." />
      </section>

      {/* Why ViaSphere */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <SectionHeading eyebrow="Why ViaSphere" title="A more structured way to plan your international education" text="We bring course selection, university applications and visa preparation into one clear journey, so you can make informed decisions at every stage." />
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
      <section className="bg-white py-24">
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

      {/* Destinations Section */}
      <section className="bg-[var(--navy)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading dark eyebrow="Study destinations" title="Explore your options" text="Dedicated country pages include university information, admissions guidance and official immigration links." />
            <Link to="/destinations" className="mb-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--gold-bright)]">All destinations <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((d) => (
              /* Fixed: Changed standard <a> to TanStack Router <Link> for internal SPA routing & preloading */
              <Link 
                key={d.id} 
                to={destinationRoutes[d.id] ?? '/destinations'} 
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-[var(--gold)]/50"
              >
                <div className="h-40 overflow-hidden bg-slate-800">
                  {/* Fixed: Added width & height attributes to minimize CLS */}
                  <img 
                    src={d.image} 
                    alt={`Study in ${d.country} - University & Visa Guidance`} 
                    loading="lazy" 
                    width={320}
                    height={160}
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85" 
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--gold-bright)]">Study abroad</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{d.country}</h3>
                  <p className="mt-2 text-xs text-white/55">{d.universities.length}+ universities/institutions listed</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="The process" title="From first conversation to departure" />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative rounded-2xl border border-[var(--parchment-deep)] bg-white p-6 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-[.16em] text-[var(--gold)]">{step.label}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--navy)]">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
              {index < processSteps.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 text-[var(--gold)] md:block" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA & Local Business Info */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[var(--navy-deep)] p-8 text-white md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold-bright)]">Start today</span>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Let's map your next step.</h2>
              <p className="mt-5 max-w-xl text-white/65">Tell us about your academic background, preferred destination, course interests and intended intake.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-bright)] px-7 py-3.5 text-sm font-bold text-[var(--navy-deep)]">Get Free Counselling <ArrowRight className="h-4 w-4" /></Link>
                <a href="tel:+919599080935" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold">Call +91 9599080935</a>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--gold)]/25 bg-white/[.04] p-7">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[var(--gold-bright)]">Visit our office</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">ViaSphere Global Consultants</h3>
              <div className="mt-6 space-y-4 text-sm text-white/65">
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
      <h2 className={`mt-3 font-display text-4xl font-semibold md:text-5xl ${dark ? 'text-white' : 'text-[var(--navy)]'}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-2xl text-sm leading-relaxed md:text-base ${dark ? 'text-white/60' : 'text-[var(--ink-soft)]'}`}>{text}</p>}
    </div>
  )
}

/* Fixed: Downgraded title from <h2> to <h3> inside TrustCard component */
function TrustCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-[var(--parchment-deep)] bg-white p-7 shadow-[0_18px_50px_rgba(14,22,38,.09)]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--navy)] text-[var(--gold-bright)]">{icon}</div>
      <h3 className="font-display text-xl font-semibold text-[var(--navy)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{text}</p>
    </article>
  )
}