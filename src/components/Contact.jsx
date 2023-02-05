import React, { useState } from 'react'
import '/Contact.css'

const pets4 = new URL("./images/pets4.jpg", import.meta.url)

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section className="main-container3">
      <h1>Contact Us</h1>
     
      <form className='form-container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        />
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ marginLeft: '10px' }}
          />
          </div>
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>
        Submit
      </button> 
      <div className="pets4">
        <img className="pets4" src={pets4} />
      </div>
    </form>
    </form>
    <div className="footer">
          <h5>&copy;The Pet Adoption Service, 2023</h5>
        </div>
    </section>
  );
};

export default Form;
