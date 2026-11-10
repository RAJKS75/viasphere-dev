import { createFileRoute } from '@tanstack/react-router'
import EnglishTraining from '@/components/EnglishTraining'
import { seoHead } from '@/lib/seo'
export const Route = createFileRoute('/ielts-pte-training')({
  component: EnglishTraining,
  head: () => seoHead({ title: 'IELTS & PTE Online Training | ViaSphere Global Consultants', description: 'Explore IELTS and PTE online preparation with ViaSphere. Try free English practice, build your study routine and enquire about training options in Ghaziabad and across India.', path: '/ielts-pte-training' }),
})
