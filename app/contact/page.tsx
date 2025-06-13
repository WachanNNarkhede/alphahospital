import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Truck,
  Calendar,
  MessageCircle,
  
  Car,
  Bus,
  Train,
  Users,
  Navigation,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Aplha Hospital",
  description: "Connect with Aplha Hospital for inquiries, appointments, or emergencies. Find our contact details, location, and more.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Main Reception", value: "+1 (555) 123-4567" },
        { label: "Emergency", value: "+1 (555) 911-HELP" },
        { label: "Appointments", value: "+1 (555) 123-4568" },
        { label: "Billing", value: "+1 (555) 123-4569" },
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        { label: "General Inquiries", value: "info@Aplhahospital.com" },
        { label: "Appointments", value: "appointments@Aplhahospital.com" },
        { label: "Patient Services", value: "patients@Aplhahospital.com" },
        { label: "Billing", value: "billing@Aplhahospital.com" },
      ],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        { label: "Street Address", value: "123 Medical Center Drive" },
        { label: "City", value: "Healthcare City, HC 12345" },
        { label: "Country", value: "United States" },
        { label: "Postal Code", value: "12345" },
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 8:00 PM" },
        { label: "Saturday", value: "9:00 AM - 6:00 PM" },
        { label: "Sunday", value: "10:00 AM - 4:00 PM" },
        { label: "Emergency", value: "24/7 Available" },
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const departments = [
    { name: "Emergency Department", phone: "+1 (555) 911-HELP", hours: "24/7" },
    { name: "Cardiology", phone: "+1 (555) 123-4570", hours: "Mon-Fri 8AM-6PM" },
    { name: "Neurology", phone: "+1 (555) 123-4571", hours: "Mon-Fri 9AM-5PM" },
    { name: "Orthopedics", phone: "+1 (555) 123-4572", hours: "Mon-Fri 8AM-6PM" },
    { name: "Pediatrics", phone: "+1 (555) 123-4573", hours: "Mon-Sat 8AM-6PM" },
    { name: "Radiology", phone: "+1 (555) 123-4574", hours: "Mon-Fri 7AM-7PM" },
    { name: "Laboratory", phone: "+1 (555) 123-4575", hours: "Mon-Fri 6AM-8PM" },
    { name: "Pharmacy", phone: "+1 (555) 123-4576", hours: "Mon-Fri 8AM-8PM" },
  ]

  const quickActions = [
    {
      icon: Truck,
      title: "Emergency",
      description: "Immediate Care Available",
      action: "Call Emergency",
      phone: "+1 (555) 911-HELP",
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      icon: Calendar,
      title: "Appointment",
      description: "Schedule Your Visit",
      action: "Book Appointment",
      phone: "+1 (555) 123-4568",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with Our Team",
      action: "Start Chat",
      phone: "Available 8AM-8PM",
      color: "bg-green-600 hover:bg-green-700",
    },
  ]

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking with ample spaces",
      details: ["Valet parking available", "Handicap accessible spaces", "EV charging stations"],
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Convenient bus routes nearby",
      details: ["Bus routes: 15, 23, 45, 67", "Bus stop at hospital entrance", "Accessible buses"],
    },
    {
      icon: Train,
      title: "Metro/Train",
      description: "Healthcare Station, 0.5 miles away",
      details: ["Free shuttle service", "Every 15 minutes", "Wheelchair accessible"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-[url('/assets/wave-pattern.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              We&apos;re here to assist you with your healthcare needs. Contact us anytime for support or information.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center mb-4`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{action.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{action.phone}</p>
                  <Button className={`${action.color} text-white w-full`}>{action.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
     <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Sticky Tabs with Better UI */}
    <div className="sticky top-4 z-10 mb-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
      <Tabs defaultValue="contact-info" className="w-full justify-center items-center  p-4">
       <TabsList className="flex overflow-y-hidden gap-32 ml-32 pb-2 w-fit bg-gray-100 p-6 rounded-xl scrollbar-hide">
  {[
    { value: "contact-info", label: "Contact", icon: Phone },
    { value: "departments", label: "Departments", icon: Users },
    { value: "directions", label: "Directions", icon: MapPin },
    { value: "contact-form", label: "Contact", icon: Mail },
  ].map((tab) => (
    <TabsTrigger
      key={tab.value}
      value={tab.value}
      className="py-2 px-3 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5
        data-[state=active]:bg-blue-600 data-[state=active]:text-white
        hover:bg-blue-50 text-gray-700 transition-all duration-200 whitespace-nowrap flex-shrink-0"
    >
      <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      {tab.label}
    </TabsTrigger>
  ))}
</TabsList>

        {/* Contact Information - Modern Card Grid */}
        <TabsContent value="contact-info" className="pt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="font-medium text-gray-700">{detail.label}:</span>{" "}
                        <span className="text-gray-600 break-all">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Departments - Enhanced Card Layout */}
        <TabsContent value="departments" className="pt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{dept.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Phone className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <Clock className="w-4 h-4 text-green-600 mr-3" />
                      <span className="text-sm">{dept.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Directions - Improved Two-Column Layout */}
        <TabsContent value="directions" className="pt-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Getting to Aplha Hospital</h3>
              {transportOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${option.icon === Car ? "bg-blue-100" : option.icon === Bus ? "bg-green-100" : "bg-purple-100"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <option.icon className="w-5 h-5 text-gray-800" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {option.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Interactive Map Section */}
            <div className="space-y-6">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-[url('/assets/map-pattern.png')] opacity-10"></div>
                    <div className="text-center relative z-10">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Hospital Location</h4>
                      <p className="text-gray-600 text-sm mb-4">123 Medical Center Drive<br/>Healthcare City, HC 12345</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Navigation className="w-4 h-4 mr-2" />
                        View on Map
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Parking Information</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {[
                      "Free parking for patients and visitors",
                      "Valet service available ($5)",
                      "Handicap accessible spaces",
                      "Electric vehicle charging stations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Contact Form - Modern Design */}
        <TabsContent value="contact-form" className="pt-6">
          <Card className="max-w-2xl mx-auto border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900">Send Us a Message</h3>
                <p className="text-gray-600 mt-2">We&apos;ll respond to your inquiry within 24 hours</p>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <Input 
                      required 
                      className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <Input 
                      required 
                      className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <Input 
                    type="email" 
                    required 
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <Input 
                    required 
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                  <select className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                    <option value="">Select a department</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointments">Appointments</option>
                    <option value="billing">Billing</option>
                    <option value="patient-services">Patient Services</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <Textarea 
                    required 
                    rows={5} 
                    className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" 
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Subscribe to our newsletter
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-4 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</section>

      {/* Emergency Section */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-red-800 mb-4">Need Urgent Care?</h3>
              <p className="text-gray-600 mb-6">Our Emergency Department is open 24/7 to provide immediate care. Call or visit us now.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white">Call 911</Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Emergency: +1 (555) 911-HELP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}