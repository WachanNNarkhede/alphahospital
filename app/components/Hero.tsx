"use client"

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleAppointmentModal } from "../store/slices/uiSlice"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users, Award } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const dispatch = useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Excellence in Healthcare",
      subtitle: "Your Health, Our Priority",
      description: "Providing world-class medical care with state-of-the-art facilities and compassionate service.",
      image: "/photo1.jpg",
      cta: "Book Appointment",
    },
    {
      title: "Advanced Medical Technology",
      subtitle: "Innovation Meets Care",
      description: "Equipped with the latest medical technology and staffed by expert healthcare professionals.",
      image: "/photo2.jpg",
      cta: "Learn More",
    },
    {
      title: "24/7 Emergency Care",
      subtitle: "Always Here for You",
      description: "Round-the-clock emergency services with rapid response and expert medical attention.",
      image: "/herophoto3.jpg",
      cta: "Emergency Info",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { icon: Heart, value: "50,000+", label: "Patients Treated" },
    { icon: Users, value: "200+", label: "Expert Doctors" },
    { icon: Shield, value: "25+", label: "Years of Excellence" },
    { icon: Award, value: "100+", label: "Awards Won" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-blue-200 animate-fade-in-up">{slides[currentSlide].subtitle}</h2>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed animate-fade-in-up animation-delay-400">
                {slides[currentSlide].description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button
                onClick={() => dispatch(toggleAppointmentModal())}
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-105 group"
              >
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-200" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
