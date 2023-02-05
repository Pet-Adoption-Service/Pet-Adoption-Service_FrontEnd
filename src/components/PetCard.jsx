import React from 'react'
import '/index.css'
import { Link } from 'react-router-dom'

const PetCard = ({ pets }) => {
  return (
    <div class="card">
    {/* {pets.map((pet, index) => (
      <p key={index}>
       <Link to ={`pet/${index}`}>{pet.name}</Link>
       </p>
      ))} */}
      <img src="http://placekitten.com/100" class="img-thumbnail" alt="Pet Image" />
      <div class="card-body text-center py-4">
          <h5>(Pet Name)</h5>
          <p>(Pet Info)</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item ">Breed</li>
          <li class="list-group-item">Age</li>
          <li class="list-group-item">Size</li>
      </ul>
      <div class="card-body">
          <a href="#" class="btn btn-info">Book A Visit!</a>
      </div>
  </div>  )
}

export default PetCard