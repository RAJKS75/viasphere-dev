export interface Service {
  id: string
  title: string
  summary: string
  detail: string
}

export const services: Array<Service> = [
  {
    id: 'university-shortlisting',
    title: 'University Shortlisting',
    summary: 'Matching your academic profile, budget, interests, and career goals with suitable study options.',
    detail:
      'We review your academic background, preferences, budget, and long-term goals before preparing a practical shortlist with clear reasons for each recommendation.',
  },
  {
    id: 'application-strategy',
    title: 'Application Strategy & SOP Editing',
    summary: 'Structured guidance for statements of purpose, application documents, and submission planning.',
    detail:
      'We help you organise your application story, review supporting documents, and maintain consistency across each university submission while keeping the final work authentically yours.',
  },
  {
    id: 'visa-filing',
    title: 'Visa Filing & Documentation',
    summary: 'Country-aware document checklists and visa preparation for our supported study destinations.',
    detail:
      'Our team helps you organise financial and supporting documents, understand the application stages, and prepare for interviews where applicable. Final decisions remain with the visa authority.',
  },
  {
    id: 'financial-planning',
    title: 'Funding & Scholarship Planning',
    summary: 'Practical planning for tuition, scholarships, education loans, and expected living costs.',
    detail:
      'We help you compare the financial requirements of shortlisted destinations, identify relevant scholarship opportunities, and prepare for discussions with independent education-loan providers.',
  },
  {
    id: 'pre-departure',
    title: 'Pre-Departure Briefing',
    summary: 'Practical guidance for travel preparation, accommodation research, and arrival essentials.',
    detail:
      'Before departure, we share a practical checklist covering travel documents, accommodation, money, communications, health cover, and university arrival requirements.',
  },
  {
    id: 'post-arrival',
    title: 'Post-Arrival Support',
    summary: 'A continued point of contact as you settle into your new academic environment.',
    detail:
      'We remain available for general orientation and referrals after arrival, while academic, immigration, and employment matters stay subject to university and government rules.',
  },
]

export interface Destination {
  id: string
  country: string
  visaType: string
  processingTime: string
  intakeMonths: string
  universities: Array<string>
}

export const destinations: Array<Destination> = [
  {
    id: 'germany',
    country: 'Germany',
    visaType: 'Student Visa',
    processingTime: 'Varies by mission and season',
    intakeMonths: 'Winter and Summer',
    universities: ['Public universities', 'Universities of applied sciences', 'English-taught programmes'],
  },
  {
    id: 'france',
    country: 'France',
    visaType: 'Long-stay Student Visa',
    processingTime: 'Varies by application period',
    intakeMonths: 'September and selected Spring intakes',
    universities: ['Public universities', 'Grandes écoles', 'Business and engineering schools'],
  },
  {
    id: 'netherlands',
    country: 'Netherlands',
    visaType: 'Student Residence Permit',
    processingTime: 'Varies by institution and season',
    intakeMonths: 'September and February',
    universities: ['Research universities', 'Universities of applied sciences', 'International programmes'],
  },
  {
    id: 'malta',
    country: 'Malta',
    visaType: 'National Student Visa',
    processingTime: 'Varies by course and season',
    intakeMonths: 'Multiple intakes by institution',
    universities: ['Universities', 'Higher-education institutes', 'Career-focused programmes'],
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    visaType: 'Student Route Visa',
    processingTime: 'Varies by service and season',
    intakeMonths: 'September, January and selected intakes',
    universities: ['Universities across England', 'Universities across Scotland', 'Universities across Wales and Northern Ireland'],
  },
  {
    id: 'ireland',
    country: 'Ireland',
    visaType: 'Study Visa (D Type)',
    processingTime: 'Varies by application period',
    intakeMonths: 'September and selected January intakes',
    universities: ['Universities', 'Technological universities', 'Specialist higher-education institutions'],
  },
]

export interface ProcessStep {
  id: string
  label: string
  title: string
  description: string
}

export const processSteps: Array<ProcessStep> = [
  {
    id: 'step-1',
    label: '01',
    title: 'Profile Evaluation',
    description: 'An introductory consultation to understand your academic record, interests, budget, destination preferences, and intended intake.',
  },
  {
    id: 'step-2',
    label: '02',
    title: 'Shortlist & Apply',
    description: 'We prepare suitable options, confirm requirements, organise documents, and help you follow each application timeline.',
  },
  {
    id: 'step-3',
    label: '03',
    title: 'Offer & Funding',
    description: 'We help you compare offers, tuition, scholarships, and expected living costs before you choose your next step.',
  },
  {
    id: 'step-4',
    label: '04',
    title: 'Visa Filing',
    description: 'We help organise supporting documents and prepare you for the applicable visa stages and interview requirements.',
  },
  {
    id: 'step-5',
    label: '05',
    title: 'Departure & Beyond',
    description: 'Practical guidance for travel, accommodation research, money, communications, and settling into your new environment.',
  },
]
