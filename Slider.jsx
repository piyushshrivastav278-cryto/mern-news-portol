import React from 'react'

import { IoHome } from 'react-icons/io5';


import { IoNewspaperSharp } from "react-icons/io5";


function Slid(){
    return(<>
    <h5><b> <img src="images/bhaskar times.png"id='three' alt="" />Bhaskar Times</b> </h5> 
    <div className='Slid bg-dark'>
        <div className='slid1 bg-dark marque-dark' >

          <div id="carouselExampleFade" className="carousel slide carousel-fade sl">
  <div className="carousel-inner data-bs">
    <div className="carousel-item active">
      <img src="images/news.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/slide2.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="images/slide3.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
  
</div>








    





        </div>
        <div className='slid2 bg-dark mg-3 data-bs-ride '>
            <div className='s1 '>Top  10 News <b style={{color:"#7F0000"}}>Headline  <IoNewspaperSharp /></b></div>
            <div className="card-group">
  <div className="card">
    <img src="" className="card-img-top" alt="..." />
    <div className="card-body"><h1><b>Politics</b></h1>
      <h5 className="card-title"></h5>
      <p className="card-text">
        
      </p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary"></small>
    </div>
  </div>
  <div className="card">
    <img src="" className="card-img-top" alt="..." />
    <div className="card-body"> <h2><b>cricket</b></h2>
      <h5 className="card-title"></h5>
      <p className="card-text">
        
      </p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary"></small>
    </div>
  </div>
  <div className="card">
    <img src="images/poor.jpg" className="card-img-top" alt="..." />
    <div className="card-body"><h3><b>Poors</b></h3>
      <h5 className="card-title"></h5>
      <p className="card-text">
       
      </p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary"></small>
    </div>
  </div>
</div>

            
           
        </div>
    </div>
   
   
   
   
   
   
   
   
   
   
    </>)
}
export default Slid;