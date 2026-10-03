import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/germany')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'germany')!} />,
  head: () => seoHead({
    title: 'Study in Germany for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore German universities, undergraduate and postgraduate study options, admissions and student visa preparation with ViaSphere Global Consultants.',
    path: '/destinations/germany',
  }),
})
