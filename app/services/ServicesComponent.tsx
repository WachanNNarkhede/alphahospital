'use client';

import React, { useState, useEffect, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import {
  Heart,
  Brain,
  Stethoscope,
  Activity,
  Zap,
  CheckCircle,
  Calendar,
  Phone,
  Search,
  X,
  LucideIcon,
} from 'lucide-react';
import { allTreatments } from './data/treatments';
import { allDiseases } from './data/diseases';
import { medicalDepartments } from './data/departments';
import { debounce } from 'lodash';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

// Lazy-load particles (using react-particles to match GivingComponent)
const Particles = dynamic(() => import('react-particles'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black/20" />,
});

// Interfaces
interface EmergencyService {
  icon: LucideIcon;
  title: string;
  description: string;
  waitTime: string;
}

interface MedicalDepartment {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  color: string;
  specialists: number;
  procedures: string;
  accreditation: string;
  treatments: string[];
  conditions: string[];
}

const emergencyServices: EmergencyService[] = [
  {
    icon: Zap,
    title: '24/7 Emergency Care',
    description: 'Immediate triage and treatment around the clock',
    waitTime: '< 15 min',
  },
  {
    icon: Activity,
    title: 'Level II Trauma Center',
    description: 'Specialized surgical teams for trauma care',
    waitTime: 'Immediate',
  },
  {
    icon: Heart,
    title: 'Cardiac Emergency',
    description: 'Heart attack treatment within 90 minutes',
    waitTime: '< 90 min',
  },
  {
    icon: Brain,
    title: 'Stroke Center',
    description: 'Rapid intervention for stroke patients',
    waitTime: '< 60 min',
  },
];

// Particle configuration (exact match from GivingComponent)
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
    color: { value: '#ffffff' }, // White, as requested
    shape: { type: 'circle' }, // Circle, as requested
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

export default function ServicesComponent() {
  const [treatmentSearchQuery, setTreatmentSearchQuery] = useState('');
  const [conditionSearchQuery, setConditionSearchQuery] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState('cardiology');
  const [filteredTreatments, setFilteredTreatments] = useState<string[]>(allTreatments);
  const [filteredDiseases, setFilteredDiseases] = useState<string[]>(allDiseases);

  // Debounced search
  const handleSearch = useCallback(
    debounce((query: string, type: 'treatment' | 'condition') => {
      if (type === 'treatment') {
        setFilteredTreatments(
          allTreatments.filter((treatment) => treatment.toLowerCase().includes(query.toLowerCase())),
        );
      } else {
        setFilteredDiseases(
          allDiseases.filter((disease) => disease.toLowerCase().includes(query.toLowerCase())),
        );
      }
    }, 300),
    [],
  );

  useEffect(() => {
    handleSearch(treatmentSearchQuery, 'treatment');
    return () => handleSearch.cancel();
  }, [treatmentSearchQuery, handleSearch]);

  useEffect(() => {
    handleSearch(conditionSearchQuery, 'condition');
    return () => handleSearch.cancel();
  }, [conditionSearchQuery, handleSearch]);

  // Particles init (same as GivingComponent)
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Navigation links
  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'emergency', label: 'Emergency' },
    { id: 'specialties', label: 'Specialties' },
    { id: 'directory', label: 'Directory' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navigation */}
      <nav className=" top-0 z-50 bg-gray-100/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-4 sm:space-x-6 py-4 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-full bg-gray-200/50 hover:bg-blue-100/50 whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section - Updated to match GivingComponent */}
      <section id="hero" className="relative py-32 bg-gradient-to-br from-blue-900 to-indigo-700 text-white overflow-hidden">
        <Suspense fallback={null}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className="absolute inset-0"
          />
        </Suspense>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Advanced Medical Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 drop-shadow-md"
          >
            Expert care across 25+ specialties with cutting-edge technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white/30 backdrop-blur-sm text-white border-white/40 hover:bg-white/40 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              aria-label="Book Appointment"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Services Section */}
      <section id="emergency" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rapid response with our Level II Trauma Center.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50/80 backdrop-blur-sm shadow-md border-none hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 flex-grow">{service.description}</p>
                    <div className="text-sm text-gray-500">
                      Wait Time: <span className="font-semibold text-red-600">{service.waitTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              aria-label="Call Emergency Services"
            >
              <Phone className="w-5 h-5 mr-2" />
              (555) 911-1234
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Medical Specialties Section */}
      <section id="specialties" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialties</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert care delivered by leading specialists.
            </p>
          </motion.div>
          <Tabs defaultValue="cardiology" onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-gray-200/50 backdrop-blur-sm rounded-full p-2 overflow-x-auto scrollbar-hide">
              {medicalDepartments.map((dept: MedicalDepartment) => (
                <motion.div
                  key={dept.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabsTrigger
                    value={dept.id}
                    className="text-sm font-medium text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white rounded-full px-4 py-2 whitespace-nowrap"
                  >
                    <dept.icon className="w-4 h-4 mr-2" />
                    {dept.title.split(' ')[0]}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
            {medicalDepartments.map((dept: MedicalDepartment) => (
              <TabsContent key={dept.id} value={dept.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${dept.color} flex items-center justify-center mr-3`}
                      >
                        <dept.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">{dept.title}</h3>
                    </div>
                    <p className="text-base text-gray-600 mb-6">{dept.description}</p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Specialists</div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${(dept.specialists / 20) * 100}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                          />
                        </div>
                        <div className="text-base font-semibold text-gray-900 mt-1">{dept.specialists}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Procedures</div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: '80%' }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                          />
                        </div>
                        <div className="text-base font-semibold text-gray-900 mt-1">{dept.procedures}</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-5 py-2 rounded-full"
                          aria-label={`Schedule Appointment for ${dept.title}`}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-50/50 px-5 py-2 rounded-full"
                          aria-label={`Learn More about ${dept.title}`}
                        >
                          Learn More
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={dept.image}
                      alt={dept.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-12 grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-blue-600" />
                      Treatments
                    </h4>
                    <ul className="space-y-2">
                      {dept.treatments.slice(0, 5).map((treatment, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Stethoscope className="w-4 h-4 mr-2 text-blue-600" />
                      Conditions
                    </h4>
                    <ul className="space-y-2">
                      {dept.conditions.slice(0, 5).map((condition, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Treatment & Condition Directory */}
      <section id="directory" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Care</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Search our directory of treatments and conditions.
            </p>
          </motion.div>
          <div className="space-y-12">
            {/* Treatments Search */}
            <div>
              <div className="relative max-w-xl mx-auto mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search treatments..."
                  className="pl-12 pr-12 py-6 text-base border-none bg-gray-50/80 backdrop-blur-sm rounded-full shadow-inner focus:ring-2 focus:ring-blue-600 transition-all"
                  value={treatmentSearchQuery}
                  onChange={(e) => setTreatmentSearchQuery(e.target.value)}
                  aria-label="Search treatments"
                />
                {treatmentSearchQuery && (
                  <button
                    onClick={() => setTreatmentSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear treatment search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <Card className="bg-gray-50/80 backdrop-blur-sm shadow-inner rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Treatments (A-Z)</h3>
                <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {filteredTreatments.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredTreatments.slice(0, 20).map((treatment, index) => (
                        <li
                          key={index}
                          className="flex items-center py-3 text-sm text-gray-700 border-b border-gray-200/50 last:border-b-0"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="truncate">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-6 text-center text-gray-500 text-sm">
                      No treatments found.
                    </div>
                  )}
                </div>
              </Card>
            </div>
            {/* Conditions Search */}
            <div>
              <div className="relative max-w-xl mx-auto mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search conditions..."
                  className="pl-12 pr-12 py-6 text-base border-none bg-gray-50/80 backdrop-blur-sm rounded-full shadow-inner focus:ring-2 focus:ring-blue-600 transition-all"
                  value={conditionSearchQuery}
                  onChange={(e) => setConditionSearchQuery(e.target.value)}
                  aria-label="Search conditions"
                />
                {conditionSearchQuery && (
                  <button
                    onClick={() => setConditionSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear condition search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <Card className="bg-gray-50/80 backdrop-blur-sm shadow-inner rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Conditions (A-Z)</h3>
                <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {filteredDiseases.length > 0 ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredDiseases.slice(0, 20).map((disease, index) => (
                        <li
                          key={index}
                          className="flex items-center py-3 text-sm text-gray-700 border-b border-gray-200/50 last:border-b-0"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="truncate">{disease}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-6 text-center text-gray-500 text-sm">
                      No conditions found.
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h2>
            <p className="text-lg text-gray-600">
              Common questions about our services.
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                value: 'item-1',
                question: 'How do I schedule an appointment?',
                answer: 'Call (555) 123-4567 or use our online portal. Appointments are available within 1-2 weeks.',
              },
              {
                value: 'item-2',
                question: 'What insurance do you accept?',
                answer: 'We accept Medicare, Medicaid, Blue Cross, Aetna, and more. Call (555) 123-4569 to verify.',
              },
              {
                value: 'item-3',
                question: 'How do I access my medical records?',
                answer: 'Use our patient portal or contact Health Information at (555) 123-4570.',
              },
            ].map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-none">
                <AccordionTrigger className="text-base font-medium text-gray-900 hover:text-blue-600 text-left bg-gray-50/80 backdrop-blur-sm rounded-lg px-4 py-3 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 px-4 py-3 bg-gray-50/50 rounded-b-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Book your appointment for exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white/30 backdrop-blur-sm text-white border-white/40 hover:bg-white/40 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  aria-label="Book Appointment"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700/50 px-8 py-3 rounded-full font-semibold w-full sm:w-auto"
                  aria-label="Call Us"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (555) 123-4567
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}