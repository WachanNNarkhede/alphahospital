"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import dynamic from "next/dynamic"



const ParticlesBackground = dynamic(
  () => import('@/app/components/partical'),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black/20 z-0" />
  }
);

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Find a Doctor", href: "/team" },
    { name: "Patient Portal", href: "/portal" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    { name: "Emergency Care", href: "/services/emergency" },
    { name: "Cardiology", href: "/services/cardiology" },
    { name: "Neurology", href: "/services/neurology" },
    { name: "Orthopedics", href: "/services/orthopedics" },
    { name: "Pediatrics", href: "/services/pediatrics" },
    { name: "Surgery", href: "/services/surgery" },
  ]

  const resources = [
    { name: "Health Library", href: "/resources/library" },
    { name: "Patient Education", href: "/resources/education" },
    { name: "Insurance Info", href: "/resources/insurance" },
    { name: "Billing", href: "/resources/billing" },
    { name: "Medical Records", href: "/resources/records" },
    { name: "FAQ", href: "/faq" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Health Tips</h3>
              <p className="text-blue-100">
                Subscribe to our newsletter for the latest health news, tips, and hospital updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email address" className="flex-1 bg-white text-gray-900" />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
                <ParticlesBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Hospital Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                 <Image
                              src="/hosplogo.png"
                              alt="Logo"
                              width={48}
                              height={48}
                              className="w-12 h-12  rounded-xl flex items-center justify-center"
                              priority
                            />
                <div>
                  <h1 className="text-2xl font-bold">Aplha Hospital</h1>
                  <p className="text-gray-400">Excellence in Healthcare</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                For over 25 years, Aplha Hospital has been providing exceptional healthcare services with
                state-of-the-art facilities and compassionate care.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@Aplhahospital.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Medical Center Dr, Healthcare City</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Aplha Hospital. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for better healthcare.</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
