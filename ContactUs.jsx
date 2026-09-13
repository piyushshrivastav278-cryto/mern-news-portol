import React from 'react'

const ContactUs = () => {
  return (<>
  
  
  <>


  <div className="card border-success mb-3" style={{ maxWidth: "18rem",  }}>
  <div className="card-header bg-transparent border-success"></div>
  <div className="card-body text-success">
    <h5 className="card-title"><b> contact info</b></h5>
    <p className="card-text">
      <b> <img src="images/location.png"id='o1' alt="" />Location info 
      </b>
      Plot No-43, Behind H.P Petrol Pump,
Tedhi Pulia Ring Rd, Sector 5,
Vikas Nagar, Lucknow,
Uttar Pradesh 226022

    </p>
  </div>
  <div className="card-footer bg-transparent border-success"></div>
</div>



  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Form</title>
  <link rel="stylesheet" href="style.css" />
  <div className="contact-container">
    <h2>Contact Us</h2>
    <form action="/submit-form" method="POST">
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" required="" />
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" name="email" required="" />
      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" name="subject" required="" />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required=""
        defaultValue={""}
      />
      <button type="submit">Send Message</button>
    </form>
  </div>

  
</>


  
  </>
  )
}

export default ContactUs
