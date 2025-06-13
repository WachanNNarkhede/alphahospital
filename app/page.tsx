import Hero from "./components/Hero"
import Services from "./components/Services"
import AboutPreview from "./components/AboutPreview"
import TeamPreview from "./components/TeamPreview"
import Testimonials from "./components/Testimonials"
import NewsEvents from "./components/NewsEvents"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <AboutPreview />
      <TeamPreview />
      
      <NewsEvents />
     
      <Testimonials />
    </main>
  )
}
