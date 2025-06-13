'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Shield,
  Activity,
  Search,
  Calendar,
  Phone,
  Award,
  GraduationCap,
  FileText,
  Star,
  Users,
  Building,
  Pill,
  TreesIcon as Lungs,
  ShipWheelIcon as Wheelchair,
  X,
} from 'lucide-react';
import { debounce } from 'lodash';
import ParticleBackground from '@/app/components/partical';

// Department interface
interface Department {
  id: string;
  name: string;
  icon?: React.ElementType;
  color?: string;
}

// Doctor interface
interface Doctor {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  education: string[];
  certifications: string[];
  specialties: string[];
  experience: string;
  awards: string[];
  publications: number;
  languages: string[];
  bio: string;
  availability: string;
  acceptingNewPatients: boolean;
}

// Leadership interface
interface Leadership {
  name: string;
  title: string;
  image: string;
  bio: string;
}

// Support staff interface
interface SupportStaff {
  icon: React.ElementType;
  department: string;
  director: string;
  staff: string;
  description: string;
}

export default function TeamPageClient() {
  const departments: Department[] = [
    { id: 'all', name: 'All Departments' },
    { id: 'cardiology', name: 'Cardiology', icon: Heart, color: 'from-red-500 to-pink-500' },
    { id: 'neurology', name: 'Neurology', icon: Brain, color: 'from-purple-500 to-indigo-500' },
    { id: 'orthopedics', name: 'Orthopedics', icon: Bone, color: 'from-blue-500 to-cyan-500' },
    { id: 'oncology', name: 'Oncology', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { id: 'emergency', name: 'Emergency', icon: Activity, color: 'from-red-600 to-red-800' },
    { id: 'pediatrics', name: 'Pediatrics', icon: Baby, color: 'from-pink-500 to-rose-500' },
  ];

  const doctors: Doctor[] = [
    {
      id: 'dr-sarah-johnson',
      name: 'Dr. Sarah Johnson, MD, FACC',
      title: 'Chief of Cardiology',
      department: 'cardiology',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Harvard Medical School',
        'Residency, Massachusetts General Hospital',
        'Fellowship in Interventional Cardiology, Cleveland Clinic',
      ],
      certifications: ['Board Certified in Cardiovascular Disease', 'Board Certified in Interventional Cardiology'],
      specialties: [
        'Coronary Artery Disease',
        'Structural Heart Disease',
        'Transcatheter Valve Replacement',
        'Complex Coronary Interventions',
      ],
      experience: '15+ years',
      awards: ["America's Top Cardiologists", "Patient's Choice Award", 'Top Doctor in Cardiology'],
      publications: 24,
      languages: ['English', 'Spanish'],
      bio: 'Dr. Sarah Johnson is a nationally recognized interventional cardiologist with expertise in complex coronary interventions and structural heart procedures. She has pioneered several minimally invasive techniques and has been recognized for her exceptional patient outcomes. Dr. Johnson is passionate about preventive cardiology and has developed comprehensive cardiac rehabilitation programs that have been adopted by hospitals nationwide.',
      availability: 'Monday, Wednesday, Friday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-michael-rodriguez',
      name: 'Dr. Michael Rodriguez, MD, PhD',
      title: 'Cardiac Surgeon',
      department: 'cardiology',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Johns Hopkins University School of Medicine',
        'PhD in Cardiovascular Physiology, Johns Hopkins University',
        'Residency in Cardiothoracic Surgery, Stanford University Medical Center',
      ],
      certifications: ['Board Certified in Thoracic Surgery', 'Board Certified in General Surgery'],
      specialties: [
        'Coronary Artery Bypass Grafting (CABG)',
        'Valve Repair and Replacement',
        'Aortic Surgery',
        'Minimally Invasive Cardiac Surgery',
      ],
      experience: '12+ years',
      awards: ['Excellence in Cardiac Surgery Award', 'Innovator in Medicine'],
      publications: 32,
      languages: ['English', 'Portuguese'],
      bio: 'Dr. Michael Rodriguez is a distinguished cardiac surgeon specializing in complex valve repairs and minimally invasive cardiac procedures. His research in cardiovascular physiology has led to significant advancements in surgical techniques. Dr. Rodriguez has performed over 1,000 cardiac surgeries with exceptional outcomes and is dedicated to advancing the field through his ongoing clinical research and teaching.',
      availability: 'Tuesday, Thursday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-emily-chen',
      name: 'Dr. Emily Chen, MD, PhD',
      title: 'Chief of Neurology',
      department: 'neurology',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Stanford University School of Medicine',
        'PhD in Neuroscience, Stanford University',
        'Residency in Neurology, UCSF Medical Center',
        'Fellowship in Neurophysiology, Mayo Clinic',
      ],
      certifications: ['Board Certified in Neurology', 'Board Certified in Clinical Neurophysiology'],
      specialties: ['Epilepsy', 'Movement Disorders', 'Neurodegenerative Diseases', 'Neurophysiological Monitoring'],
      experience: '18+ years',
      awards: ['Neurology Researcher of the Year', 'Distinguished Clinician Award'],
      publications: 45,
      languages: ['English', 'Mandarin', 'Cantonese'],
      bio: 'Dr. Emily Chen is an internationally recognized neurologist specializing in epilepsy and movement disorders. Her groundbreaking research in neuroplasticity has transformed treatment approaches for patients with neurological conditions. Dr. Chen has developed innovative protocols for managing complex neurological disorders and leads our comprehensive epilepsy center, which has been designated as a Level 4 Epilepsy Center by the National Association of Epilepsy Centers.',
      availability: 'Monday, Tuesday, Thursday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-james-thompson',
      name: 'Dr. James Thompson, MD',
      title: 'Neurosurgeon',
      department: 'neurology',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Yale School of Medicine',
        'Residency in Neurological Surgery, Johns Hopkins Hospital',
        'Fellowship in Skull Base Surgery, Barrow Neurological Institute',
      ],
      certifications: ['Board Certified in Neurological Surgery'],
      specialties: [
        'Brain Tumor Surgery',
        'Skull Base Surgery',
        'Minimally Invasive Spine Surgery',
        'Stereotactic Radiosurgery',
      ],
      experience: '14+ years',
      awards: ['Top Neurosurgeon', 'Surgical Excellence Award'],
      publications: 28,
      languages: ['English'],
      bio: 'Dr. James Thompson is a highly skilled neurosurgeon specializing in complex brain tumor resections and skull base surgery. He has pioneered several minimally invasive neurosurgical techniques that have reduced recovery times and improved outcomes for patients. Dr. Thompson has performed over 1,500 neurosurgical procedures and is particularly known for his expertise in awake craniotomies for tumors in eloquent brain regions, allowing for maximal safe resection while preserving neurological function.',
      availability: 'Wednesday, Friday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-david-kim',
      name: 'Dr. David Kim, MD',
      title: 'Chief of Orthopedic Surgery',
      department: 'orthopedics',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, University of Pennsylvania School of Medicine',
        'Residency in Orthopedic Surgery, Hospital for Special Surgery',
        'Fellowship in Sports Medicine, Andrews Institute',
      ],
      certifications: [
        'Board Certified in Orthopedic Surgery',
        'Certificate of Added Qualification in Sports Medicine',
      ],
      specialties: ['Sports Medicine', 'Arthroscopic Surgery', 'Joint Replacement', 'Cartilage Restoration'],
      experience: '16+ years',
      awards: ['Sports Medicine Excellence Award', 'Orthopedic Innovator Award'],
      publications: 35,
      languages: ['English', 'Korean'],
      bio: 'Dr. David Kim is a renowned orthopedic surgeon specializing in sports medicine and joint preservation. He has served as a team physician for professional sports teams and has treated numerous elite athletes. Dr. Kim has developed innovative techniques in cartilage restoration and minimally invasive joint surgery that have significantly improved patient outcomes. His research in regenerative medicine approaches for orthopedic injuries has been recognized internationally.',
      availability: 'Monday, Tuesday, Thursday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-lisa-martinez',
      name: 'Dr. Lisa Martinez, MD, MPH',
      title: 'Chief of Pediatrics',
      department: 'pediatrics',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Columbia University College of Physicians ',
        'MPH, Harvard School of Public Health',
        'Residency in Pediatrics, Boston Children\'s Hospital',
        'Fellowship in Pediatric Infectious Diseases, Cincinnati Children\'s Hospital',
      ],
      certifications: ['Board Certified in Pediatrics', 'Board Certified in Pediatric Infectious Diseases'],
      specialties: [
        'General Pediatrics',
        'Pediatric Infectious Diseases',
        'Global Health',
        'Vaccine-Preventable Diseases',
      ],
      experience: '20+ years',
      awards: ['Pediatrician of the Year', 'Public Health Service Award', 'Excellence in Teaching'],
      publications: 42,
      languages: ['English', 'Spanish'],
      bio: 'Dr. Lisa Martinez is a compassionate pediatrician with extensive experience in treating complex childhood illnesses. Her work in pediatric infectious diseases has helped develop protocols that have reduced infection rates in children\'s hospitals nationwide. Dr. Martinez is deeply committed to global health initiatives and regularly participates in medical missions to underserved regions. She has a special interest in vaccine education and has developed innovative programs to improve vaccination rates in our community.',
      availability: 'Monday, Wednesday, Friday',
      acceptingNewPatients: true,
    },
    {
      id: 'dr-robert-wilson',
      name: 'Dr. Robert Wilson, MD, FACEP',
      title: 'Director of Emergency Medicine',
      department: 'emergency',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, University of Michigan Medical School',
        'Residency in Emergency Medicine, University of Chicago',
        'Fellowship in Critical Care Medicine, Shock Trauma Center',
      ],
      certifications: ['Board Certified in Emergency Medicine', 'Board Certified in Critical Care Medicine'],
      specialties: ['Trauma Resuscitation', 'Critical Care', 'Disaster Medicine', 'Emergency Ultrasound'],
      experience: '17+ years',
      awards: ['Emergency Medicine Excellence Award', 'Trauma Care Innovation Award'],
      publications: 22,
      languages: ['English'],
      bio: 'Dr. Robert Wilson is an experienced emergency physician with specialized training in trauma and critical care. He has developed rapid response protocols that have significantly improved outcomes for critically ill patients. Dr. Wilson has served as a medical director for disaster response teams and has extensive experience in mass casualty management. His leadership has been instrumental in achieving our Level II Trauma Center designation and implementing evidence-based protocols that have reduced emergency department wait times while improving patient care.',
      availability: 'Rotating Shifts',
      acceptingNewPatients: false,
    },
    {
      id: 'dr-amanda-foster',
      name: 'Dr. Amanda Foster, MD, PhD',
      title: 'Medical Oncologist',
      department: 'oncology',
      image: '/doctor12.jpg?height=400&width=400',
      education: [
        'MD, Duke University School of Medicine',
        'PhD in Cancer Biology, Duke University',
        'Residency in Internal Medicine, Memorial Sloan Kettering Cancer Center',
        'Fellowship in Medical Oncology, Dana-Farber Cancer Institute',
      ],
      certifications: ['Board Certified in Medical Oncology', 'Board Certified in Internal Medicine'],
      specialties: ['Breast Cancer', 'Precision Oncology', 'Immunotherapy', 'Clinical Trials'],
      experience: '13+ years',
      awards: ['Young Investigator Award', 'Clinical Excellence in Oncology'],
      publications: 38,
      languages: ['English', 'French'],
      bio: 'Dr. Amanda Foster is a dedicated oncologist specializing in breast cancer and precision medicine approaches to cancer treatment. Her research in tumor genomics has led to personalized treatment strategies that have improved outcomes for patients with advanced cancers. Dr. Foster is actively involved in clinical trials investigating novel immunotherapies and targeted treatments. She is known for her compassionate approach to patient care and her ability to translate complex medical information into understandable terms for her patients.',
      availability: 'Tuesday, Thursday, Friday',
      acceptingNewPatients: true,
    },
  ];

  const leadershipTeam: Leadership[] = [
    {
      name: 'Dr. Jonathan Reynolds, MD, MBA',
      title: 'Chief Executive Officer',
      image: '/doctor12.jpg?height=200&width=200',
      bio: 'Dr. Reynolds brings 25 years of healthcare leadership experience, combining clinical expertise with business acumen to drive Aplha Hospital\'s mission of excellence in patient care.',
    },
    {
      name: 'Patricia Johnson, RN, MSN',
      title: 'Chief Nursing Officer',
      image: '/doctor12.jpg?height=200&width=200',
      bio: 'With over 20 years of nursing leadership experience, Patricia oversees all nursing operations and is dedicated to maintaining the highest standards of patient care.',
    },
    {
      name: 'Dr. William Chen, MD, MPH',
      title: 'Chief Medical Officer',
      image: '/doctor12.jpg?height=200&width=200',
      bio: 'Dr. Chen provides clinical leadership across all medical departments, ensuring quality, safety, and evidence-based practices throughout Aplha Hospital.',
    },
    {
      name: 'Maria Gonzalez, RN, BSN',
      title: 'Director of Critical Care',
      image: '/doctor12.jpg?height=200&width=200',
      bio: 'Maria leads our critical care units with expertise in emergency and intensive care nursing, implementing protocols that have improved patient outcomes.',
    },
  ];

  const supportStaff: SupportStaff[] = [
    {
      icon: Pill,
      department: 'Pharmacy',
      director: 'Dr. Thomas Lee, PharmD',
      staff: '25 clinical pharmacists',
      description: 'Our pharmacy team provides comprehensive medication management and clinical pharmacy services.',
    },
    {
      icon: Lungs,
      department: 'Respiratory Therapy',
      director: 'James Wilson, RRT',
      staff: '18 respiratory therapists',
      description: 'Specialized respiratory care for patients with breathing disorders and critical care needs.',
    },
    {
      icon: Wheelchair,
      department: 'Physical Therapy',
      director: 'Sarah Miller, DPT',
      staff: '22 physical therapists',
      description: 'Rehabilitation services to help patients regain mobility and function after injury or surgery.',
    },
    {
      icon: Building,
      department: 'Administration',
      director: 'Michael Thompson, MBA',
      staff: '35 administrative professionals',
      description: 'Supporting hospital operations to ensure efficient, patient-centered care delivery.',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  const [activeTab, setActiveTab] = useState('all');

  const handleSearch = useCallback(
    debounce((query: string) => {
      const lowerQuery = query.toLowerCase();
      setFilteredDoctors(
        doctors.filter(
          (doctor) =>
            doctor.name.toLowerCase().includes(lowerQuery) ||
            doctor.title.toLowerCase().includes(lowerQuery) ||
            doctor.specialties.some((specialty) => specialty.toLowerCase().includes(lowerQuery)) ||
            doctor.department.toLowerCase().includes(lowerQuery),
        ),
      );
    }, 300),
    [doctors],
  );

  useEffect(() => {
    handleSearch(searchQuery);
    return () => handleSearch.cancel();
  }, [searchQuery, handleSearch]);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredDoctors(
        doctors.filter(
          (doctor) =>
            doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
            doctor.department.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else {
      setFilteredDoctors(
        doctors.filter(
          (doctor) =>
            doctor.department === activeTab &&
            (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              doctor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              doctor.specialties.some((specialty) => specialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
              doctor.department.toLowerCase().includes(searchQuery.toLowerCase())),
        ),
      );
    }
  }, [activeTab, searchQuery]);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'support', label: 'Support Staff' },
    { id: 'careers', label: 'Careers' },
  ];

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

      {/* Hero Section */}
      <section id="hero" className="relative py-32 bg-gradient-to-br from-blue-900 to-indigo-700 text-white overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Our Medical Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md"
          >
            Meet our board-certified physicians and healthcare professionals dedicated to providing exceptional, compassionate care.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {[
              { value: '300+', label: 'Healthcare Professionals' },
              { value: '98%', label: 'Board Certified' },
              { value: '25+', label: 'Medical Specialties' },
              { value: '15+', label: 'Years Avg. Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="doctors" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Find a Doctor</h2>
            <div className="w-full max-w-md md:w-1/3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by name, specialty, or condition..."
                  className="pl-10 pr-10 py-2 text-base border-none bg-gray-50/80 backdrop-blur-sm rounded-full shadow-inner focus:ring-2 focus:ring-blue-600 transition-all w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search doctors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center gap-2 mb-12   rounded-lg p-4">
              {departments.map((dept) => (
                <motion.div
                  key={dept.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabsTrigger
                    value={dept.id}
                    className="text-sm font-medium text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:text-black rounded-full px-4 py-2 w-full lg:w-auto"
                    style={
                      dept.id !== 'all' && dept.color
                        ? {
                            backgroundImage:
                              dept.id === activeTab
                                ? `linear-gradient(to right, ${dept.color.split(' ')[0]}, ${dept.color.split(' ')[2]})`
                                : 'none',
                          }
                        : {}
                    }
                  >
                    {dept.icon && <dept.icon className="w-4 h-4 mr-2" />}
                    {dept.name}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredDoctors.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {filteredDoctors.map((doctor) => (
                    <motion.div
                      key={doctor.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      <DoctorCard doctor={doctor} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No doctors found matching your criteria.
                </div>
              )}
            </motion.div>
          </Tabs>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hospital Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team is committed to excellence in healthcare delivery and patient satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50/80 backdrop-blur-sm shadow-md border-none hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={leader.image || '/photo2.jpg'}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{leader.title}</p>
                      <p className="text-gray-600 text-sm">{leader.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section id="support" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive healthcare team includes specialized professionals across multiple disciplines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportStaff.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50/80 backdrop-blur-sm shadow-md border-none hover:shadow-xl transition-all duration-300 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <dept.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.department}</h3>
                    <p className="text-blue-600 font-medium mb-1">{dept.director}</p>
                    <p className="text-gray-500 text-sm mb-4">{dept.staff}</p>
                    <p className="text-gray-600">{dept.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section id="careers" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Our Medical Team</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                We’re looking for talented, compassionate healthcare professionals to join our team at Aplha Hospital. Discover rewarding career opportunities in a supportive environment focused on excellence.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: 'Professional Development',
                    description: 'Continuous learning opportunities, mentorship programs, and career advancement pathways.',
                  },
                  {
                    icon: Users,
                    title: 'Collaborative Environment',
                    description: 'Work alongside world-class healthcare professionals in a supportive, team-oriented culture.',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Teaching Opportunities',
                    description: 'Participate in our medical education programs and help train the next generation of healthcare providers.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-6 h-6 text-blue-300 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/30 backdrop-blur-sm text-white border-white/40 hover:bg-white/40 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                  View Career Opportunities
                </Button>
              </motion.div>
            </motion.div>
            <div
              className="relative h-96 lg:h-auto"
              
            >
                <img src="/photo1.jpg"   loading="lazy" className="object-cover rounded-xl shadow-lg"
 alt="" />
              <Image
                src="/photo1.jpg"
                alt="Medical team collaboration"
                fill
                className="object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Schedule Your Appointment?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our physicians are accepting new patients and look forward to providing you with exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
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
                  className="border-blue-600 text-blue-600 hover:bg-blue-50/50 px-8 py-3 rounded-full font-semibold w-full sm:w-auto"
                  aria-label="Call Us"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="bg-gray-50/80 backdrop-blur-sm shadow-md border-none hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-64">
          <Image
            src={doctor.image || 'https://placeholder.com/400x400'}
            alt={doctor.name}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-blue-800">
            {doctor.department.charAt(0).toUpperCase() + doctor.department.slice(1)}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
          <p className="text-blue-600 font-medium mb-4">{doctor.title}</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm">
              <GraduationCap className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-gray-600">{doctor.education[0]}</span>
            </div>
            <div className="flex items-center text-sm">
              <FileText className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-gray-600">{doctor.certifications[0]}</span>
            </div>
            <div className="flex items-center text-sm">
              <Stethoscope className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-gray-600">{doctor.specialties.slice(0, 2).join(', ')}</span>
            </div>
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-gray-600">{doctor.awards[0]}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 flex-1 rounded-full"
              disabled={!doctor.acceptingNewPatients}
            >
              <Calendar className="w-4 h-4 mr-2" />
              {doctor.acceptingNewPatients ? 'Book Appointment' : 'Not Accepting Patients'}
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50/50 flex-1 rounded-full"
            >
              <FileText className="w-4 h-4 mr-2" />
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}