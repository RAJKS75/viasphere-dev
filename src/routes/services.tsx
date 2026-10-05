import { Link, createFileRoute } from '@tanstack/react-router'
import { services } from '@/data/content'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/services')({
  component: Services,
  head: () => seoHead({
    title: 'Study Abroad & Student Visa Services in Ghaziabad | ViaSphere',
    description: 'Explore ViaSphere Global Consultants services for study abroad counselling, university applications, student visa preparation and pre-departure guidance in Ghaziabad and Delhi NCR.',
    path: '/services',
  }),
})

function Services() {
  return (
    <div>
      <section className="bg-[var(--navy)] text-[var(--parchment)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-bright)]">Services</span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-2xl">
            Study abroad and student visa services in Ghaziabad
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 border-b border-[var(--navy)]/10 pb-10"
            >
              <span className="font-display text-4xl italic text-[var(--gold)]">0{i + 1}</span>
              <div>
                <h2 className="font-display text-2xl text-[var(--navy)] mb-3">{service.title}</h2>
                <p className="text-[var(--ink-soft)] leading-relaxed max-w-2xl">{service.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl leading-relaxed text-[var(--ink-soft)]">
          Planning your student visa application? Meet our{' '}
          <Link to="/student-visa-consultant-ghaziabad" className="font-semibold text-blue-800 underline underline-offset-4">study visa consultants in Ghaziabad</Link>
          {' '}to discuss your profile, documents and next steps at our Rajnagar Extension office.
        </p>

        <div className="mt-16 rounded-2xl bg-[var(--parchment-deep)] p-10 text-center">
          <h2 className="font-display text-2xl text-[var(--navy)] mb-3">Not sure which service you need?</h2>
          <p className="text-[var(--ink-soft)] mb-6 max-w-md mx-auto">
            Most students start with a free profile evaluation. We tell you honestly which of the six services apply to your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[var(--navy)] px-7 py-3.5 text-sm font-semibold text-[var(--parchment)] hover:bg-[var(--navy-deep)] transition-colors"
          >
            Book a Free Evaluation
          </Link>
        </div>
      </section>
    </div>
  )
}
