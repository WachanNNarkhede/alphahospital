import type { Metadata } from 'next';
import ServicesComponent from './ServicesComponent';

export const metadata: Metadata = {
  title: 'Medical Services - Alpha Hospital',
  description: 'Explore advanced medical services at Alpha Hospital.',
};

export default function ServicesPage() {
  return <ServicesComponent />;
}