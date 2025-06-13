import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Providers } from "@/app/providers"
import { GSAPProvider } from "./components/GSAPAnimations"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Alpha Hospital - Excellence in Healthcare",
  description:
    "Leading multi-specialty hospital providing world-class healthcare services with state-of-the-art facilities and expert medical professionals.",
  keywords: "hospital, healthcare, medical services, doctors, emergency care, surgery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Providers>
          <GSAPProvider>
            <Header />
            {children}
            <Footer />
          </GSAPProvider>
        </Providers>
      </body>
    </html>
  )
}
