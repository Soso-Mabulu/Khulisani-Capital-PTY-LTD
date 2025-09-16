import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Kulisani Capital | Get Expert Financial Advisory Today',
  description: 'Contact Kulisani Capital for expert financial advisory services. Located in Sandton, Gauteng. Call +27 72 224 3956 or email info@kulisanicapital.com. Professional consultation available.',
  keywords: [
    'contact Kulisani Capital',
    'financial advisor Sandton',
    'business consultation',
    'accounting consultation',
    'tax advisory consultation',
    'financial planning meeting',
    'professional services Gauteng',
    'business advisory contact',
    'financial expert consultation'
  ],
  openGraph: {
    title: 'Contact Kulisani Capital | Get Expert Financial Advisory Today',
    description: 'Get in touch with our financial experts. Located in Sandton, Gauteng. Professional consultation and advisory services available.',
    url: 'https://kulisanicapital.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kulisanicapital.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
