import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
<>
<Navbar/>
<h1><b>About us</b><img src="images/about us.png" id='s1'  alt="" />
<p>
  </p></h1>

  <div className="card mb-3" style={{ maxWidth: 540 }}>
  <div className="row g-0">
    <div className="col-md-4">
       <h5><b> <img src="images/bhaskar times.png"id='three' alt="" />Bhaskar Times</b> </h5>
    </div>
    <div className="col-md-8">
      <div className="card-body">
       
        <p className="card-text">
          Bhaskar Times is a Hindi news portal that covers a wide range of topics, including politics, sports, entertainment, and local news. It aims to provide the latest news and views to its readers.
        </p>
        <p className="card-text">
          <small className="text-body-secondary"></small>
        </p>
      </div>
    </div>
  </div>
</div>


</>
  )
}

export default About
