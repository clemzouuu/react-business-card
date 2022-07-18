import './App.css'
import About from './components/About.jsx'
import Infos from "./components/Infos.jsx"
import Footer from './components/Footer.jsx'
import Interests from './components/Interests'

function App() {
  return (
    <div className="card">
      <About />
      <Infos />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
