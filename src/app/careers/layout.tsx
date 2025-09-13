import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Khulisani Capital | Join Our Financial Advisory Team',
  description: 'Explore career opportunities at Khulisani Capital. Join our team of financial experts in Sandton. Full-time positions, internships, and graduate programs available in accounting, tax, and financial advisory.',
  keywords: [
    'careers Khulisani Capital',
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
    title: 'Careers at Khulisani Capital | Join Our Financial Advisory Team',
    description: 'Explore exciting career opportunities at Khulisani Capital. Join our team of financial experts and grow your career in accounting, tax, and strategic consulting.',
    url: 'https://khulisanicapital.com/careers',
    type: 'website',
  },
  alternates: {
    canonical: 'https://khulisanicapital.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
