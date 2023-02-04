import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import FindAPet from './components/FindAPet'
import NotFound from './components/Error'

function App(){

  return <>
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findapet" element={<FindAPet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>    

}

export default App
