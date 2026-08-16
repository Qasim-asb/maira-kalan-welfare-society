import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Programs from './components/Programs'
import Funds from './components/Funds'
import Team from './components/Team'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Support from './components/Support'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GeneralBody from './components/GeneralBody'
import FounderMembers from './components/FounderMembers'
import FormerMembers from './components/FormerMembers'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-[#071b18]'>
      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Programs />
        <Funds />
        <Team />
        <GeneralBody />
        <FounderMembers />
        <FormerMembers />
        <Projects />
        <Gallery />
        <Support />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App