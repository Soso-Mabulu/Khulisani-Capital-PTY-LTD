import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from "@/components/ui/toaster";
import { Chatbot } from '@/components/chatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://khulisanicapital.com'),
  title: {
    default: 'Khulisani Capital | Leading Financial Advisory & Strategic Consulting in South Africa',
    template: '%s | Khulisani Capital - Expert Financial Advisory Services'
  },
  description: 'Khulisani Capital (Pty) Ltd - Premier financial advisory firm in Sandton, South Africa. Expert accounting, tax advisory, business valuations, due diligence, IFRS compliance, and strategic consulting services. 30+ years combined experience.',
  keywords: [
    'financial advisory South Africa',
    'accounting services Sandton',
    'tax advisory Gauteng',
    'business valuations',
    'due diligence services',
    'IFRS compliance',
    'audit readiness',
    'financial modelling',
    'business automation',
    'chartered accountants',
    'Khulisani Capital',
    'strategic consulting',
    'corporate finance',
    'financial planning',
    'tax compliance SARS',
    'financial reporting',
    'investment advisory',
    'business consulting Johannesburg',
    'financial solutions',
    'professional services firm'
  ],
  authors: [{ name: 'Khulisani Capital Team' }],
  creator: 'Khulisani Capital (Pty) Ltd',
  publisher: 'Khulisani Capital',
  category: 'Financial Services',
  classification: 'Business',
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
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://khulisanicapital.com',
    siteName: 'Khulisani Capital',
    title: 'Khulisani Capital | Leading Financial Advisory & Strategic Consulting in South Africa',
    description: 'Premier financial advisory firm in Sandton, South Africa. Expert accounting, tax advisory, business valuations, due diligence, and strategic consulting services with 30+ years combined experience.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Khulisani Capital - Financial Advisory & Strategic Consulting',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Khulisani Capital Logo',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khulisani Capital | Leading Financial Advisory & Strategic Consulting',
    description: 'Premier financial advisory firm in Sandton, South Africa. Expert accounting, tax advisory, business valuations, and strategic consulting services.',
    images: ['/logo.png'],
    creator: '@KhulisaniCapital',
    site: '@KhulisaniCapital',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://khulisanicapital.com',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // bing: 'your-bing-verification-code', // Add your Bing verification code if needed
  },
  other: {
    'geo.region': 'ZA-GP',
    'geo.placename': 'Sandton, Gauteng, South Africa',
    'geo.position': '-26.1076;28.0567',
    'ICBM': '-26.1076, 28.0567',
    'business:contact_data:street_address': '109 Leeuwkop Rd, 123 The Kanyin',
    'business:contact_data:locality': 'Sandton',
    'business:contact_data:region': 'Gauteng',
    'business:contact_data:postal_code': '2191',
    'business:contact_data:country_name': 'South Africa',
    'business:contact_data:phone_number': '+27722243956',
    'business:contact_data:email': 'info@khulisanicapital.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Khulisani Capital (Pty) Ltd",
              "url": "https://khulisanicapital.com",
              "logo": "https://khulisanicapital.com/logo.png",
              "description": "Premier financial advisory firm in Sandton, South Africa. Expert accounting, tax advisory, business valuations, due diligence, and strategic consulting services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "109 Leeuwkop Rd, 123 The Kanyin",
                "addressLocality": "Sandton",
                "addressRegion": "Gauteng",
                "postalCode": "2191",
                "addressCountry": "ZA"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+27-72-224-3956",
                  "contactType": "customer service",
                  "contactOption": "TollFree",
                  "areaServed": "ZA"
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@khulisanicapital.com",
                  "contactType": "customer service"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-26.1076",
                "longitude": "28.0567"
              },
              "sameAs": [
                "https://www.linkedin.com/company/khulisani-capital",
                "https://twitter.com/KhulisaniCapital",
                "https://www.facebook.com/KhulisaniCapital"
              ],
              "foundingDate": "2024",
              "numberOfEmployees": "10-50",
              "industry": "Financial Services",
              "serviceArea": {
                "@type": "Country",
                "name": "South Africa"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Financial Advisory Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Accounting & Technical Advisory"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tax Advisory Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Valuations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Due Diligence Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Financial Modelling & Forecasting"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Business Automation & IT Solutions"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Chatbot />
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
