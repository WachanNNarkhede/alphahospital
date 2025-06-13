'use client';

import React, { useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Phone, Mail, MessageCircle, Clock, CreditCard, FileText, Users, Calendar, Shield } from 'lucide-react';
import type {  Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

// Dynamically import Particles to prevent SSR issues
const Particles = dynamic(() => import('react-particles'), { ssr: false });

// Development-only key validation
if (process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('Encountered two children with the same key')) {
      console.trace('Key Error Trace:', args);
    }
    originalConsoleError(...args);
  };
}

export default function FAQComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: 'none' as const,
        random: false,
        straight: false,
        outModes: { default: 'out' as const },
      },
    },
    detectRetina: true,
  };

  const generalFAQs = [
    {
      question: 'What are your visiting hours?',
      answer:
        'Our general visiting hours are from 8:00 AM to 8:00 PM daily. However, visiting hours may vary by department. ICU visiting hours are more restricted (2:00 PM - 4:00 PM and 6:00 PM - 8:00 PM). We recommend calling the specific department to confirm visiting hours before your visit.',
    },
    {
      question: 'Do you accept walk-in patients?',
      answer:
        'We accept walk-in patients for emergency care 24/7. For non-emergency services, we strongly recommend scheduling an appointment to minimize wait times. Our urgent care center accepts walk-ins during business hours (8:00 AM - 8:00 PM) for non-life-threatening conditions.',
    },
    {
      question: 'What should I bring to my appointment?',
      answer:
        'Please bring a valid photo ID, your insurance card, a list of current medications, any relevant medical records or test results, and a form of payment for any copays or deductibles. If you’re a new patient, please arrive 15 minutes early to complete registration paperwork.',
    },
    {
      question: 'How can I access my medical records?',
      answer:
        'You can access your medical records through our patient portal online, by calling our medical records department at (555) 123-4580, or by visiting in person with proper identification. Online access is available 24/7, while our office hours are Monday-Friday, 8:00 AM - 5:00 PM.',
    },
    {
      question: 'Do you offer telemedicine services?',
      answer:
        'Yes, we offer telemedicine consultations for many specialties including primary care, psychiatry, dermatology, and follow-up appointments. To schedule a telemedicine appointment, call our appointment line or use our online booking system. You’ll need a device with internet access and a camera.',
    },
  ];

  const appointmentFAQs = [
    {
      question: 'How do I schedule an appointment?',
      answer:
        'You can schedule an appointment by calling our appointment line at (555) 123-4568, using our online booking system on our website, or through our mobile app. For urgent appointments, please call directly. Our appointment schedulers are available Monday-Friday, 7:00 AM - 7:00 PM.',
    },
    {
      question: 'How far in advance should I book my appointment?',
      answer:
        'For routine appointments, we recommend booking 1-2 weeks in advance. Specialist appointments may require 2-4 weeks advance notice. Annual physicals and preventive care should be scheduled 4-6 weeks ahead. Emergency and urgent care are available without appointments.',
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'We require at least 24 hours notice for appointment cancellations. Cancellations made less than 24 hours in advance may result in a cancellation fee. No-shows may be charged the full appointment fee. You can cancel appointments online, through our app, or by calling our office.',
    },
    {
      question: 'Can I request a specific doctor?',
      answer:
        'Yes, you can request a specific doctor when scheduling your appointment. However, availability may be limited based on the doctor’s schedule. If your preferred doctor is not available, we can schedule you with another qualified physician in the same specialty or put you on a waiting list.',
    },
    {
      question: 'What if I’m running late for my appointment?',
      answer:
        'Please call us immediately if you’re running late. We can usually accommodate delays of 15 minutes or less. For longer delays, we may need to reschedule your appointment depending on the doctor’s schedule and other patient appointments.',
    },
  ];

  const billingFAQs = [
    {
      question: 'What insurance plans do you accept?',
      answer:
        'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and many others. Please call our insurance verification department at (555) 123-4569 or check with your insurance provider to confirm coverage before your visit.',
    },
    {
      question: 'When will I receive my bill?',
      answer:
        'You will typically receive your bill 2-4 weeks after your visit, once we’ve processed your insurance claims. Bills are sent via mail and are also available through our patient portal. If you haven’t received a bill within 6 weeks, please contact our billing department.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept cash, checks, credit cards (Visa, MasterCard, American Express, Discover), debit cards, and HSA/FSA cards. We also offer payment plans for larger bills. Online payments can be made through our patient portal or by calling our automated payment line.',
    },
    {
      question: 'Do you offer financial assistance?',
      answer:
        'Yes, we offer financial assistance programs for qualifying patients. Our financial counselors can help you understand your options, including payment plans, charity care, and assistance programs. Contact our financial assistance office at (555) 123-4571 to learn more.',
    },
    {
      question: 'How do I dispute a charge on my bill?',
      answer:
        'If you have questions about charges on your bill, please contact our billing department at (555) 123-4569. Have your account number and the specific charges you’re questioning ready. We’ll review your account and work with you to resolve any billing issues.',
    },
  ];

  const serviceFAQs = [
    {
      question: 'Do you have an emergency department?',
      answer:
        'Yes, we have a full-service emergency department that operates 24/7, 365 days a year. Our emergency department is equipped to handle all types of medical emergencies and is staffed by board-certified emergency medicine physicians and trauma specialists.',
    },
    {
      question: 'What laboratory services do you offer?',
      answer:
        'We offer comprehensive laboratory services including blood tests, urine tests, cultures, pathology, and specialized testing. Most routine lab work can be done without an appointment during our lab hours: Monday-Friday 6:00 AM - 8:00 PM, Saturday 7:00 AM - 3:00 PM.',
    },
    {
      question: 'Do you offer imaging services?',
      answer:
        'Yes, we provide full imaging services including X-rays, CT scans, MRI, ultrasound, mammography, and nuclear medicine. Most imaging requires an appointment and a doctor’s order. Our imaging department is open Monday-Friday 7:00 AM - 7:00 PM, Saturday 8:00 AM - 4:00 PM.',
    },
    {
      question: 'Is there a pharmacy on-site?',
      answer:
        'Yes, we have a full-service pharmacy located on the first floor of the hospital. Our pharmacy is open Monday-Friday 8:00 AM - 8:00 PM, Saturday 9:00 AM - 5:00 PM, and Sunday 10:00 AM - 4:00 PM. We can fill prescriptions and provide medication counseling.',
    },
    {
      question: 'Do you offer surgical services?',
      answer:
        'We offer a full range of surgical services including general surgery, orthopedic surgery, cardiac surgery, neurosurgery, and minimally invasive procedures. Our operating rooms are equipped with the latest technology, and our surgical team includes board-certified surgeons and anesthesiologists.',
    },
  ];

  const categories = [
    { id: 'general', label: 'General', count: generalFAQs.length },
    { id: 'appointments', label: 'Appointments', count: appointmentFAQs.length },
    { id: 'billing', label: 'Billing & Insurance', count: billingFAQs.length },
    { id: 'services', label: 'Services', count: serviceFAQs.length },
  ];

  const contactOptions = [
    { id: 'call-us', title: 'Call Us', description: 'Speak with our patient services team', contact: '+1 (555) 123-4567', hours: 'Mon-Fri 8AM-8PM' },
    { id: 'email-us', title: 'Email Us', description: 'Send us your questions via email', contact: 'info@Aplhahospital.com', hours: 'Response within 24 hours' },
    { id: 'live-chat', title: 'Live Chat', description: 'Chat with our support team online', contact: 'Available on website', hours: 'Mon-Fri 8AM-8PM' },
  ];

  const quickLinks = [
    { id: 'book-appointment', label: 'Book Appointment' },
    { id: 'patient-portal', label: 'Patient Portal' },
    { id: 'pay-bill', label: 'Pay Bill Online' },
    { id: 'medical-records', label: 'Medical Records' },
  ];

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <Suspense fallback={null}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="absolute inset-0"
          />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
              Explore answers to common questions about our services, appointments, billing, and patient care. Connect
              with us for personalized assistance.
            </p>
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-6 h-6" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-12 py-4 text-lg bg-white/10 text-white border-0 rounded-xl backdrop-blur-sm placeholder-blue-200 focus:ring-2 focus:ring-blue-300"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
                  Search
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                data-key={`category-${category.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: categories.indexOf(category) * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  transition: { type: 'spring', stiffness: 200 },
                }}
                style={{ transformPerspective: 1000 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {category.id === 'general' && <FileText className="w-14 h-14 text-blue-600 mx-auto mb-4" />}
                    {category.id === 'appointments' && <Calendar className="w-14 h-14 text-blue-600 mx-auto mb-4" />}
                    {category.id === 'billing' && <CreditCard className="w-14 h-14 text-blue-600 mx-auto mb-4" />}
                    {category.id === 'services' && <Shield className="w-14 h-14 text-blue-600 mx-auto mb-4" />}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.label}</h3>
                    <p className="text-blue-600 font-semibold">{category.count} questions</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-blue-50 rounded-xl p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  data-key={`tab-${category.id}`}
                  value={category.id}
                  className="text-gray-800 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-3"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <div key="general-tab-content">
                <TabsContent value="general">
                  <motion.div
                    key="general-motion"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">General Questions</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {generalFAQs.map((faq, index) => (
                        <AccordionItem
                          key={`general-${index}`}
                          data-key={`general-${index}`}
                          value={`general-${index}`}
                          className="bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100"
                        >
                          <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </TabsContent>
              </div>

              <div key="appointments-tab-content">
                <TabsContent value="appointments">
                  <motion.div
                    key="appointments-motion"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Appointments & Scheduling</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {appointmentFAQs.map((faq, index) => (
                        <AccordionItem
                          key={`appointment-${index}`}
                          data-key={`appointment-${index}`}
                          value={`appointment-${index}`}
                          className="bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100"
                        >
                          <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </TabsContent>
              </div>

              <div key="billing-tab-content">
                <TabsContent value="billing">
                  <motion.div
                    key="billing-motion"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Billing & Insurance</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {billingFAQs.map((faq, index) => (
                        <AccordionItem
                          key={`billing-${index}`}
                          data-key={`billing-${index}`}
                          value={`billing-${index}`}
                          className="bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100"
                        >
                          <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </TabsContent>
              </div>

              <div key="services-tab-content">
                <TabsContent value="services">
                  <motion.div
                    key="services-motion"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Hospital Services</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {serviceFAQs.map((faq, index) => (
                        <AccordionItem
                          key={`service-${index}`}
                          data-key={`service-${index}`}
                          value={`service-${index}`}
                          className="bg-white/50 backdrop-blur-sm rounded-lg border border-blue-100"
                        >
                          <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                </TabsContent>
              </div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our patient services team is ready to assist with any questions or concerns you may have.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option) => (
              <motion.div
                key={option.id}
                data-key={`contact-${option.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: contactOptions.indexOf(option) * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      {option.id === 'call-us' && <Phone className="w-8 h-8 text-blue-600" />}
                      {option.id === 'email-us' && <Mail className="w-8 h-8 text-blue-600" />}
                      {option.id === 'live-chat' && <MessageCircle className="w-8 h-8 text-blue-600" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-blue-600">{option.contact}</p>
                      <p className="text-sm text-gray-500 flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {option.hours}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30">
              Contact Patient Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
            <p className="text-blue-100">Access essential services with ease</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <motion.div
                key={link.id}
                data-key={`link-${link.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: quickLinks.indexOf(link) * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              >
                <Button
                  variant="outline"
                  className="border-blue-200 text-black hover:bg-blue-600 hover:text-white p-6 h-auto flex-col w-full rounded-xl"
                >
                  {link.id === 'book-appointment' && <Calendar className="w-8 h-8 mb-2" />}
                  {link.id === 'patient-portal' && <Users className="w-8 h-8 mb-2" />}
                  {link.id === 'pay-bill' && <CreditCard className="w-8 h-8 mb-2" />}
                  {link.id === 'medical-records' && <FileText className="w-8 h-8 mb-2" />}
                  {link.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}