import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Mail, MessageCircle, X } from 'lucide-react'

const CounsellingContext = createContext<(() => void) | null>(null)
export function CounsellingButton({ children = 'Get Free Counselling', className = 'button-primary' }: { children?: ReactNode; className?: string }) {
  const open = useContext(CounsellingContext)
  return <button type="button" className={className} onClick={open ?? undefined}>{children}</button>
}
export function CounsellingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    if (!open || !element) return
    element.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { element.close(); document.body.style.overflow = previousOverflow }
  }, [open])
  return <CounsellingContext.Provider value={() => setOpen(true)}>
    {children}
    <dialog ref={dialog} className="counselling-dialog" aria-labelledby="counselling-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false) } }}>
      {open && <div className="dialog-content">
        <button type="button" className="dialog-close" aria-label="Close counselling form" onClick={() => setOpen(false)}><X size={22} /></button>
        <p className="eyebrow">Let's plan your next step</p>
        <h2 id="counselling-title">Free study abroad counselling</h2>
        <p className="dialog-intro">Share your study plans with our Ghaziabad team.</p>
        <CounsellingForm />
      </div>}
    </dialog>
  </CounsellingContext.Provider>
}
export function CounsellingForm() {
  const [status, setStatus] = useState('')
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = Object.fromEntries(new FormData(form).entries())
    const channel = ((event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value ?? 'email'
    const message = ['Hello ViaSphere Global Consultants,', 'I would like free study-abroad counselling.', '', `Name: ${values.name}`, `Email: ${values.email}`, `Phone: ${values.phone}`, `Destination: ${values.destination}`, `Study level: ${values.level}`, `Intended intake: ${values.intake || 'Not decided'}`, `Study interests: ${values.interests || 'To discuss'}`].join('\n')
    if (channel === 'whatsapp') {
      window.open(`https://wa.me/919599080935?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
      setStatus('Your WhatsApp enquiry is ready. Please review and send it in WhatsApp.')
    } else {
      window.location.href = `mailto:admissions@viasphereglobal.com?subject=${encodeURIComponent(`Free counselling request from ${values.name}`)}&body=${encodeURIComponent(message)}`
      setStatus('Your email enquiry is ready. Please review and send it in your email application.')
    }
  }
  return <form onSubmit={submit} className="counselling-form">
    <div className="form-grid">
      <label>Full name *<input name="name" required autoComplete="name" autoFocus /></label>
      <label>Phone with country code *<input name="phone" type="tel" required autoComplete="tel" placeholder="+91 98765 43210" pattern="[+0-9() .-]{7,20}" /></label>
      <label className="form-wide">Email address *<input name="email" type="email" required autoComplete="email" /></label>
      <label>Study destination *<select name="destination" required defaultValue=""><option value="" disabled>Select destination</option>{['United Kingdom', 'United States', 'Australia', 'Germany', 'France', 'New Zealand', 'Ireland', 'Netherlands', 'Malta', 'Not sure yet'].map(country => <option key={country}>{country}</option>)}</select></label>
      <label>Study level *<select name="level" required defaultValue=""><option value="" disabled>Select study level</option><option>Undergraduate</option><option>Postgraduate</option><option>Other / Not decided</option></select></label>
      <label>Preferred intake<input name="intake" placeholder="e.g. September 2027" /></label>
      <label>Study interests<input name="interests" placeholder="e.g. Business, Engineering" /></label>
    </div>
    <label className="consent"><input type="checkbox" name="consent" required /> <span>I agree to ViaSphere contacting me about my study enquiry using the details provided.</span></label>
    <div className="form-actions"><button type="submit" name="channel" value="email" className="button-secondary"><Mail size={18} /> Prepare Email Enquiry</button><button type="submit" name="channel" value="whatsapp" className="button-primary"><MessageCircle size={18} /> Continue on WhatsApp</button></div>
    <p className="form-note">Your chosen app opens with your enquiry. Review and send it there to contact us.</p>
    <p className="form-note" role="status">{status}</p>
  </form>
}
