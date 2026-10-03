import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/france')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'france')!} />,
  head: () => seoHead({
    title: 'Study in France for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore French universities and higher-education options, admissions and student visa guidance with ViaSphere Global Consultants.',
    path: '/destinations/france',
  }),
})
