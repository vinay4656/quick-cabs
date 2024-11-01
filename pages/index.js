import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Safety from "@/components/safety"
import Works from "@/components/works"
import Feature1 from "@/components/Feature1"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Feature1 />
      {/* <Safety/> */}
      {/* <Works/> */}
      <Footer />
    </div>
  )
}
