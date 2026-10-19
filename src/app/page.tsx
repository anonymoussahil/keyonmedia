import type { Metadata } from 'next';
import HomeExperience from '@/components/HomeExperience';
import Ribbon from '@/components/Ribbon';

export const metadata: Metadata = {
  title: 'Advertising, Marketing & Creative Solutions',
  description: 'Discover integrated advertising, digital marketing, public relations, outdoor media, events and creative services with KeyOn Media Private Limited.',
  alternates: { canonical: '/' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KeyOn Media Private Limited',
  url: 'https://www.keyonmedia.in/',
  email: 'keyonmediapl@gmail.com',
  telephone: ['+91 99209 92393', '+91 91377 06231'],
  address: { '@type': 'PostalAddress', streetAddress: 'B-006, Kinza Apartment, behind Raj Atlantis, Kanakia Road', addressLocality: 'Mira Road (East)', postalCode: '401107', addressCountry: 'IN' },
};

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><HomeExperience /></>;
}
