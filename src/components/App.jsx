import React from 'react'
import Navbar from './Navbar'
import FindAPet from './FindAPet'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import FAQ from './FAQ'
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
        <h1>The Pet Adoption Service</h1>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Find/Pet" element={<FindAPet />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="*" element={<h4>Page not found!</h4>} />
            </Routes>
        </BrowserRouter>
        {/* <Home />}
        <About />
        <FindAPet />
        <Contact />
        <FAQ /> */}
    </>    
  )
}

export default App
