import React from 'react'

const CatDogGrass = new URL("./images/CatDogGrass.jpg", import.meta.url)

function Home(){
  return <>
  <h1>Welcome Home!</h1>
    <section className="main-container">
      <div className="cat-dog-grass">
      <img src={CatDogGrass} />
        </div>
      </section>
      </>
}

export default Home;