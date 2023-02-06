import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/Error'
import Home from './components/Home'
import About from './components/About'
import FindAPet from './components/FindAPet'
import Contact from './components/Contact'
import FAQ from './components/FAQ'


const App =() => {
const [pets, setPets] = useState([])
const [bookings, setBookings] = useState([])

useEffect(() => {

  async function getPets(){
    const res = await fetch("https://pet-adopt-api-production.up.railway.app/pets")
    const data = await res.json()
    setPets(data)
    
  }
  getPets()
}, [])

useEffect(() => {

  async function getBookings(){
    const res = await fetch("https://pet-adopt-api-production.up.railway.app/bookings")
    const data = await res.json()
    setBookings(data)

  }
  getBookings()   
}, [])

const addBooking = async (petName, name, date, contactInfo) => { 
  const id = bookings.length

}

  return <>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/FindAPet" element={<FindAPet pets={pets} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </>    

}

export default App