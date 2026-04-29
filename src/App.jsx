import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import About from './components/About'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { AppProvider } from './contexts/AppContext'
import './App.css'

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <About />
        <Footer />
        <ScrollToTop />
      </div>
    </AppProvider>
  )
}

export default App
