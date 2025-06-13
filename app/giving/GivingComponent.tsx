'use client';

import React, { useCallback, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Heart,
  Users,
  Calendar,
  Gift,
  Sparkles,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Briefcase,
  Leaf,
  Building,
  HandHeart,
  Baby,
  Brain,
  Shield,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type {  Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

// Dynamically import Particles
const Particles = dynamic(() => import('react-particles'), { ssr: false });

export default function GivingComponent() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

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

  const donationImpact = [
    { id: uuidv4(), amount: '$50', impact: 'Provides comfort items for patients during extended hospital stays', icon: Heart },
    { id: uuidv4(), amount: '$100', impact: 'Supplies educational materials for patient and family health education', icon: Sparkles },
    { id: uuidv4(), amount: '$250', impact: 'Funds specialized medical equipment for pediatric patients', icon: Baby },
    { id: uuidv4(), amount: '$500', impact: 'Supports advanced training for our healthcare professionals', icon: Users },
    { id: uuidv4(), amount: '$1,000', impact: 'Contributes to cutting-edge medical research initiatives', icon: Brain },
    { id: uuidv4(), amount: '$5,000', impact: 'Helps purchase advanced diagnostic or treatment technology', icon: Shield },
  ];

  const donorStories = [
    {
      id: uuidv4(),
      name: 'The Johnson Family',
      image: '/doctor12.jpg?height=400&width=400',
      quote:
        'After our daughter received life-saving care in the pediatric ICU, we committed to supporting Aplha Hospital’s mission. Our annual giving helps ensure other families receive the same exceptional care.',
      type: 'Annual Donors',
    },
    {
      id: uuidv4(),
      name: 'Robert Wilson',
      image: '/doctor12.jpg?height=400&width=400',
      quote:
        'Including Aplha Hospital in my estate planning was one of the most meaningful decisions I’ve made. Knowing my legacy will help advance healthcare in our community brings me great comfort.',
      type: 'Legacy Donor',
    },
    {
      id: uuidv4(),
      name: 'Westside Corporation',
      image: '/doctor12.jpg?height=400&width=400',
      quote:
        'Our partnership with Aplha Hospital allows us to make a direct impact on community health. Together, we’ve funded new medical equipment and supported health education programs for underserved populations.',
      type: 'Corporate Partner',
    },
  ];

  const volunteerOpportunities = [
    {
      id: uuidv4(),
      title: 'Patient Support Volunteer',
      description: 'Provide companionship and assistance to patients, helping with non-medical needs and offering emotional support.',
      hours: '4-8 hours weekly',
      requirements: '18+ years, background check, TB test',
      training: '8-hour orientation + department training',
    },
    {
      id: uuidv4(),
      title: 'Hospital Ambassador',
      description: 'Welcome and guide patients and visitors throughout the hospital, helping them navigate to appointments and services.',
      hours: '4 hours weekly',
      requirements: '18+ years, background check, customer service skills',
      training: '4-hour orientation + shadowing',
    },
    {
      id: uuidv4(),
      title: 'Gift Shop Volunteer',
      description: 'Assist in the hospital gift shop, helping customers, managing inventory, and operating the cash register.',
      hours: '4 hours weekly',
      requirements: '16+ years, background check',
      training: '4-hour orientation + register training',
    },
    {
      id: uuidv4(),
      title: 'Administrative Support',
      description: 'Help with clerical tasks, filing, data entry, and other administrative duties in various hospital departments.',
      hours: '4-12 hours weekly',
      requirements: '18+ years, background check, computer skills',
      training: '4-hour orientation + department training',
    },
    {
      id: uuidv4(),
      title: 'Music Therapy Volunteer',
      description: 'Share your musical talents to provide comfort and entertainment to patients and visitors in waiting areas and patient rooms.',
      hours: '2-4 hours weekly',
      requirements: '16+ years, background check, musical ability',
      training: '4-hour orientation + department guidelines',
    },
    {
      id: uuidv4(),
      title: 'Pet Therapy Volunteer',
      description: 'Bring certified therapy animals to visit patients, providing comfort and emotional support during their hospital stay.',
      hours: '2-4 hours weekly',
      requirements: '18+ years, background check, certified therapy animal',
      training: '6-hour specialized training',
    },
  ];

  const fundingPriorities = [
    {
      id: uuidv4(),
      title: 'Cancer Center Expansion',
      description: 'Support the expansion of our comprehensive cancer center with advanced treatment technologies and patient-centered care spaces.',
      goal: '$5 million',
      raised: '$3.2 million',
      progress: 64,
      icon: Shield,
    },
    {
      id: uuidv4(),
      title: 'Pediatric Intensive Care Unit',
      description: 'Help us enhance our pediatric intensive care capabilities with specialized equipment and family-centered care environments.',
      goal: '$2.5 million',
      raised: '$1.8 million',
      progress: 72,
      icon: Baby,
    },
    {
      id: uuidv4(),
      title: 'Medical Research Initiatives',
      description: 'Fund groundbreaking research in cardiovascular disease, neurology, and cancer treatment to advance medical knowledge and patient care.',
      goal: '$3 million',
      raised: '$1.5 million',
      progress: 50,
      icon: Brain,
    },
    {
      id: uuidv4(),
      title: 'Community Health Programs',
      description: 'Support outreach programs that provide health education, preventive care, and medical services to underserved populations.',
      goal: '$1 million',
      raised: '$750,000',
      progress: 75,
      icon: Users,
    },
  ];

  const handleNextStory = () => {
    setActiveStoryIndex((prev) => (prev + 1) % donorStories.length);
  };

  const handlePrevStory = () => {
    setActiveStoryIndex((prev) => (prev - 1 + donorStories.length) % donorStories.length);
  };

  return (
    <div className="min-h-screen font-inter bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 to-indigo-700 text-white overflow-hidden">
        <Suspense fallback={null}>
          <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />
        </Suspense>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                Support Our Mission
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Your generosity fuels exceptional healthcare, groundbreaking research, and community care at Aplha Hospital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-blue-50 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg"
                  aria-label="Donate Now"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-blue-800/50 px-10 py-4 text-lg font-semibold rounded-xl"
                  aria-label="Volunteer"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Ways to Give</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how you can support Aplha Hospital’s mission through various giving options.
            </p>
          </motion.div>

          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12 bg-blue-50/50 backdrop-blur-sm rounded-xl p-2">
              {[
                { id: 'donate', label: 'Make a Donation', icon: Heart },
                { id: 'monthly', label: 'Monthly Giving', icon: Calendar },
                { id: 'planned', label: 'Planned Giving', icon: Gift },
                { id: 'corporate', label: 'Corporate Support', icon: Building },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="text-gray-800 font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg py-3 flex items-center justify-center"
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
              <motion.div
                key="donate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TabsContent value="donate">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Make a One-Time Donation</h3>
                        <p className="text-lg text-gray-600 mb-8">
                          Every gift, no matter the size, transforms lives and advances our mission.
                        </p>
                        <form className="space-y-6">
                          <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                              Donation Amount
                            </label>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              {['$50', '$100', '$250', '$500', '$1,000', 'Other'].map((amount) => (
                                <Button
                                  key={amount}
                                  variant="outline"
                                  className="text-lg py-5 hover:bg-blue-50"
                                  aria-label={`Select ${amount} donation`}
                                >
                                  {amount}
                                </Button>
                              ))}
                            </div>
                            <Input
                              type="number"
                              id="amount"
                              placeholder="Enter Amount"
                              className="py-5 text-lg"
                              min="1"
                            />
                          </div>
                          <div>
                            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
                              Designation
                            </label>
                            <Select defaultValue="greatest-need">
                              <SelectTrigger className="py-5 text-lg">
                                <SelectValue placeholder="Select Designation" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  'Area of Greatest Need',
                                  'Cancer Center',
                                  'Pediatric Care',
                                  'Cardiac Services',
                                  'Medical Research',
                                  'Community Outreach',
                                ].map((option) => (
                                  <SelectItem key={option} value={option.toLowerCase().replace(/\s/g, '-')}>
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-xl font-semibold rounded-xl"
                              aria-label="Donate Now"
                            >
                              <Heart className="w-5 h-5 mr-2" />
                              Donate Now
                            </Button>
                          </motion.div>
                        </form>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50/50 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">Your Donation’s Impact</h4>
                        <div className="space-y-6">
                          {donationImpact.map((item) => (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: donationImpact.indexOf(item) * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <item.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900">{item.amount}</div>
                                <div className="text-gray-600">{item.impact}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>

              <motion.div
                key="monthly"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TabsContent value="monthly">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Become a Monthly Donor</h3>
                        <p className="text-lg text-gray-600 mb-8">
                          Join our Sustainer’s Circle and provide consistent support for patient care and innovation.
                        </p>
                        <div className="space-y-6 mb-8">
                          {[
                            {
                              icon: Calendar,
                              title: 'Convenient Automatic Donations',
                              description: 'Monthly gifts are processed automatically for ease.',
                            },
                            {
                              icon: Sparkles,
                              title: 'Sustained Impact',
                              description: 'Your regular support ensures ongoing program funding.',
                            },
                            {
                              icon: Award,
                              title: 'Special Recognition',
                              description: 'Receive exclusive updates and event invitations.',
                            },
                          ].map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <benefit.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900">{benefit.title}</div>
                                <div className="text-gray-600">{benefit.description}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-xl font-semibold rounded-xl"
                            aria-label="Become a Monthly Donor"
                          >
                            <Calendar className="w-5 h-5 mr-2" />
                            Become a Monthly Donor
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50/50 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0 relative h-96 rounded-xl overflow-hidden">
                        <Image
                          src="/doctor12.jpg?height=600&width=800"
                          alt="Monthly giving impact"
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                          <div className="text-white text-xl font-bold mb-2">The Sustainer’s Circle</div>
                          <p className="text-white/90">
                            Monthly donors of $25 or more receive special benefits and recognition.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>

              <motion.div
                key="planned"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TabsContent value="planned">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Leave a Lasting Legacy</h3>
                        <p className="text-lg text-gray-600 mb-8">
                          Ensure future healthcare excellence through planned giving.
                        </p>
                        <div className="space-y-6 mb-8">
                          {[
                            {
                              title: 'Bequests',
                              description: 'Include Aplha Hospital in your will or trust.',
                            },
                            {
                              title: 'Charitable Gift Annuities',
                              description: 'Receive income while supporting healthcare.',
                            },
                            {
                              title: 'Endowed Funds',
                              description: 'Create a perpetual fund for a specific cause.',
                            },
                          ].map((option, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 p-6 rounded-lg"
                            >
                              <h4 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h4>
                              <p className="text-gray-600 mb-4">{option.description}</p>
                              <Link
                                href="#"
                                className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                                aria-label={`Learn more about ${option.title}`}
                              >
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-xl font-semibold rounded-xl"
                            aria-label="Contact Planned Giving Team"
                          >
                            <Gift className="w-5 h-5 mr-2" />
                            Contact Our Planned Giving Team
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50/50 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">Legacy Society</h4>
                        <p className="text-lg text-gray-600 mb-8">
                          Join our Legacy Society with your planned gift and enjoy exclusive benefits.
                        </p>
                        <div className="space-y-4">
                          {[
                            'Recognition in our annual donor report and Legacy Society wall',
                            'Invitations to exclusive hospital events',
                            'Updates on hospital initiatives',
                            'Meetings with hospital leadership',
                            'Satisfaction of a lasting legacy',
                          ].map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mt-8 p-6 border border-blue-200 rounded-lg bg-white"
                        >
                          <div className="text-xl font-bold text-gray-900 mb-2">Contact Our Team</div>
                          <p className="text-gray-600 mb-4">Explore options with our planned giving specialists.</p>
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-blue-600 font-medium">(555) 123-4567</span>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>

              <motion.div
                key="corporate"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <TabsContent value="corporate">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Corporate Partnerships</h3>
                        <p className="text-lg text-gray-600 mb-8">
                          Align your CSR goals with our mission to improve community health.
                        </p>
                        <div className="space-y-6 mb-8">
                          {[
                            {
                              icon: Building,
                              title: 'Corporate Giving Programs',
                              description: 'Fund hospital initiatives or equipment.',
                            },
                            {
                              icon: HandHeart,
                              title: 'Matching Gift Programs',
                              description: 'Double your employees’ donations.',
                            },
                            {
                              icon: Briefcase,
                              title: 'Sponsorship Opportunities',
                              description: 'Sponsor events or facilities.',
                            },
                            {
                              icon: Users,
                              title: 'Employee Volunteer Programs',
                              description: 'Engage employees in volunteering.',
                            },
                          ].map((option) => (
                            <motion.div
                              key={option.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                              className="flex items-start"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <option.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-bold text-gray-900">{option.title}</div>
                                <div className="text-gray-600">{option.description}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-xl font-semibold rounded-xl"
                            aria-label="Explore Corporate Partnerships"
                          >
                            <Building className="w-5 h-5 mr-2" />
                            Explore Corporate Partnerships
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                    <Card className="bg-blue-50/50 backdrop-blur-sm border-0 p-8">
                      <CardContent className="p-0">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6">Corporate Partner Benefits</h4>
                        <div className="space-y-4 mb-8">
                          {[
                            'Recognition on donor wall, website, and annual report',
                            'Invitations to exclusive events',
                            'Employee engagement opportunities',
                            'Customized impact reports',
                            'Co-branded health initiatives',
                          ].map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                              <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="p-6 border border-blue-200 rounded-lg bg-white"
                        >
                          <div className="text-xl font-bold text-gray-900 mb-2">Contact Our Team</div>
                          <p className="text-gray-600 mb-4">Design a partnership that aligns with your values.</p>
                          <div className="flex items-center">
                            <Phone className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-blue-600 font-medium">(555) 123-4568</span>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Funding Priorities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Current Funding Priorities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Support initiatives that enhance patient care and drive medical innovation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {fundingPriorities.map((priority) => (
              <motion.div
                key={priority.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: fundingPriorities.indexOf(priority) * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <priority.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{priority.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{priority.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">Progress</span>
                        <span className="font-medium text-blue-600">
                          {priority.raised} of {priority.goal} ({priority.progress}%)
                        </span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${priority.progress}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="bg-blue-600 h-2.5 rounded-full"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        aria-label={`Support ${priority.title}`}
                      >
                        Support This Initiative
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Donor Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the impact of our generous supporters.
            </p>
          </motion.div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={donorStories[activeStoryIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 col-span-2 overflow-hidden">
                  <CardContent className="p-0 flex flex-col md:flex-row">
                    <div className="relative h-64 md:h-auto md:w-1/2">
                      <Image
                        src={donorStories[activeStoryIndex].image}
                        alt={donorStories[activeStoryIndex].name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{donorStories[activeStoryIndex].name}</h3>
                      <p className="text-blue-600 font-medium mb-4">{donorStories[activeStoryIndex].type}</p>
                      <p className="text-gray-600 italic mb-4">&quot;{donorStories[activeStoryIndex].quote}&quot;</p>
                      <Link
                        href="#"
                        className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                        aria-label={`Read ${donorStories[activeStoryIndex].name}'s full story`}
                      >
                        Read full story <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      className="rounded-full p-2"
                      onClick={handlePrevStory}
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="outline"
                      className="rounded-full p-2"
                      onClick={handleNextStory}
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Volunteer Opportunities</h2>
              <p className="text-xl text-gray-600 mb-8">
                Make a difference by sharing your time and talents with our patients and staff.
              </p>
              <div className="space-y-6 mb-8">
                {[
                  { icon: Clock, title: 'Flexible Scheduling', description: 'Choose shifts that fit your life.' },
                  { icon: Heart, title: 'Meaningful Impact', description: 'Directly enhance patient experiences.' },
                  { icon: Users, title: 'Community Connection', description: 'Join a passionate volunteer team.' },
                  { icon: Leaf, title: 'Personal Growth', description: 'Gain skills in a healthcare setting.' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{benefit.title}</div>
                      <div className="text-gray-600">{benefit.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl"
                  aria-label="Apply to Volunteer"
                >
                  Apply to Volunteer
                </Button>
              </motion.div>
            </motion.div>
            <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Volunteer Opportunities</h3>
                <div className="space-y-6">
                  {volunteerOpportunities.slice(0, 3).map((opportunity) => (
                    <motion.div
                      key={opportunity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: volunteerOpportunities.indexOf(opportunity) * 0.1 }}
                      className="border-b border-gray-100 pb-6"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h4>
                      <p className="text-gray-600 mb-4">{opportunity.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Time:</span>
                          <span className="ml-2 text-gray-600">{opportunity.hours}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Requirements:</span>
                          <span className="ml-2 text-gray-600">{opportunity.requirements}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium text-gray-700">Training:</span>
                          <span className="ml-2 text-gray-600">{opportunity.training}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-center"
                >
                  <Link
                    href="#"
                    className="text-blue-600 font-medium flex items-center justify-center hover:text-blue-800 transition-colors"
                    aria-label="View all volunteer opportunities"
                  >
                    View all opportunities <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Our Giving Team</h2>
              <p className="text-xl text-gray-600 mb-8">
                We’re here to help you find the best way to support our mission.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', description: '(555) 123-4567' },
                  { icon: Mail, title: 'Email', description: 'giving@Aplhahospital.org' },
                  {
                    icon: Building,
                    title: 'Office',
                    description: (
                      <>
                        Aplha Hospital Foundation
                        <br />
                        123 Medical Center Dr, Suite 200
                        <br />
                        Healthcare City, ST 12345
                      </>
                    ),
                  },
                  { icon: Clock, title: 'Hours', description: 'Monday - Friday: 8:30 AM - 5:00 PM' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <contact.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{contact.title}</div>
                      <div className="text-gray-600">{contact.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <Card className="bg-white/80 backdrop-blur-sm border-0 p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input type="text" id="firstName" className="w-full py-3" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input type="text" id="lastName" className="w-full py-3" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" id="email" className="w-full py-3" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input type="tel" id="phone" className="w-full py-3" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I’m interested in
                    </label>
                    <Select defaultValue="donation">
                      <SelectTrigger className="py-3">
                        <SelectValue placeholder="Select Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          'Making a donation',
                          'Monthly giving',
                          'Planned giving',
                          'Corporate partnership',
                          'Volunteering',
                          'Other',
                        ].map((option) => (
                          <SelectItem key={option} value={option.toLowerCase().replace(/\s/g, '-')}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" rows={4} className="w-full py-3" required />
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-xl"
                      aria-label="Send Message"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold mb-6">Make a Difference Today</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your support transforms lives through exceptional healthcare and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-blue-50 px-10 py-4 text-lg font-semibold rounded-xl"
                  aria-label="Donate Now"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-blue-800/50 px-10 py-4 text-lg font-semibold rounded-xl"
                  aria-label="Volunteer Today"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer Today
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}