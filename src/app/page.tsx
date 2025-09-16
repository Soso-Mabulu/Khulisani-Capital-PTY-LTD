import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import MissionSection from '@/components/sections/mission-section';
import ValuesSection from '@/components/sections/values-section';
import ServicesSection from '@/components/sections/services-section';
import TeamsSection from '@/components/sections/teams-section';
import FaqSection from '@/components/sections/faq-section';
import Script from 'next/script';

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Kulisani Capital offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive financial services including Accounting & Technical Advisory, Tax Advisory, Business Valuations, Due Diligence, Audit Readiness & Review, Financial Modelling & Forecasting, and Business Automation & IT Solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How can I request a consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach out to us via our Contact Us page or email us directly at info@kulisanicapital.com. Once we understand your needs, we'll tailor a proposal or engagement plan that suits your business objectives."
        }
      },
      {
        "@type": "Question",
        "name": "What industries do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve a diverse client base across multiple sectors — from startups and SMEs to large enterprises. Our experience spans financial services, fintech, manufacturing, professional services, and more."
        }
      }
    ]
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kulisani Capital (Pty) Ltd",
    "description": "Premier financial advisory firm specializing in accounting, tax advisory, business valuations, and strategic consulting services.",
    "url": "https://kulisanicapital.com",
    "telephone": "+27-72-224-3956",
    "email": "info@kulisanicapital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "109 Leeuwkop Rd, 123 The Kanyin",
      "addressLocality": "Sandton",
      "addressRegion": "Gauteng",
      "postalCode": "2191",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-26.1076",
      "longitude": "28.0567"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "serviceType": "Financial Advisory Services",
    "hasCredential": "Chartered Accountants",
    "knowsAbout": [
      "Accounting",
      "Tax Advisory",
      "Business Valuations",
      "Due Diligence",
      "Financial Modelling",
      "IFRS Compliance",
      "Audit Readiness"
    ]
  };

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <Script
        id="local-business-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <HeroSection />
        <div className="animate-fade-in-up animation-delay-200">
          <AboutSection />
        </div>
        <div className="animate-fade-in-up animation-delay-400">
          <MissionSection />
        </div>
        <div className="animate-fade-in-up animation-delay-600">
          <ValuesSection />
        </div>
        <div className="animate-fade-in-up animation-delay-800">
          <ServicesSection />
        </div>
        <div className="animate-fade-in-up animation-delay-1000">
          <TeamsSection />
        </div>
        <div className="animate-fade-in-up animation-delay-1200">
          <FaqSection />
        </div>
      </div>
    </>
  );
}
