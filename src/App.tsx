import Header from "../src/components/header/Header"
import Hero from "../src/components/hero/Hero"
import About from "../src/components/about/About"
import Skills from "../src/components/skill/Skills"
import Projects from "../src/components/project/Projects"
import Contact from "../src/components/contacts/Contacts"
import Footer from "../src/components/footer/Footer"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
