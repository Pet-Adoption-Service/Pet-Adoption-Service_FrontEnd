import React from 'react'
import '/index.css'
import { Link } from 'react-router-dom'

const PetCard = ({ pets }) => {
  return (
    <div className="col-4">
    <img className="kitty1" src={kitty1}/>
        <h5>Name: {pets[0].name}</h5>
        <p>Description: {pets[0].about}</p>
        <p>Breed:{pets[0].breed}</p>
        <p>Age:{pets[0].age}</p>
        </div>
  )
}

export default PetCard