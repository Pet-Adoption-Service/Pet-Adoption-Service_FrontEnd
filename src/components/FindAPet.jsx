import React from 'react'
import '/index.css'

function FindAPet(){
  return <>
    <section className="pet-card">
    <div class="row my-3 align-items-center justify-content-center p-auto m-auto">
        <div class="col-8 col-lg-4 col-xl-3">
            <div class="card">
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
            </div>
        </div>
    </div>
    </section>
    </>
}

export default FindAPet;