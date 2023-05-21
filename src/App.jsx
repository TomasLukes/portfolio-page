import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div id="app" className=" text-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}