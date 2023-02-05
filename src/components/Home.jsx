import React from 'react'
import '/Home.css'

const catdoggrass = new URL("./images/CatDogGrass.jpg", import.meta.url)

function Home(){

  return <>
    <section className="main-container"> 
      <div className="cat-dog-grass">
      <img className="grass" src={catdoggrass} />
        </div>
        <div className="footer">
          <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
      </section>
      </>
}

export default Home;