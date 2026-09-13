import React from 'react'

function LatestNews() {
  return (
    <>
  <h1><b>Latest news</b></h1>
    <input type="text"id='eight' placeholder='search'/> <img src="images/search icon.png"id='nine' alt="" />

 <div className="ward" >
  <ul className="list-group list-group-flush">
    <h6>Newscategory</h6>
    
    <li className="list-group-item"> <img src="images/cricket.jpg" id='third'        alt=""      /><b>cricket</b>
    </li>
    
    <li className="list-group-item"><img src="images/politics.jpg" id='fourth' alt="" /><b>politics</b></li>
    <li className="list-group-item"> <img src="images/modiiijiii.jpg"id='sixth' alt="" /><b>pm modi</b>
    </li>
    
  </ul>
  
</div>
<div className="none" >
  <ul className="list-group list-group-flush">
    <h5>City</h5>
    <li className="list-group-item"><b><img src="images/lucknow.jpg"id='tens' alt="" />                      Lucknow</b></li>
    <li className="list-group-item"><b><img src="images/gorakhpur.jpg"id='mens' alt="" />                    Gorakhpur</b></li>
    <li className="list-group-item"><b><img src="images/mumbai.jpg" alt=""id='hens' />                       Mumbai</b></li>
  </ul>
</div>


    
    
    </>
  )
}

export default LatestNews
