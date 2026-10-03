import { CounsellingButton } from '@/components/Counselling'
import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarCheck,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  PlaneTakeoff,
  SearchCheck,
} from 'lucide-react'
import { seoHead } from '@/lib/seo'

const PHONE_NUMBER = '+91 9599080935'
const PHONE_LINK = 'tel:+919599080935'
const WHATSAPP_LINK =
  'https://wa.me/919599080935?text=Hello%20ViaSphere%20Global%20Consultants%2C%20I%20would%20like%20to%20book%20a%20student%20visa%20consultation.'

export const Route = createFileRoute('/student-visa-consultant-ghaziabad')({
  component: StudentVisaLandingPage,
  head: () => seoHead({
    title: 'Student Visa Consultant in Ghaziabad | Study Abroad | ViaSphere',
    description: 'Speak with ViaSphere Global Consultants in Ghaziabad for student visa guidance, study abroad counselling, university admissions and UG/PG application support across the UK, USA, Australia and Europe.',
    path: '/student-visa-consultant-ghaziabad',
  }),
})

const supportAreas = [
  {
    icon: <SearchCheck />,
    title: 'Course and university selection',
    description:
      'Shortlisting shaped by your academic profile, preferred destination, budget and career plans.',
  },
  {
    icon: <FileCheck2 />,
    title: 'Application and document guidance',
    description:
      'Structured support for application forms, academic documents, statements and submission timelines.',
  },
  {
    icon: <BadgeCheck />,
    title: 'Student visa preparation',
    description:
      'Country-aware document checklists, application guidance and interview preparation where applicable.',
  },
  {
    icon: <PlaneTakeoff />,
    title: 'Pre-departure support',
    description:
      'Practical guidance for the transition from receiving an offer to preparing for your journey abroad.',
  },
]

const countryRoutes: Record<string,string> = { 'United Kingdom':'/destinations/uk', 'United States':'/destinations/usa', Australia:'/destinations/australia', Germany:'/destinations/germany', France:'/destinations/france', Ireland:'/destinations/ireland' }
const destinations = [
  'United Kingdom',
  'United States',
  'Australia',
  'Germany',
  'France',
  'Netherlands',
  'Ireland',
  'Malta',
]

const steps = [
  {
    label: '01',
    title: 'Profile discussion',
    description: 'Tell us about your education, goals, preferred countries, budget and intended intake.',
  },
  {
    label: '02',
    title: 'Study plan',
    description: 'Review suitable course and university options with a clear application roadmap.',
  },
  {
    label: '03',
    title: 'Application support',
    description: 'Prepare and check the documents required for your selected institutions.',
  },
  {
    label: '04',
    title: 'Visa preparation',
    description: 'Organise the required visa documentation and prepare for the next steps.',
  },
]

const faqs = [
  {
    question: 'What support does ViaSphere provide for students?',
    answer:
      'ViaSphere provides guidance for course and university selection, applications, supporting documents, student visa preparation and pre-departure planning.',
  },
  {
    question: 'Which study destinations do you support?',
    answer:
      'Our guidance covers the United Kingdom, United States, Australia, Germany, France, the Netherlands, Ireland and Malta. Support depends on your profile, programme and intake.',
  },
  {
    question: 'Can students from Noida and Delhi NCR book a consultation?',
    answer:
      'Yes. Students and families from Ghaziabad, Noida, Greater Noida and across Delhi NCR can contact us by phone, WhatsApp or the website enquiry form and arrange an office consultation.',
  },
  {
    question: 'Does ViaSphere guarantee admission or a student visa?',
    answer:
      'No consultancy can guarantee an admission or visa decision. Universities and the relevant immigration authorities make all final decisions. ViaSphere helps you prepare a clear, complete and well-organised application.',
  },
]

function StudentVisaLandingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="overflow-hidden">
      <section className="relative overflow-hidden bg-[#e4f2fd] text-[var(--ink)]">
        <div className="radiant-grid absolute inset-0 opacity-15" />
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-yellow-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.15fr_.85fr] md:items-center md:pb-24 md:pt-20">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              <MapPin className="h-4 w-4 text-blue-800" /> Ghaziabad · Noida · Delhi NCR
            </span>
            <h1 className="mt-7 font-display text-4xl font-bold leading-[1.15] tracking-tight md:text-4xl">
              Student visa consultants in Ghaziabad for <span className="text-blue-800">study abroad.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
              Get personalised support for overseas course selection, university applications, student visa preparation and pre-departure planning from ViaSphere Global Consultants.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-violet-800 shadow-xl shadow-violet-950/20 transition-transform hover:-translate-y-1"
              >
                <Phone className="h-4 w-4" /> Call {PHONE_NUMBER}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-blue-800 backdrop-blur transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-sm text-[var(--ink-soft)]">Talk to us about undergraduate and postgraduate study plans for upcoming intakes.</p>
          </div>

          <aside className="rounded-[2rem] border border-white/30 bg-white/15 p-5 shadow-2xl shadow-violet-950/25 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-7 text-[var(--navy)] md:p-8">
              <span className="text-sm font-bold uppercase tracking-[.14em] text-blue-700">Start with your profile</span>
              <h2 className="mt-3 font-display text-3xl font-semibold">Plan your next intake with clarity.</h2>
              <ul className="mt-7 space-y-4">
                {[
                  'Personalised course and country guidance',
                  'Undergraduate and postgraduate applications',
                  'Visa document and interview preparation',
                  'In-person consultation in Ghaziabad',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-[var(--ink-soft)]">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-violet-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <CounsellingButton className="button-primary mt-6">
                Get Free Counselling <ArrowRight className="h-4 w-4" />
              </CounsellingButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
        <TrustPoint icon={<GraduationCap />} title="UG & PG guidance" text="Support for undergraduate and postgraduate study plans." />
        <TrustPoint icon={<BookOpenCheck />} title="Multiple destinations" text="Explore opportunities across the UK, USA, Australia and Europe." />
        <TrustPoint icon={<CalendarCheck />} title="Flexible consultation" text="Connect by phone, WhatsApp, online enquiry or an office visit." />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">Complete student support</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)] md:text-4xl">Guidance for every important stage</h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-soft)]">
            Studying abroad involves connected decisions about your programme, institution, documents, finances and visa timeline. ViaSphere brings those steps into one practical plan built around your circumstances.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {supportAreas.map((area) => (
            <article key={area.title} className="rounded-3xl border border-violet-100 bg-white p-8 shadow-[0_18px_50px_rgba(76,29,149,.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--radiant-violet),var(--radiant-pink))] text-white">
                {area.icon}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-[var(--navy)]">{area.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#eaf4fc] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[.18em] text-violet-700">Study destinations</span>
              <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">Explore the right destination for your goals</h2>
            </div>
            <p className="text-lg leading-relaxed text-[var(--ink-soft)]">
              Compare course options, admission requirements, application timelines and student visa preparation for leading international study destinations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {destinations.map((destination) => (
              <Link
                key={destination}
                to={countryRoutes[destination] ?? '/destinations'}
                className="rounded-2xl border border-blue-100 bg-white p-5 text-lg font-semibold text-[var(--navy)] hover:border-blue-300"
              >
                {destination}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">How it works</span>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-[var(--navy)] md:text-4xl">A clear route from your first consultation to visa preparation</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.label} className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
              <span className="text-sm font-extrabold text-blue-700">{step.label}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-[var(--navy)]">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-[.85fr_1.15fr]">
        <aside className="rounded-[2rem] bg-[#e4f2fd] p-8 text-[var(--ink)] md:p-10">
          <MapPin className="h-9 w-9 text-blue-700" />
          <span className="mt-8 block text-sm font-bold uppercase tracking-[.18em] text-blue-800">Visit ViaSphere</span>
          <h2 className="mt-3 font-display text-3xl font-semibold">Student visa consultation in Ghaziabad</h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
            1st Floor, AVS City Square<br />
            11, Raj Nagar Extension<br />
            Ghaziabad 201017, India
          </p>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
            Monday–Friday: 9:30am–6:30pm<br />
            Saturday: 10:00am–2:00pm
          </p>
          <CounsellingButton className="button-primary mt-6">
            Book an Office Consultation <ArrowRight className="h-4 w-4" />
          </CounsellingButton>
        </aside>

        <div>
          <span className="text-sm font-bold uppercase tracking-[.18em] text-violet-700">Common questions</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[var(--navy)]">Student visa guidance FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-display text-xl font-semibold text-[var(--navy)] marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#e4f2fd] px-8 py-16 text-center text-[var(--ink)] shadow-2xl shadow-pink-500/20 md:px-16">
          <div className="radiant-grid absolute inset-0 opacity-15" />
          <div className="relative">
            <h2 className="font-display text-4xl font-semibold md:text-4xl">Build your study-abroad plan with ViaSphere.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
              Discuss your academic profile, preferred destination, budget and intended intake with our team.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CounsellingButton className="button-primary mt-6">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </CounsellingButton>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-7 py-4 text-sm font-bold text-blue-800 backdrop-blur"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp ViaSphere
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

function TrustPoint({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-white bg-white p-7 shadow-[0_18px_50px_rgba(76,29,149,.12)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--radiant-violet),var(--radiant-pink))] text-white">
        {icon}
      </div>
      <h2 className="font-display text-xl font-semibold text-[var(--navy)]">{title}</h2>
      <p className="mt-2 text-base leading-relaxed text-[var(--ink-soft)]">{text}</p>
    </article>
  )
}
