import { CounsellingButton } from './Counselling'
import { Link, useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'
import { studyDestinations } from '@/data/studyAbroad'
import { exams } from '@/data/exams'

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
        <div className="header-contact"><CounsellingButton className="button-primary">Avail Free Consultation</CounsellingButton></div>
        <button type="button" className="menu-toggle" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? 'Close menu' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      </div>
      <nav id="primary-navigation" aria-label="Main navigation" className={`primary-navigation${open ? ' is-open' : ''}`}>
        {navLinks.map(link => link.to === '/destinations' || link.to === '/exams' ? (
          <details
            key={`${pathname}-${link.to}`}
            className="destination-menu"
            onPointerEnter={event => {
              if (event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
              const current = event.currentTarget
              current.closest('nav')?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach(menu => { if (menu !== current) menu.open = false })
              current.open = true
            }}
            onPointerLeave={event => {
              if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) event.currentTarget.open = false
            }}
            onBlur={event => {
              if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false
            }}
            onKeyDown={event => {
              if (event.key === 'Escape') {
                event.currentTarget.open = false
                event.currentTarget.querySelector('summary')?.focus()
              }
            }}
            onClick={event => {
              if ((event.target as HTMLElement).closest('a')) {
                event.currentTarget.open = false
                setOpen(false)
              }
            }}
          >
            <summary className="nav-button" aria-label={link.to === '/destinations' ? 'Study destinations' : 'Study exams'}>{link.label} <span aria-hidden="true">⌄</span></summary>
            <div className="destination-dropdown">
              <Link to={link.to} className="all-destinations">All {link.label}</Link>
              <div className="destination-menu-grid">
                {link.to === '/destinations'
                  ? studyDestinations.map(destination => <a key={destination.id} href={`/destinations/${destination.id}`}>{destination.country}</a>)
                  : exams.map(exam => <Link key={exam.id} to="/exams/$exam" params={{ exam: exam.id }}>{exam.name}</Link>)}
              </div>
            </div>
          </details>
        ) : <Link key={link.to} to={link.to} activeOptions={{ exact: true }} className="nav-button" activeProps={{ 'aria-current': 'page' }} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <div className="mobile-consultation" onClick={() => setOpen(false)}><CounsellingButton className="button-primary">Avail Free Consultation</CounsellingButton></div>
      </nav>
    </header>
  )
}
