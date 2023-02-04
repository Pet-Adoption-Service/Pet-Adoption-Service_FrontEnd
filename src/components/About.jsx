import React from 'react'
import '/index.css'

const pets = new URL("./images/Pets.jpg", import.meta.url)

function About(){
  return <>
    <section className="main-container2">
    <p>Hello Pet Adopters, Welcome to our Pet Adoption Services! We are thrilled to hear that you are considering giving a loving home to a furry friend. Our goal is to match each pet with the right family to ensure a lifetime of happiness. Our staff is available to answer any questions you may have and assist you in finding the perfect pet for your household. 
      Thank you for choosing adoption and giving a deserving animal a second chance. We look forward to helping you find your new best friend. 
      Best regards,The Pet Adoption Service Team</p>
    <div className="catdog">
    <img src={pets} />
      </div>
     </section>
    </>
}

export default About;