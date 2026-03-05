import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarketScout – AI‑Powered Competitive Intelligence Reports in 24h',
  description: 'Get a 10‑page competitive intelligence report for your niche in 24 hours. AI‑powered research, competitor analysis, pricing insights, and actionable recommendations – $49 one‑time.',
  keywords: ['competitive intelligence', 'market analysis', 'competitor research', 'AI report', 'business intelligence', 'startup research'],
  authors: [{ name: 'MarketScout' }],
  openGraph: {
    type: 'website',
    title: 'MarketScout – AI‑Powered Competitive Intelligence Reports',
    description: 'Get a 10‑page competitive intelligence report for your niche in 24 hours.',
    siteName: 'MarketScout',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'MarketScout Competitive Intelligence Report',
              description: 'AI‑powered competitive intelligence reports delivered in 24 hours.',
              offers: {
                '@type': 'Offer',
                price: '49',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}