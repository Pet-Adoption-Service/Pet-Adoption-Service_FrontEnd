import React from 'react'
import '/FindAPet.css'

const kitty1 = new URL("./images/kitty1.jpg", import.meta.url)
const kitty2 = new URL("./images/kitty2.jpg", import.meta.url)
const Puppy1 = new URL("./images/Puppy1.jpg", import.meta.url)
const adult1 = new URL("./images/adult1.jpg", import.meta.url)
const adult2 = new URL("./images/adult2.jpg", import.meta.url)


const FindAPet = ({pets}) => {

return <>
    <section className="pet-card">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="kitty1" src={pets[0].profile_image}/>
                        <h5> {pets[0].name}</h5>
                        <p>Description: {pets[0].about}</p>
                        <p>Breed: {pets[0].breed} </p>
                        <p>Age: {pets[0].age}</p>
                        <p>Type: {pets[0].type}</p>
                        </div>
                <div className="col-4">
                    <img className="kitty2" src={pets[1].profile_image}/>
                        <h5>{pets[1].name}</h5>
                        <p>Description: {pets[1].about}</p>
                        <p>Breed: {pets[1].breed} </p>
                        <p>Age: {pets[1].age}</p>
                        <p>Type: {pets[1].type}</p>
                        </div>
                <div className="col-4">
                    <img className="Puppy1" src={pets[2].profile_image}/>
                        <h5>{pets[2].name}</h5>
                        <p>Description: {pets[2].about}</p>
                        <p>Breed: {pets[2].breed} </p>
                        <p>Age: {pets[2].age}</p>
                        <p>Type: {pets[2].type}</p>
                        </div>
                <div className="col-4">
                    <img className="adult1" src={pets[3].profile_image}/>
                        <h5>{pets[3].name}</h5>
                        <p>Description: {pets[3].about}</p>
                        <p>Breed: {pets[3].breed} </p>
                        <p>Age: {pets[3].age}</p>
                        <p>Type: {pets[3].type}</p>
                        </div>
                <div className="col-4">
                    <img className="adult2" src={pets[4].profile_image}/>
                        <h5>{pets[4].name}</h5>
                        <p>Description: {pets[4].about}</p>
                        <p>Breed: {pets[4].breed} </p>
                        <p>Age: {pets[4].age}</p>
                        <p>Type: {pets[4].type}</p>
                        </div>            
                <div className="button">
                    <button type="Book a Visit!" style={{marginBottom: '10px'}}>
                        Book A Visit!
                    </button>
                    </div>
                    </div>
                    </div>
                    <div className="footer">
                        <h5>&copy;The Pet Adoption Service, 2023</h5>
                        </div>
                </section>
            </>
}

export default FindAPet

