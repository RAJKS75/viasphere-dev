import { CounsellingButton } from './Counselling'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { BrandLogo } from './BrandLogo'
import { studyDestinations } from '@/data/studyAbroad'

const destinationRoutes: Record<string, string> = {
  uk: '/destinations/uk',
  usa: '/destinations/usa',
  australia: '/destinations/australia',
  'new-zealand': '/destinations/new-zealand',
  france: '/destinations/france',
  germany: '/destinations/germany',
  ireland: '/destinations/ireland',
}

function destinationPath(id: string) {
  return destinationRoutes[id] ?? '/destinations'
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/student-visa-consultant-ghaziabad', label: 'Student Visa' },
  { to: '/services', label: 'Services' },
  { to: '/exams', label: 'Exams' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [destOpen, setDestOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" aria-label="ViaSphere Global Consultants home"><BrandLogo /></Link>

        <nav className="hidden xl:flex items-center gap-4">
          <Link to="/" activeOptions={{ exact: true }} className="text-[15px] font-medium text-[var(--ink-soft)] hover:text-[var(--navy)] [&.active]:text-[var(--navy)] [&.active]:font-semibold">Home</Link>
          <Link to="/student-visa-consultant-ghaziabad" className="text-[15px] font-medium text-[var(--ink-soft)] hover:text-[var(--navy)] [&.active]:text-[var(--navy)] [&.active]:font-semibold">Student Visa</Link>

          <div className="relative" onMouseEnter={() => setDestOpen(true)} onMouseLeave={() => setDestOpen(false)}>
            <button type="button" aria-expanded={destOpen} onClick={() => setDestOpen(v => !v)} className="flex items-center gap-1 text-[15px] font-medium text-[var(--ink-soft)] hover:text-[var(--navy)]">
              Destinations <span className="text-xs">⌄</span>
            </button>
            {destOpen && (
              <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                  <Link to="/destinations" className="mb-2 block rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-[var(--navy)] hover:bg-violet-50">All Destinations</Link>
                  <div className="grid grid-cols-2 gap-1">
                    {studyDestinations.map(d => <a key={d.id} href={destinationPath(d.id)} className="rounded-xl px-4 py-3 text-[15px] font-medium text-[var(--ink-soft)] hover:bg-violet-50 hover:text-[var(--navy)]">{d.country}</a>)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => <Link key={link.to} to={link.to} className="text-[15px] font-medium text-[var(--ink-soft)] hover:text-[var(--navy)] [&.active]:text-[var(--navy)] [&.active]:font-semibold">{link.label}</Link>)}
        </nav>

        <div className="hidden xl:block"><CounsellingButton className="button-secondary">Free Counselling</CounsellingButton></div>
        <button type="button" onClick={() => setOpen(v => !v)} className="xl:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu" aria-expanded={open}><span className={`h-0.5 w-6 bg-[var(--navy)] ${open ? 'translate-y-1.5 rotate-45' : ''}`} /><span className={`h-0.5 w-6 bg-[var(--navy)] ${open ? 'opacity-0' : ''}`} /><span className={`h-0.5 w-6 bg-[var(--navy)] ${open ? '-translate-y-1.5 -rotate-45' : ''}`} /></button>
      </div>

      {open && <nav className="xl:hidden border-t border-[var(--navy)]/10 px-6 py-4 flex flex-col gap-3 bg-white">
        <Link to="/" onClick={() => setOpen(false)} className="text-base font-medium text-[var(--ink)]">Home</Link>
        <Link to="/student-visa-consultant-ghaziabad" onClick={() => setOpen(false)} className="text-base font-medium text-[var(--ink)]">Student Visa</Link>
        <div>
          <button type="button" aria-expanded={destOpen} onClick={() => setDestOpen(v => !v)} className="flex w-full items-center justify-between py-1 text-base font-semibold text-[var(--navy)]">Destinations <span>{destOpen ? '−' : '+'}</span></button>
          {destOpen && <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-3">
            <Link to="/destinations" onClick={() => setOpen(false)} className="col-span-2 rounded-xl px-3 py-2 text-sm font-bold text-violet-700">All Destinations</Link>
            {studyDestinations.map(d => <a key={d.id} href={destinationPath(d.id)} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm text-[var(--ink-soft)] hover:bg-white">{d.country}</a>)}
          </div>}
        </div>
        {navLinks.slice(2).map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="text-base font-medium text-[var(--ink)]">{link.label}</Link>)}
        <CounsellingButton className="button-secondary">Free Counselling</CounsellingButton>
      </nav>}
    </header>
  )
}
