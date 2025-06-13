"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NewsEvents() {
  const news = [
    {
      title: "Alpha Hospital Launches New Cardiac Center",
      excerpt: "State-of-the-art cardiac facility opens with advanced surgical suites and cutting-edge technology.",
      image: "/hospitalnews.jpg?height=200&width=300",
      date: "March 15, 2024",
      category: "Hospital News",
      readTime: "3 min read",
    },
    {
      title: "Free Health Screening Camp This Weekend",
      excerpt: "Join us for comprehensive health screenings including diabetes, hypertension, and cholesterol checks.",
      image: "/hospitalnews.jpg?height=200&width=300",
      date: "March 20, 2024",
      category: "Community Health",
      readTime: "2 min read",
    },
    {
      title: "New Minimally Invasive Surgery Techniques",
      excerpt: "Our surgical team now offers advanced laparoscopic procedures with faster recovery times.",
      image: "/hospitalnews.jpg?height=200&width=300",
      date: "March 10, 2024",
      category: "Medical Innovation",
      readTime: "4 min read",
    },
  ]

  const events = [
    {
      title: "Heart Health Awareness Seminar",
      date: "March 25, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Hospital Auditorium",
      description: "Learn about heart disease prevention and healthy lifestyle choices from our cardiology experts.",
      attendees: 150,
      type: "Seminar",
      isUpcoming: true,
    },
    {
      title: "Diabetes Management Workshop",
      date: "April 2, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room A",
      description: "Interactive workshop on diabetes management, nutrition, and blood sugar monitoring.",
      attendees: 75,
      type: "Workshop",
      isUpcoming: true,
    },
    {
      title: "Women's Health Fair",
      date: "April 8, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Hospital Lobby",
      description: "Comprehensive women's health screenings, consultations, and educational sessions.",
      attendees: 200,
      type: "Health Fair",
      isUpcoming: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">News & Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news from Alpha Hospital and join our upcoming health events and educational
            programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Latest News */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Latest News</h3>
              <Link href="/news">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                  View All News
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {news.map((article, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          width={300}
                          height={200}
                          className="w-full h-48 sm:h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="sm:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <span className="text-gray-500 text-sm">{article.readTime}</span>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>

                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>

                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Upcoming Events</h3>
              <Link href="/events">
                <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                  View All Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-600"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                        {event.isUpcoming && (
                          <span className="ml-2 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                            Upcoming
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {event.attendees} spots
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h4>

                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-3 text-blue-600" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                        {event.location}
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Register Now</Button>
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
