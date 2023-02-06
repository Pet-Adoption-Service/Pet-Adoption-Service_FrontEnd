import React from 'react'
import '/FAQ.css'

const kittens = new URL("./images/kittylitter.jpg", import.meta.url)
const saddog = new URL("./images/upsetdog.jpg", import.meta.url)

const FAQ = () => {
  return (
    <>
    <section className="main-container4"> 
    <h2>Frequently Asked Questions</h2>
      <h5>Q: What is the adoption process?</h5>
      <p>A: The adoption process is simple. You can find a pet you like on our website, and then you can contact us by booking a visit with us. We will then arrange the time for your selected day and time to come in and meet and get to know the pet. If you decide to adopt the pet, we will then complete the adoption process. </p>

      <h5>Q: What if I am currently suffering from allergies?</h5>
      <p>A: As we are unable to provide you professional medical advice, however we advise you to seek assistance from your local GP with your concerns. We will try our best to accommodate to your needs to the best of our ability.</p>

      <h5>Q: What if I am not able to visit the pet?</h5>
      <p>A: We understand that some people may not be able to visit the pet due current situations, please feel free to send a enquiry to us through the contact form.</p>

      <h5>Q: If I wish to donate or re-home my existing pet, would you be able to re-home it?</h5>
      <p>A: We will do our best to re-home your pet, however once you do this, you might not be able to re-adopt a pet in the future.</p>
    </section>

    <div className='pets'>
      <img className='pets'src={kittens} />

      <img className='pets2'src={saddog} />
    </div>
    
    <div className="footer">
          <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
    </>
  )
}

export default FAQ