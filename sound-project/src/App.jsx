import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Nav from "./components/nav.jsx"
import WorkShop from "./components/WorkShop.jsx";
import FloatingCards from "./components/FloatingCards"
import Class from "./components/Class"

export default function App() {
  return (
    <div className="">
      <Nav />
    <div className=" text-gray-800">
      
      <section id="home"> <Hero /></section>
     
      <section id="about"><FloatingCards /></section>
      <section id="projects">
      <Projects />
      </section>
      <section id="class"><Class /></section>
      <section id="workshop"><WorkShop /></section>
      <section id="contact">
        <Contact />
      </section>    
    </div>
    </div>
  )
}
