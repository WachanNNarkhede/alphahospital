import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Award, Users, Building, Calendar, Shield, Stethoscope } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Alpha Hospital",
  description:
    "Learn about Alpha Hospital's 25+ years of excellence in healthcare, our mission, vision, values, and commitment to providing exceptional medical care.",
}

export default function AboutPage() {
  const milestones = [
    {
      year: "1999",
      title: "Hospital Founded",
      description: "Alpha Hospital was established with a vision to provide world-class healthcare services.",
    },
    {
      year: "2005",
      title: "First Expansion",
      description: "Added specialized cardiac care unit and expanded emergency services.",
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Implemented state-of-the-art medical equipment and digital health records.",
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Opened dedicated medical research facility for clinical trials and innovation.",
    },
    {
      year: "2020",
      title: "Telemedicine Launch",
      description: "Launched comprehensive telemedicine services during the pandemic.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated AI-powered diagnostic tools and robotic surgery capabilities.",
    },
  ]

  const leadership = [
    {
      name: "Dr. Robert Anderson",
      position: "Chief Executive Officer",
      image: "/doctor12.jpg",
      bio: "25+ years of healthcare leadership experience",
    },
    {
      name: "Dr. Maria Santos",
      position: "Chief Medical Officer",
      image: "/doctor12.jpg?height=300&width=300",
      bio: "Board-certified physician with expertise in internal medicine",
    },
    {
      name: "James Wilson",
      position: "Chief Operating Officer",
      image: "/doctor12.jpg?height=300&width=300",
      bio: "Healthcare operations specialist with MBA from Harvard",
    },
    {
      name: "Dr. Lisa Chen",
      position: "Chief of Staff",
      image: "/doctor12.jpg?height=300&width=300",
      bio: "Leading physician with 20+ years of clinical experience",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, respect, and dignity, understanding that healing involves both medical expertise and human compassion.",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description:
        "We maintain the highest standards of medical care through continuous education, advanced technology, and evidence-based practices.",
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description:
        "We believe in the power of multidisciplinary collaboration to provide comprehensive, coordinated care for our patients.",
    },
    {
      icon: Building,
      title: "Innovation & Technology",
      description:
        "We embrace cutting-edge medical technologies and innovative treatment methods to improve patient outcomes and experiences.",
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description:
        "Patient safety is our top priority, and we continuously work to improve quality measures and reduce medical errors.",
    },
    {
      icon: Stethoscope,
      title: "Continuous Learning",
      description:
        "We foster a culture of lifelong learning and professional development to stay at the forefront of medical advances.",
    },
  ]

  const achievements = [
    { number: "50,000+", label: "Patients Served Annually" },
    { number: "200+", label: "Medical Professionals" },
    { number: "15+", label: "Medical Specialties" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Beds Available" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Alpha Hospital</h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                For over 25 years, we have been dedicated to providing exceptional healthcare services with a commitment
                to clinical excellence, compassionate care, and innovative medical solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-200">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50K+</div>
                  <div className="text-blue-200">Lives Touched</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/photo1.jpg?height=500&width=600"
                alt="Alpha Hospital Building"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional healthcare services that improve the quality of life for our patients and
                  community through innovative treatments, compassionate care, and a commitment to clinical excellence.
                  We strive to be a trusted partner in health and healing for every individual we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-green-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading healthcare provider in the region, recognized for our clinical excellence,
                  patient-centered care, and commitment to community health. We envision a future where advanced medical
                  technology and human compassion work together to create healing experiences that transform lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our commitment to providing exceptional
              healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding to today, explore the key milestones that have shaped Alpha Hospital into the leading
              healthcare institution it is today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced leaders who guide Alpha Hospital&apos;s mission of providing exceptional healthcare
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our community places in our healthcare
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">{achievement.number}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
