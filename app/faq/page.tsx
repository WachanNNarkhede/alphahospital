import type { Metadata } from 'next';
import FAQComponent from './FAQComponent';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Aplha Hospital',
  description:
    'Find answers to common questions about Aplha Hospital services, appointments, billing, insurance, and patient care. Get the information you need quickly.',
};

export default function FAQPage() {
  return <FAQComponent />;
}