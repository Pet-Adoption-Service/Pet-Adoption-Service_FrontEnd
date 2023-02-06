import React from 'react'
import '/index.css'


const PetCard = ({ pets }) => {
  return (
 <div className="col-4">
    <img src="images/profile1-1.jpg" className='pro1' />
        <h5> {pets[0].name}</h5>
        <p>Description:</p>
        <p>Breed:</p>
        <p>Age:</p>
        <p>Size:</p>
        </div>
  )
}

export default PetCard