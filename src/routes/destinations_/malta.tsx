import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/malta')({
  component: () => <CountryDestinationPage destination={studyDestinations.find(item => item.id === 'malta')!} />,
  head: () => seoHead({
    title: 'Study in Malta | Universities & Student Visa Guidance | ViaSphere',
    description: 'Explore Malta study options, University of Malta and MCAST admissions links, and official student visa guidance with ViaSphere Global Consultants.',
    path: '/destinations/malta',
  }),
})
