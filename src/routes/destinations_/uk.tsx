import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/uk')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'uk')!} />,
  head: () => seoHead({
    title: 'Study in the UK for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore UK universities, undergraduate and postgraduate study options, admissions and Student visa preparation with ViaSphere Global Consultants.',
    path: '/destinations/uk',
  }),
})
