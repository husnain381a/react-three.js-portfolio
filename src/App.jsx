import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ScrollToTopButton from './sections/ScrollToTopButton'
import Experience from './sections/Experience'
import Education from './sections/Education'

function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </main>
  )
}

export default App
