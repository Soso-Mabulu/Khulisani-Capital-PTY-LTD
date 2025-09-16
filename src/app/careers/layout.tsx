import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Kulisani Capital | Join Our Financial Advisory Team',
  description: 'Explore career opportunities at Kulisani Capital. Join our team of financial experts in Sandton. Full-time positions, internships, and graduate programs available in accounting, tax, and financial advisory.',
  keywords: [
    'careers Kulisani Capital',
    'financial jobs South Africa',
    'accounting jobs Sandton',
    'chartered accountant careers',
    'tax advisor jobs',
    'financial analyst positions',
    'internships Gauteng',
    'graduate programs finance',
    'professional development',
    'career opportunities'
  ],
  openGraph: {
    title: 'Careers at Kulisani Capital | Join Our Financial Advisory Team',
    description: 'Explore exciting career opportunities at Kulisani Capital. Join our team of financial experts and grow your career in accounting, tax, and strategic consulting.',
    url: 'https://kulisanicapital.com/careers',
    type: 'website',
  },
  alternates: {
    canonical: 'https://kulisanicapital.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
