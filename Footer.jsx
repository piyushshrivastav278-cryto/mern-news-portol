import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
  return (
  <>
<div className='row footer'>
  <div className='col-sm-10 mx-auto'>
    <div className='row py-3'>
      <div className='col-sm-4 pt-2 ps-1'>
       <a href='#' ><img className='img-fluid footerlogo' src="" alt="" />
        <h5><b> <img src="images/bhaskar times.png"id='three' alt="" />Bhaskar Times</b> </h5> </a>
       <a href='#' ><img className='img-fluid footerlogo' src="images/google play.png"  alt="" />
       Google play</a>

       <a href='#' ><img className='img-fluid footerlogo' src="" alt="" />
       <img src="images/app store.png"id='g2' alt="" />
       </a>
       <a href='#' ><img className='img-fluid footerlogo' src="" alt="" />
       
       </a>
        
        
      </div>
      <div className='col-sm-4 p-2 text-light'>
        <p className='footertext'>Bhaskar times cretes an dpublises online news and information content which informs educate and help the user to take better life desision
          Bhaskar times content focus on  creating and sharing helpful.
          
        </p>
        <div className='c'><a href=""><FaFacebook/></a>
               <a className='gh' href=""><FaYoutube/></a>        <a  className='pm' href=""><FaTwitter/></a> <a className='kl' href=""><FaInstagram/></a> 
        </div>
   
         
      </div>
      <div className='col-sm-4 p-2'>
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1613016488127!2d80.9638446757272!3d26.89837547665578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995785d5f7f1a5%3A0xffa47f1efe103f0d!2z4KSf4KWH4KSV4KSq4KS-4KSH4KSyIOCkn-Clh-CkleCljeCkqOCli-CksuClieCknOClgCBQdnQuIEx0ZC4!5e0!3m2!1shi!2sin!4v1754117073418!5m2!1shi!2sin"
 className='w-100'
  height={250}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  </div>
</div>
<div className='row bfooter'>
  <div className='col-sm-12 text-light text-center'>
    <span>Design and Devloped by Piyush shrivastav &copy;<a href="https://www.techpile.in">Techpile technology</a></span>
  </div>
</div>








  </>
  )
}

export default Footer
