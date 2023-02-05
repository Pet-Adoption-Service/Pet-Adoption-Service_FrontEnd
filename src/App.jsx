import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import FindAPet from './components/FindAPet'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import NotFound from './components/Error'

const App =() => {

useEffect(() => {
  async function getPets(){
    const res = await fetch("https://pet-adopt-api-production.up.railway.app/pets")
    const data = await res.json()
    dispatchEvent({
      type: 'setPets',
      pets: data,
    })
    
  }
  getPets()
}, [])

useEffect(() => {
  async function getBookings(){
    const res = await fetch("https://pet-adopt-api-production.up.railway.app/bookings")
    const data = await res.json()
    dispatchEvent({
      type: 'setBookings',
      pets: data,
    })
    
  }
  getBookings()
}, [])

const addBooking = async (petName, name, date, contactInfo) => {
  



}

  return <>
      <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/findapet" element={<FindAPet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>    

}

export default App
