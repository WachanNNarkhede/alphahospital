"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Award, Heart, Building2, Truck, AlertTriangle, Stethoscope, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPreview() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Treated", color: "from-blue-500 to-blue-600" },
    { icon: Stethoscope, value: "200+", label: "Expert Doctors", color: "from-green-500 to-green-600" },
    { icon: Building2, value: "25+", label: "Years of Excellence", color: "from-purple-500 to-purple-600" },
    { icon: Award, value: "100+", label: "Awards Won", color: "from-orange-500 to-orange-600" },
  ]

  const features = [
    {
      icon: Heart,
      title: "Advanced Medical Care",
      description: "State-of-the-art medical equipment and cutting-edge treatment protocols.",
    },
    {
      icon: Truck,
      title: "Emergency Services",
      description: "24/7 emergency care with rapid response ambulance services.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Care",
      description: "Specialized intensive care units with expert medical supervision.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock Care",
      description: "Continuous patient monitoring and care throughout the day.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">About Alpha Hospital</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Excellence in Healthcare Since 1999
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Alpha Hospital has been at the forefront of medical excellence, providing world-class healthcare
                services with compassion, innovation, and unwavering commitment to patient care.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art facility combines advanced medical technology with a team of highly skilled
                healthcare professionals to deliver comprehensive medical services across multiple specialties.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating not just the condition, but the whole person, ensuring that every patient
                receives personalized care tailored to their unique needs and circumstances.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/photo1.jpg"
                alt="Alpha Hospital Building"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
