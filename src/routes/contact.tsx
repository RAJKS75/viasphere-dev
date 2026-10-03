import { createFileRoute } from '@tanstack/react-router'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () => seoHead({
    title: 'Contact Study Abroad Consultants in Ghaziabad | ViaSphere',
    description: 'Contact ViaSphere Global Consultants in Rajnagar Extension, Ghaziabad for study abroad counselling, university admissions and student visa guidance.',
    path: '/contact',
  }),
})

const CONSULTATION_EMAIL = 'admissions@viasphereglobal.com'
const WHATSAPP_NUMBER = '919599080935'

function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const values = Object.fromEntries(new FormData(form).entries())
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const channel = submitter?.value ?? 'email'
    const subject = `Consultation request from ${values.name}`
    const message = [
      'Hello ViaSphere Global Consultants,',
      '',
      'I would like to request a free study-abroad consultation.',
      '',
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Preferred destination: ${values.destination}`,
      `Intended intake: ${values.intake || 'Not specified'}`,
      '',
      'Academic background and goals:',
      String(values.message),
    ].join('\n')

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
      return
    }

    window.location.href = `mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-[linear-gradient(125deg,#312e81,#7c3aed_50%,#db2777)] py-20 text-white">
        <div className="radiant-grid absolute inset-0 opacity-15" />
        <div className="relative mx-auto max-w-6xl px-6">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-yellow-200">Free consultation</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-6xl">Contact our study abroad consultants in Ghaziabad</h1>
          <p className="mt-5 max-w-2xl text-white/75">Complete the form once, then choose whether to send your enquiry by email or WhatsApp.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_.8fr]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-violet-100 bg-white p-7 shadow-[0_20px_60px_rgba(76,29,149,.08)] md:p-9">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name"><input name="name" required autoComplete="name" className={inputStyle} /></Field>
            <Field label="Email address"><input type="email" name="email" required autoComplete="email" className={inputStyle} /></Field>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Phone (with country code)"><input name="phone" required autoComplete="tel" placeholder="+91 98765 43210" className={inputStyle} /></Field>
            <Field label="Preferred destination">
              <select name="destination" required defaultValue="" className={inputStyle}>
                <option value="" disabled>Select a country</option>
                <option>Germany</option><option>France</option><option>Netherlands</option><option>Malta</option><option>United Kingdom</option><option>Ireland</option><option>Not sure yet</option>
              </select>
            </Field>
          </div>
          <Field label="Intended intake"><input name="intake" placeholder="e.g. September 2027" className={inputStyle} /></Field>
          <Field label="Academic background and goals"><textarea name="message" required rows={5} className={`${inputStyle} resize-none`} /></Field>

          <div className="mt-2 flex flex-wrap gap-3">
            <button type="submit" name="channel" value="email" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--radiant-violet),var(--radiant-pink))] px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-violet-500/20 transition-transform hover:-translate-y-0.5">
              <Mail className="h-4 w-4" /> Send by Email
            </button>
            <button type="submit" name="channel" value="whatsapp" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5">
              <MessageCircle className="h-4 w-4" /> Send on WhatsApp
            </button>
          </div>
          <p className="text-xs leading-relaxed text-[var(--ink-soft)]">Your chosen email or WhatsApp application will open with the completed enquiry. Review it before sending.</p>
        </form>

        <aside className="flex flex-col gap-5">
          <ContactCard icon={<MapPin />} title="Head office"><p>1st Floor, AVS City Square<br />11, Raj Nagar Extension<br />Ghaziabad 201017, India</p></ContactCard>
          <ContactCard icon={<Phone />} title="Call or WhatsApp"><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="font-semibold text-violet-700">+91 9599080935</a></ContactCard>
          <ContactCard icon={<Mail />} title="Email"><a href={`mailto:${CONSULTATION_EMAIL}`} className="break-all font-semibold text-violet-700">{CONSULTATION_EMAIL}</a></ContactCard>
          <div className="rounded-3xl bg-[linear-gradient(135deg,#ede9fe,#fce7f3,#ffedd5)] p-7">
            <h2 className="font-display text-xl font-semibold text-[var(--navy)]">What happens next?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">Our team reviews your details and contacts you to arrange an introductory consultation. University admissions and visa decisions remain with the respective institutions and authorities.</p>
          </div>
        </aside>
      </section>
    </div>
  )
}

const inputStyle = 'w-full rounded-xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="flex flex-col gap-1.5"><span className="text-xs font-semibold uppercase tracking-wide text-[var(--ink-soft)]">{label}</span>{children}</label>
}

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-violet-100 bg-white p-7 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">{icon}</div>
      <h2 className="font-display text-xl font-semibold text-[var(--navy)]">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{children}</div>
    </div>
  )
}
