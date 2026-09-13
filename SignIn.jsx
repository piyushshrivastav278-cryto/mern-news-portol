
{/*import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'*/}

{/*const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(16),
  })

const Login = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async(data) => {
    const response = await axios.post('http://localhost:5000/api/login', data);
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "success"
      });
      // navigate('/user-profile')
      localStorage.setItem("userInfo",JSON.stringify(response?.data?.data));
   if (response?.data?.data?.userType ==="user") {
        navigate('/user-profile')
      } else if (response?.data?.data?.userType === "admin") {
        navigate('/admin-profile')
      }

    } else {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "error"
      });
    }

  }
return (
   <>
    Login
     <form onSubmit={handleSubmit((d) => handleLogin(d))}/>
  <div className='Admin'>
  <div className='Adm'>Admin <b style={{color:"#7F0000"}}>Login</b>
    <br />
   <label className='emi1' style={{fontSize:"15px",marginRight:"20px"}} >  E-maill--</label>
     <input type='email' className='emi' placeholder='Enter your email' {...register('email')}> </input><br />
      {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
     <label className='emi1' style={{fontSize:"15px",marginRight:"20px"}}>Password</label>
     <input type='password' className='pass' placeholder='Enter your password' {...register('password')}></input> <br />
      {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
     <button className='form-button'>Login</button>
   
       </div>
  </div>
   
   </>
  )
} 

export default Login*/}





     
      
    
   






import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(16),
  })

const SignIn = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    const response = await axios.post('http://localhost:9000/api/login', data);
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "success"
      });
      // navigate('/user-profile')
      localStorage.setItem("userInfo",JSON.stringify(response?.data?.data));

     
            if (response?.data?.data?.userType == "user") {
        navigate('/user-profile')
      } else if (response?.data?.data?.userType == "admin") {
        navigate('/admin-profile')
      }

    } else {
      Swal.fire({
        title: "Login",
        text: response?.data?.message,
        icon: "error"
      });
    }

  }



   return (
    <>
      <Navbar/>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h3 className="text-center mb-4">
          <span className="text-danger fw-bold">Login</span>
        </h3>

        <form onSubmit={handleSubmit((d) => handleLogin(d))}>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && <p className='text-danger'>{errors.email?.message}</p>}
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
          </div>

          <input type="submit" className="btn btn-danger w-40" value="Login" />

        </form>
      </div>
    </div>
    </>
  )
}

export default SignIn 



