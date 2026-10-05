import { CounsellingButton } from './Counselling'
import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'
import { studyDestinations } from '@/data/studyAbroad'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/student-visa-consultant-ghaziabad', label: 'Student Visa' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/services', label: 'Services' },
  { to: '/exams', label: 'Exams' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: state => state.location.pathname })
  useEffect(() => { setOpen(false) }, [pathname])
  return (
    <header className="site-header">
      <div className="header-brand-row">
        <Link to="/" aria-label="ViaSphere Global Consultants home"><BrandLogo /></Link>
        <div className="header-contact"><a href="tel:+919599080935">+91 9599080935</a><CounsellingButton className="button-primary">Avail Free Consultation</CounsellingButton></div>
        <button type="button" className="menu-toggle" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? 'Close menu' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      </div>
      <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? ' is-open' : ''}`}>
        {navLinks.map(link => link.to === '/destinations' ? (
          <details key={link.to} className="destination-menu" onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus() } }}>
            <summary className="nav-button" aria-label="Study destinations">Destinations <span aria-hidden="true">⌄</span></summary>
            <div className="destination-dropdown">
              <Link to="/destinations" className="all-destinations" onClick={event => { event.currentTarget.closest('details')?.removeAttribute('open'); setOpen(false) }}>All Destinations</Link>
              <div className="destination-menu-grid">{studyDestinations.map(destination => <a key={destination.id} href={`/destinations/${destination.id}`} onClick={() => setOpen(false)}>{destination.country}</a>)}</div>
            </div>
          </details>
        ) : <Link key={link.to} to={link.to} activeOptions={{ exact: true }} className="nav-button" activeProps={{ 'aria-current': 'page' }} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <div className="mobile-consultation" onClick={() => setOpen(false)}><CounsellingButton className="button-primary">Avail Free Consultation</CounsellingButton></div>
      </nav>
    </header>
  )
}
