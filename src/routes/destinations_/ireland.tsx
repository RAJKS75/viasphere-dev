import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/ireland')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'ireland')!} />,
  head: () => seoHead({
    title: 'Study in Ireland for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore Irish universities, study options, admissions and student visa guidance with ViaSphere Global Consultants.',
    path: '/destinations/ireland',
  }),
})
