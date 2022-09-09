import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'
import Services from './Pages/Services'
import Contact from './Pages/Contect'
import WorkMain from './Pages/WorkMain'
import Pricing from './Pages/Pricing'
import Portfolio from './Pages/Protfolio'
import Footer from './Pages/footer'


export default function App() {
  return (
    <div>
      <Home/>
      <Navbar/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Pricing/>
      <WorkMain/>
      <Footer/>
    </div>
  )
}

