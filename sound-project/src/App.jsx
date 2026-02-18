import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import Workshop from "./components/WorkShop"
import FloatingCards from "./components/FloatingCards"
import Class from "./components/Class"

export default function App() {
  return (
    <div>
      <Nav />
    <div className="font-sans text-gray-800">
      
      <section id="home"> <Hero /></section>
     
      <section id="about"><FloatingCards /></section>
      <section id="projects">
      <Projects />
      </section>
      <section id="class"><Class /></section>
      <section id="workshop"><Workshop /></section>
      <section id="contact"><Contact /></section>
      
    </div>
    </div>
  )
}
