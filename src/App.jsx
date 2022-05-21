import React from "react";
import Header from './components/header/header'
import About from './components/about/about'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/services'
import Contact from './components/contact/contact'
const App = () => {
 return (
  <>
   <Header />

   <Navbar />
   <About />
   <Experience />
   <Portfolio />
   {/* <Testimonials /> */}
   <Services />
   <Contact />
   <Footer />
  </>
 )
}

export default App;