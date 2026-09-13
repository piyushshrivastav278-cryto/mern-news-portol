import React from 'react'

const ImageGallery = () => {
  return (
   <>
<h1> <b>Imagegallery</b><img src="images/galllery icon.png"  id='tm' alt="" /></h1 > 
<input type="text"placeholder='search' id='my' /> <img src="images/search icon.png"  id='p1'       alt="" />

<div className="card-group">
  <div className="card">
    <img src="images/mess media.jpg" id='u3' className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"><b>Mess media</b></h5>
      <p className="card-text">
        
      </p>
      <p className="card-text">
        <small className="text-body-secondary"></small>
      </p>
    </div>
  </div>
  <div className="card">
    <img src="images/natures.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"><b>Natures beauty</b></h5>
      <p className="card-text">
        
      </p>
      <p className="card-text">
        <small className="text-body-secondary"></small>
      </p>
    </div>
  </div>
  <div className="card">
    <img src="images/poor.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"><b>poor</b></h5>
      <p className="card-text">
        
      </p>
      <p className="card-text">
        <small className="text-body-secondary"></small>
      </p>
    </div>
  </div>
</div>


   
   </>
  )
}

export default ImageGallery
