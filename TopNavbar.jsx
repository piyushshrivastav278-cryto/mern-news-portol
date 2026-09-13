import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";









function TopNavbar(){
    return( <>

   
        <div className="TopNav">
            <div className="a"><MdOutgoingMail />piyushshrivastav278@gmail.com</div>
            <div className="b"><a href=""><FaFacebook/></a>
            

            
            <a className='hlo' href=""><FaYoutube /></a>
            
            <a className='im'  href=""><FaTwitter /></a>
            
            <a className='gm'  href="https://www.instagram.com/piyush_ff_125477?utm_source=ig_web_button_share_sheet&igsh=MW13MzY1cDJyY3lkcg=="><FaInstagramSquare /></a>

            
            
            
            
            
            </div>
            </div>
   </> );

}
export default TopNavbar;