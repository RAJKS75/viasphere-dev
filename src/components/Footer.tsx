import { Link } from '@tanstack/react-router'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="bg-[#e4f2fd] text-[var(--ink)] border-t border-blue-100 mt-8">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="mb-4"><BrandLogo inverse /></div>
          <p className="text-sm leading-relaxed text-[var(--ink-soft)] max-w-xs">
            Personalised university admissions and student visa guidance for ambitious students planning their education abroad.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)] mb-4 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-[var(--gold-bright)] transition-colors">About Us</Link></li>
            <li><Link to="/student-visa-consultant-ghaziabad" className="hover:text-[var(--gold-bright)] transition-colors">Student Visa Guidance</Link></li>
            <li><Link to="/services" className="hover:text-[var(--gold-bright)] transition-colors">Services</Link></li>
            <li><Link to="/exams" className="hover:text-[var(--gold-bright)] transition-colors">Exams</Link></li>
            <li><Link to="/destinations" className="hover:text-[var(--gold-bright)] transition-colors">Destinations</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--gold-bright)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)] mb-4 uppercase tracking-wide">Head Office</h3>
          <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
            <li>1st Floor, AVS City Square</li>
            <li>11, Raj Nagar Extension, Ghaziabad 201017</li>
            <li>+91 9599080935</li>
            <li>admissions@viasphereglobal.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[var(--ink)] mb-4 uppercase tracking-wide">Office Hours</h3>
          <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
            <li>Monday – Friday: 9:30am – 6:30pm</li>
            <li>Saturday: 10:00am – 2:00pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--parchment)]/10 py-5 text-center text-xs text-[var(--ink-soft)]">
        © {new Date().getFullYear()} ViaSphere Global Consultants. All rights reserved.
      </div>
    </footer>
  )
}
