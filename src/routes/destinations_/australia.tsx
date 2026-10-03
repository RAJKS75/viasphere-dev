import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/australia')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'australia')!} />,
  head: () => seoHead({
    title: 'Study in Australia for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore Australian universities, study options, admissions and Student visa subclass 500 preparation with ViaSphere Global Consultants.',
    path: '/destinations/australia',
  }),
})
