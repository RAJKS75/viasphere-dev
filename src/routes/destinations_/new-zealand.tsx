import { createFileRoute } from '@tanstack/react-router'
import { CountryDestinationPage } from '@/components/destinations/CountryDestinationPage'
import { studyDestinations } from '@/data/studyAbroad'
import { seoHead } from '@/lib/seo'

export const Route = createFileRoute('/destinations_/new-zealand')({
  component: () => <CountryDestinationPage destination={studyDestinations.find((item) => item.id === 'new-zealand')!} />,
  head: () => seoHead({
    title: 'Study in New Zealand for Indian Students | Universities & Student Visa | ViaSphere',
    description: 'Explore New Zealand universities, study options, admissions and student visa guidance with ViaSphere Global Consultants.',
    path: '/destinations/new-zealand',
  }),
})
