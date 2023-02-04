import React from 'react'
import '/index.css'

const catdoggrass = new URL("./images/CatDogGrass.jpg", import.meta.url)

function Home(){

  return <>
    <section className="main-container"> 
      <div className="cat-dog-grass">
      <img src={catdoggrass} />
        </div>
      </section>
      </>
}

export default Home;