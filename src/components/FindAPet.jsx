import React from 'react'
import '/FindAPet.css'

const kitty1 = new URL("./images/kitty1.jpg", import.meta.url)
const kitty2 = new URL("./images/kitty2.jpg", import.meta.url)
const Puppy1 = new URL("./images/Puppy1.jpg", import.meta.url)
const adult1 = new URL("./images/adult1.jpg", import.meta.url)
const adult2 = new URL("./images/adult2.jpg", import.meta.url)


// User workflow
// 1. user clicks booking button
// 2. modal window with available time pops up
// 3. user fills out form fields
// 4. user clicks submit
// 5. popup success dialog

// Component Workflow
// 1. user clicks booking button and front end renders a modal window
// 2. modal window contains empty form for the create booking fields
// 3. submit button sends a post request to the create booking endpoint
// 4. modal disappears
// 5. window alert displays success or failure message


const FindAPet = ({ pets, addBooking }) => {

return <>
    <section className="pet-card">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="kitty1" src={pets[0].profile_image}/>
                    <h5>Name: {pets[0].name}</h5>
                    <p>Description: {pets[0].about}</p>
                    <p>Breed: {pets[0].breed}</p>
                    <p>Age: {pets[0].age}</p>
                    <p>Type: {pets[0].type}</p>
                    <div>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            Book A Visit!
                            </button>
                            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="bookingModalLabel">Visit {pets[0].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Name</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Peferred Date of Visit</label>
                                            <input type="date" class="form-control" id="date" />
                                        </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-target="#bookingsuccess" data-bs-toggle="modal">Make Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="modal fade" id="bookingsuccess" aria-hidden="true" aria-labelledby="modalToggle" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modalToggle">Visit {pets[0].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your booking has been confirmed 
                                            <br></br>
                                            Check your email for details.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="kitty2" src={pets[1].profile_image}/>
                    <h5>{pets[1].name}</h5>
                    <p>Description: {pets[1].about}</p>
                    <p>Breed: {pets[1].breed} </p>
                    <p>Age: {pets[1].age}</p>
                    <p>Type: {pets[1].type}</p>
                    <div>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            Book A Visit!
                            </button>
                            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="bookingModalLabel">Visit {pets[1].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Name</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Peferred Date of Visit</label>
                                            <input type="date" class="form-control" id="date" />
                                        </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-target="#bookingsuccess" data-bs-toggle="modal">Make Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="modal fade" id="bookingsuccess" aria-hidden="true" aria-labelledby="modalToggle" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modalToggle">Visit {pets[1].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your booking has been confirmed 
                                            <br></br>
                                            Check your email for details.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="Puppy1" src={pets[2].profile_image}/>
                    <h5>{pets[2].name}</h5>
                    <p>Description: {pets[2].about}</p>
                    <p>Breed: {pets[2].breed} </p>
                    <p>Age: {pets[2].age}</p>
                    <p>Type: {pets[2].type}</p>
                    <div>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            Book A Visit!
                            </button>
                            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="bookingModalLabel">Visit {pets[2].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Name</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Peferred Date of Visit</label>
                                            <input type="date" class="form-control" id="date" />
                                        </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-target="#bookingsuccess" data-bs-toggle="modal">Make Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="modal fade" id="bookingsuccess" aria-hidden="true" aria-labelledby="modalToggle" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modalToggle">Visit {pets[2].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your booking has been confirmed 
                                            <br></br>
                                            Check your email for details.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="adult1" src={pets[3].profile_image}/>
                    <h5>{pets[3].name}</h5>
                    <p>Description: {pets[3].about}</p>
                    <p>Breed: {pets[3].breed} </p>
                    <p>Age: {pets[3].age}</p>
                    <p>Type: {pets[3].type}</p>
                    <div>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            Book A Visit!
                            </button>
                            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="bookingModalLabel">Visit {pets[3].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Name</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Peferred Date of Visit</label>
                                            <input type="date" class="form-control" id="date" />
                                        </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-target="#bookingsuccess" data-bs-toggle="modal">Make Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="modal fade" id="bookingsuccess" aria-hidden="true" aria-labelledby="modalToggle" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modalToggle">Visit {pets[3].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your booking has been confirmed 
                                            <br></br>
                                            Check your email for details.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <img className="adult2" src={pets[4].profile_image}/>
                    <h5>{pets[4].name}</h5>
                    <p>Description: {pets[4].about}</p>
                    <p>Breed: {pets[4].breed} </p>
                    <p>Age: {pets[4].age}</p>
                    <p>Type: {pets[4].type}</p>
                    <div>
                        <div>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                            Book A Visit!
                            </button>
                            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="bookingModalLabel">Visit {pets[4].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <form>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Name</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="userEmail" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="date" class="form-label">Peferred Date of Visit</label>
                                            <input type="date" class="form-control" id="date" />
                                        </div>
                                        </form>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-target="#bookingsuccess" data-bs-toggle="modal">Make Booking</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="modal fade" id="bookingsuccess" aria-hidden="true" aria-labelledby="modalToggle" tabindex="-1">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="modalToggle">Visit {pets[4].name}!</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Your booking has been confirmed 
                                            <br></br>
                                            Check your email for details.
                                        </div>
                                        <div class="modal-footer">
                                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
    </section>
</>
};

export default FindAPet

