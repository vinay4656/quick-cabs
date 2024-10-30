import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Safety from "@/components/safety"
import Works from "@/components/works"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Safety/>
      <Works/>
      <Footer />
    </div>
  )
}
