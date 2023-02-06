import React from 'react'
import '/error.css'

const cat6 = new URL ('images/cat6.jpg', import.meta.url)
function NotFound(){

  return <>
    <section>
        <div className="error">
            <p>Sorry, the page you are looking for does not exist!</p> 
            <p>Click <a href="/home">here</a> to return to the homepage.</p>

            </div>
            <img className='cat6'src={cat6} alt="cat6" />
            
            <div className="footer">
          <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
    </section>
    </>
}

export default NotFound