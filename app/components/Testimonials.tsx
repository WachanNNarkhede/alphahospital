"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      age: 45,
      condition: "Cardiac Surgery",
      image: "/doctor12.jpg?height=100&width=50",
      rating: 5,
      text: "The cardiac team at Aplha Hospital saved my life. Their expertise, compassion, and state-of-the-art facilities made all the difference. I'm forever grateful for the exceptional care I received.",
      date: "March 2024",
    },
    {
      name: "Robert Chen",
      age: 38,
      condition: "Orthopedic Surgery",
      image: "/doctor12.jpg?height=100&width=100",
      rating: 5,
      text: "After my sports injury, I thought my active days were over. The orthopedic team not only fixed my knee but got me back to running marathons. Outstanding medical care!",
      date: "February 2024",
    },
    {
      name: "Maria Rodriguez",
      age: 52,
      condition: "Cancer Treatment",
      image: "/doctor12.jpg?height=100&width=100",
      rating: 5,
      text: "Fighting cancer was the hardest battle of my life, but Aplha Hospital's oncology team stood by me every step of the way. Their holistic approach to care made all the difference.",
      date: "January 2024",
    },
    {
      name: "David Thompson",
      age: 29,
      condition: "Emergency Care",
      image: "/doctor12.jpg?height=100&width=100",
      rating: 5,
      text: "When I had my accident, the emergency team's quick response and professional care were incredible. They treated me like family during the most frightening time of my life.",
      date: "March 2024",
    },
    {
      name: "Jennifer Park",
      age: 34,
      condition: "Maternity Care",
      image: "/doctor12.jpg?height=100&width=100",
      rating: 5,
      text: "From prenatal care to delivery, the maternity team made my pregnancy journey beautiful and safe. The nurses and doctors were amazing throughout the entire process.",
      date: "February 2024",
    },
  ]

  const stats = [
    { value: "98%", label: "Patient Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10,000+", label: "Happy Patients" },
    { value: "500+", label: "5-Star Reviews" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who have experienced exceptional care at Aplha Hospital.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-8">
                <MessageCircle className="w-16 h-16 text-blue-600" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium mb-8">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="text-center">
                  <div className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                  </div>
                  <div className="text-sm text-gray-500">{testimonials[currentTestimonial].date}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-14 h-14 p-0 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-14 h-14 p-0 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.condition}</div>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{testimonial.text}</p>

                <div className="text-xs text-gray-500 mt-3">{testimonial.date}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
