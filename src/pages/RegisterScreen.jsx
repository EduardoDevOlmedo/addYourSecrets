import React, { useState } from 'react';
import GoogleButton from 'react-google-button'
import { NavLink } from 'react-router-dom';
import { Login, Register } from '../actions/authActions';
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const {email, password, passwordConfirm, username} = data

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data, [e.target.name]: value
    })
  }


  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if(username.trim().length < 2 || username.trim().length > 15){
      console.log("Username must not be longer than 15 characters or shorter than 2 characters")
    }
    if(password.trim().length < 6){
      return;
    }else {
      if(password.trim() !== passwordConfirm.trim()){
        return;
      } 
    }
    dispatch(Register(email, password, username)) 
    navigate("/login")
  }

  return (
      <div className='container animate__animated animate__fadeInUp animate__animate__fadeInUp'>
          <h3>Register</h3>
        <div className='row'>
        <div className='row'>
      <form onSubmit={handleSubmit} style={{textAlign: "center"}} className='col s12'>
          <div>
        <div className="input-field col s6 m6 l12">
          <i className="material-icons prefix">assignment_ind</i>
          <input value={username} name="username" onChange={handleChange} id="icon_assignment_ind" type="text" className="validate" />
          <label htmlFor="icon_assignment_ind">Username</label>
        </div>
        <div className="input-field col s6 m6 l12">
          <i className="material-icons prefix">email</i>
          <input value={email} name="email" onChange={handleChange}  id="icon_email" type="email" className="validate" />
          <label htmlFor="icon_email">Email</label>
        </div>
        <div className="input-field col s12 m12 l12">
          <i className="material-icons prefix">vpn_key</i>
          <input  value={password} name="password" onChange={handleChange} id="icon_vpn_key"  type="password" className="validate" />
          <label htmlFor="icon_vpn_key">Password</label>
        </div>
        <div className="input-field col s12 m12 l12">
          <i className="material-icons prefix">vpn_key</i>
          <input value={passwordConfirm} name='passwordConfirm' onChange={handleChange} id="icon_vpn_keyy"   type="password" className="validate" />
          <label htmlFor="icon_vpn_keyy">Confirm Password</label>
        </div>
      </div>
        <div className='btn-sep'>
          <button className='btn blue' type='submit'>Login</button>
          <div style={{textAlign: "center", margin: 10}}>Already logged in?  <NavLink to="/login">Login</NavLink></div>
        </div>
          </form>
        </div>
        </div>
      </div>
  )
};

export default RegisterScreen;
