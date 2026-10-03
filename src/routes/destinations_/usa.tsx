import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/usa')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'usa')!} />,
  head: () => seoHead({
    title: 'Study in the USA for Indian Students | Universities & F-1 Visa | ViaSphere',
    description: 'Explore US universities, undergraduate and postgraduate study options, admissions and F-1 student visa preparation with ViaSphere Global Consultants.',
    path: '/destinations/usa',
  }),
})
