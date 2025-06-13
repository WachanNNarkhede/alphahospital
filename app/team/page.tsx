import type { Metadata } from 'next';
import TeamPageClient from './TeamPageClient';

export const metadata: Metadata = {
  title: 'Our Medical Team - Alpha Hospital',
  description:
    'Meet our team of board-certified physicians, specialists, and healthcare professionals at Alpha Hospital. Experienced doctors dedicated to providing exceptional patient care.',
};

export default function TeamPage() {
  return <TeamPageClient />;
}