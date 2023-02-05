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
                    <img className="kitty1" src={kitty1}/>
                        <h5>Pet Name:</h5>
                        <p>Description:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Size:</p>
                        </div>
                <div className="col-4">
                    <img className="kitty2" src={kitty2}/>
                        <h5>Pet Name:</h5>
                        <p>Description:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Size:</p>
                        </div>
                <div className="col-4">
                    <img className="Puppy1" src={Puppy1}/>
                        <h5>Pet Name: </h5>
                        <p>Description:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Size:</p>
                        </div>
                <div className="col-4">
                    <img className="adult1" src={adult1}/>
                        <h5>Pet Name:</h5>
                        <p>Description:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Size:</p>
                        </div>
                <div className="col-4">
                    <img className="adult2" src={adult2}/>
                        <h5>Pet Name:</h5>
                        <p>Description:</p>
                        <p>Breed:</p>
                        <p>Age:</p>
                        <p>Size:</p>
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
};

export default FindAPet;

