"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserCheck, GraduationCap, Award, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPreview() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief Cardiologist",
      experience: "15+ Years",
      education: "MD, Harvard Medical School",
      image: "/doctor12.jpg?height=300&width=300",
      rating: 4.9,
      patients: "5000+",
      specialties: ["Heart Surgery", "Interventional Cardiology", "Preventive Cardiology"],
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Head of Neurology",
      experience: "12+ Years",
      education: "MD, Johns Hopkins",
      image: "/doctor12.jpg?height=300&width=300",
      rating: 4.8,
      patients: "3500+",
      specialties: [" Brain Surgery ", "Stroke Treatment ", " Epilepsy Careolgy     "],
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedic Surgeon",
      experience: "10+ Years",
      education: "MD, Mayo Clinic",
      image: "/doctor12.jpg?height=300&width=300",
      rating: 4.9,
      patients: "4200+",
      specialties: ["Joint Replacement", "Sports Medicine", "Spine Surgery"],
    },
  ]

  const achievements = [
    {
      icon: UserCheck,
      title: "Board Certified",
      description: "All our doctors are board-certified specialists",
    },
    {
      icon: GraduationCap,
      title: "Top Medical Schools",
      description: "Graduates from world's leading medical institutions",
    },
    {
      icon: Award,
      title: "Award Winners",
      description: "Recipients of numerous medical excellence awards",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of highly qualified medical professionals is dedicated to providing exceptional healthcare with
            compassion and expertise.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{doctor.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <GraduationCap className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <UserCheck className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-4 h-4 mr-3 text-blue-600" />
                      <span className="text-sm">{doctor.patients} Patients Treated</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Book Appointment</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              View All Doctors
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
