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
  const newBooking = {
    petName: petName ,
    name: name,
    date: date,
    contactInfo: contactInfo
  }

<<<<<<< HEAD
=======
  const returnedBooking = await fetch("https://pet-adopt-api-production.up.railway.app/bookings", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking)
  })
  const data = await returnedBooking.json()
  setBookings([...bookings, data])
  nav(`/bookings/${id}`)

>>>>>>> 4e80818616183ea219fea94daa2cc109fff99aed
}

  return <>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/FindAPet" element={<FindAPet pets={pets} />} />
=======
          <Route path="/findapet" element={<FindAPet pets={pets} addBooking={addBooking} />} />
>>>>>>> 4e80818616183ea219fea94daa2cc109fff99aed
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </>    

}

export default App