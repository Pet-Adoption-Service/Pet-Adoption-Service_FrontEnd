import React from 'react'
import '/About.css'

const pets3 = new URL("./images/pets3.jpg", import.meta.url)

function About(){
  return <>
      <section className="main-container2">
      <h1>About Us</h1>
      <p>Hello Pet Adopters, Welcome to our Pet Adoption Services!</p>
      <p>We are thrilled to hear that you are considering giving a loving home to a furry friend.</p> 
      <p>Our goal is to match each pet with the right family to ensure a lifetime of happiness.</p>
      <p>Our staff is available to answer any questions you may have and assist you in finding the perfect pet for your household.</p> 
      <p>Thank you for choosing adoption and giving a deserving animal a second chance.</p> 
      <p>We look forward to helping you find your new best friend.</p>
      <p>Best regards,The Pet Adoption Service Team</p>

    <div className="catdog">
    <img className="catdog" src={pets3} />
      </div>
      <div className="footer">
          <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
     </section>
    </>
}

export default About;