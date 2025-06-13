"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { toggleMobileMenu, setMobileMenuOpen, toggleAppointmentModal } from "../store/slices/uiSlice"
import { Menu, X, Phone, Clock, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AppointmentModal from "@/app/components/AppoinmentModal"

// Define TypeScript interfaces for navigation items
interface NavItem {
  name: string
  href?: string
  type: "link" | "dropdown"
  items?: SubNavItem[]
}

interface SubNavItem {
  name: string
  href: string
}

export default function Header() {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation: NavItem[] = [
    { name: "Home", href: "/", type: "link" },
    { name: "About Us", href: "/about", type: "link" },
    {
      name: "Care",
      type: "dropdown",
      items: [
        { name: "Services", href: "/services" },
        { name: "Our Team", href: "/team" },
      ],
    },
    { name: "Events", href: "/events", type: "link" },
    {
      name: "Connect",
      type: "dropdown",
      items: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Giving", href: "/giving" },
      ],
    },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>123 Medical Center Dr, Healthcare City</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">

              {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div> */}
            {/* <img
              src="/hosplogo.png"
              alt="Logo"
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center"
            /> */}
            <Image
              src="/hosplogo.png"
              alt="Logo"
              width={48}
              height={48}
              className="w-12 h-12  rounded-xl flex items-center justify-center"
              priority
            />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Aplha Hospital</h1>
                <p className="text-sm text-gray-600">Excellence in Healthcare</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center group">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 group-hover:text-blue-600" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
                      {item.items!.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="block w-full text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => dispatch(toggleAppointmentModal())}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="space-y-2">
                    <span className="block text-gray-900 font-semibold py-2">{item.name}</span>
                    {item.items!.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-gray-700 hover:text-blue-600 font-medium py-2 pl-4"
                        onClick={() => dispatch(setMobileMenuOpen(false))}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )
              )}
              <Button
                onClick={() => {
                  dispatch(toggleAppointmentModal())
                  dispatch(setMobileMenuOpen(false))
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>
      <AppointmentModal />
    </>
  )
}