import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Filmography from './components/Filmography'
import Gallery from './components/Gallery'
import Press from './components/Press'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Filmography />
        <Gallery />
        <Press />
      </main>
      <Footer />
    </div>
  )
}
