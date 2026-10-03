import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_URL } from '@/lib/seo'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'ViaSphere Global Consultants | Study Abroad & Student Visa Guidance',
      },
      {
        name: 'description',
        content:
          'ViaSphere Global Consultants provides study abroad counselling, university admissions and student visa guidance for students in Ghaziabad and Delhi NCR.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'Organization',
                    '@id': `${SITE_URL}/#organization`,
                    name: 'ViaSphere Global Consultants',
                    url: SITE_URL,
                    logo: `${SITE_URL}/images/viasphere-logo.png`,
                    email: 'admissions@viasphereglobal.com',
                    telephone: '+91 9599080935',
                  },
                  {
                    '@type': 'LocalBusiness',
                    '@id': `${SITE_URL}/#localbusiness`,
                    name: 'ViaSphere Global Consultants',
                    url: SITE_URL,
                    telephone: '+91 9599080935',
                    email: 'admissions@viasphereglobal.com',
                    image: `${SITE_URL}/images/viasphere-logo.png`,
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: 'Shop No-11, First Floor, AVS City Square, Rajnagar Extension',
                      addressLocality: 'Ghaziabad',
                      addressRegion: 'Uttar Pradesh',
                      postalCode: '201017',
                      addressCountry: 'IN',
                    },
                    areaServed: [
                      { '@type': 'City', name: 'Ghaziabad' },
                      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
                    ],
                    serviceType: [
                      'Study Abroad Consulting',
                      'University Admissions Guidance',
                      'Student Visa Guidance',
                    ],
                    parentOrganization: { '@id': `${SITE_URL}/#organization` },
                  },
                ],
              }),
            }}
          />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
