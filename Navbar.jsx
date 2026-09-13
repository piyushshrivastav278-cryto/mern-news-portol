import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoAddOutline, IoNewspaper } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { IoLogInSharp } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";
import { Link,useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate();
  const [userInfo,setUserInfo]=useState(null)
  useEffect(()=>{
   const userData=  JSON.parse(localStorage.getItem('userInfo'));
  setUserInfo(userData)
  
  },[])
 
  const logOut=()=>{
    localStorage.removeItem('userInfo');
    navigate('/login');


  }
if(userInfo?.userType=="user"){
 return (
    <>
    
    <div className='line'>
      <div className='outer'></div>
    </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bhaskar times
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user-profile">
                   Profile
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user-addnews">
                   Post
                </Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user-list">
                   Your News
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user-alllist">
                   All News
                </Link>
              </li>
              <li className="nav-item" onClick={logOut}>
                <Link className="nav-link active" aria-current="page" >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    </>
  )
}else if(userInfo?.userType=="admin"){
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Portal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-profile">
                   Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-newslist">
                   News
                </Link>
              </li> 
               <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin-ContactUS">
                   ContactUs
                </Link>
              </li>
               <li className="nav-item"  onClick={logOut}>
                <Link className="nav-link active" aria-current="page" >
                   LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    </>
  )
}else{
 return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Bhaskar Times
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">

                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  <IoNewspaper /> News
                </Link>
              </li>

              

              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  <GrGallery /> Gallery
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  < IoIosContacts /> Contact
                </Link>
              </li>
              <li className="nav-item">
               
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/feedback">
                  <FcFeedback /> Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registration">
                  
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  <IoLogInSharp /> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
    </>
  )
}

 
}
export default Navbar
