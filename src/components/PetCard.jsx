import React from 'react'
import '/index.css'


const PetCard = ({ pets }) => {
  return (
 <div className="col-4">
    <img src={pets[0].profile_image} className='pro1' />
        <h5> {pets[0].name}</h5>
        <p>Description: {pets[0].about}</p>
        <p>Breed: {pets[0].breed} </p>
        <p>Age: {pets[0].age}</p>
        <p>Type: {pets[0].type}</p>
        </div>
  )
}

export default PetCard