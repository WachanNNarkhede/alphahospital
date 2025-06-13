"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Bone, Eye, Baby, Stethoscope, Activity, Shield, ArrowRight, Users, Award } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures and treatments.",
      features: ["Heart Surgery", "Cardiac Catheterization", "Pacemaker Implantation"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain and nervous system disorders.",
      features: ["Brain Surgery", "Stroke Treatment", "Epilepsy Care"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Advanced bone and joint treatments with minimally invasive procedures.",
      features: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services with state-of-the-art vision correction.",
      features: ["Cataract Surgery", "LASIK", "Retinal Treatment"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents.",
      features: ["Newborn Care", "Pediatric Surgery", "Child Development"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Comprehensive adult healthcare and preventive medicine services.",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Care"],
      color: "from-teal-500 to-blue-500",
    },
  ]

  const highlights = [
    {
      icon: Activity,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with rapid response times.",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art medical equipment and innovative treatment methods.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Board-certified specialists with years of experience and expertise.",
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Accredited facility with highest standards of patient care and safety.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services delivered by expert medical professionals using advanced technology and
            compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div
                  className={`space-y-2 mb-6 transition-all duration-300 ${
                    hoveredService === index ? "opacity-100 max-h-32" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 p-0 h-auto font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow">
                <highlight.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
