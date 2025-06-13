import type { Metadata } from 'next';
import GivingComponent from '@/app/giving/GivingComponent';

export const metadata: Metadata = {
  title: 'Giving & Support - Alpha Hospital',
  description:
    'Support Alpha Hospital through donations, volunteering, and planned giving. Your generosity helps us provide exceptional healthcare and advance medical research.',
};

export default function GivingPage() {
  return <GivingComponent />;
}