import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Users, CalendarIcon, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Events & Seminars - Alpha Hospital",
  description:
    "Upcoming health seminars, workshops, and community events at Alpha Hospital. Join us for educational sessions and health awareness programs.",
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Heart Health Awareness Seminar",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Hospital Auditorium",
      description:
        "Join our cardiology experts for an informative session on heart disease prevention, risk factors, and lifestyle modifications for better heart health. Learn about the latest advancements in cardiac care and get your questions answered by specialists.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Seminar",
      speakers: ["Dr. Sarah Johnson", "Dr. Robert Chen"],
      attendees: 150,
      isRegistrationOpen: true,
    },
    {
      title: "Diabetes Management Workshop",
      date: "June 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room A",
      description:
        "This interactive workshop will cover diabetes management strategies, nutrition planning, blood sugar monitoring, and medication management. Perfect for patients and their families.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Workshop",
      speakers: ["Dr. Maria Santos", "Nutritionist Lisa Wong"],
      attendees: 75,
      isRegistrationOpen: true,
    },
    {
      title: "Women's Health Fair",
      date: "June 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Hospital Lobby",
      description:
        "Comprehensive women's health screenings, consultations, and educational sessions covering topics from reproductive health to menopause management.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Health Fair",
      speakers: ["Dr. Jennifer Adams", "Dr. Susan Miller"],
      attendees: 200,
      isRegistrationOpen: true,
    },
    {
      title: "Pediatric Nutrition Seminar",
      date: "July 2, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Pediatric Wing Conference Room",
      description:
        "Learn about proper nutrition for children at different stages of development. Topics include breastfeeding, introducing solids, and managing picky eaters.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Seminar",
      speakers: ["Dr. David Thompson", "Pediatric Nutritionist Amy Lee"],
      attendees: 100,
      isRegistrationOpen: true,
    },
    {
      title: "Mental Health Awareness Workshop",
      date: "July 8, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Community Center",
      description:
        "Understanding mental health, recognizing signs of depression and anxiety, and learning coping strategies. Open to the community with free admission.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Workshop",
      speakers: ["Dr. Michael Brown", "Therapist Sarah Davis"],
      attendees: 120,
      isRegistrationOpen: true,
    },
    {
      title: "Senior Health & Wellness Fair",
      date: "July 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Hospital Main Hall",
      description:
        "Health screenings, wellness tips, and information sessions specifically designed for seniors. Includes bone density tests, vision screenings, and fall prevention education.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Health Fair",
      speakers: ["Dr. Robert Anderson", "Physical Therapist John Kim"],
      attendees: 180,
      isRegistrationOpen: false,
    },
  ]

  const pastEvents = [
    {
      title: "Cancer Awareness Month Event",
      date: "May 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Hospital Auditorium",
      description: "Comprehensive cancer screening and awareness event with expert oncologists.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Health Fair",
      attendees: 250,
    },
    {
      title: "Stroke Prevention Seminar",
      date: "May 8, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room B",
      description: "Educational session on stroke prevention, recognition, and emergency response.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Seminar",
      attendees: 90,
    },
    {
      title: "Healthy Cooking Workshop",
      date: "April 22, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Community Kitchen",
      description: "Hands-on cooking workshop focusing on heart-healthy and diabetic-friendly recipes.",
      image: "/hospitalnews.jpg?height=300&width=500",
      category: "Workshop",
      attendees: 60,
    },
  ]

  const categories = ["All", "Seminar", "Workshop", "Health Fair", "Conference"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Health Events & Seminars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Join us for educational health seminars, workshops, and community events designed to promote wellness and
              provide valuable health information to our community.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-200">Annual Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-blue-200">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Free</div>
                <div className="text-blue-200">Community Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search events..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Date Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                  <SelectItem value="all">All Dates</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming">
              <div className="grid lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/hospitalnews.jpg"}
                          alt={event.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                        {!event.isRegistrationOpen && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                              Registration Closed
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>

                        <div className="space-y-2 mb-4 text-sm text-gray-600">
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
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-3 text-blue-600" />
                            {event.attendees} spots available
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Speakers:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.speakers.map((speaker, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {speaker}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button
                          className={`w-full ${
                            event.isRegistrationOpen
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-gray-400 cursor-not-allowed"
                          } text-white`}
                          disabled={!event.isRegistrationOpen}
                        >
                          {event.isRegistrationOpen ? "Register Now" : "Registration Closed"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-4 mt-12">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past">
              <div className="grid lg:grid-cols-2 gap-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/hospitalnews.jpg"}
                          alt={event.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Completed
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                        <div className="space-y-2 mb-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-3 text-gray-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-3 text-gray-400" />
                            {event.attendees} attendees
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                        <Button variant="outline" className="w-full">
                          View Event Summary
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated on Health Events</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive notifications about upcoming health seminars, workshops, and
            community events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="bg-white text-gray-900" />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
