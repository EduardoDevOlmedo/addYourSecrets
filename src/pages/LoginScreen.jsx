import React, { useState } from 'react';
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {googleLogin} from '../actions/authActions';
import {firebase} from '../firebase/config'
import { Login } from '../actions/authActions';

const LoginScreen = () => {
  
  const [error, setError] = useState({
    state: false,
    value: ""
  })
  
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = data

  const dispatch = useDispatch()

  const handleGoogleLogin = () => {
    dispatch(googleLogin(12345, "Edu"))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === "" || !email.trim().includes("@")) {
      return;
    }
    if(password.trim().length < 6){
      return;
    }
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({user}) => {
          console.log(user)
          dispatch(Login(user.uid, user.displayName))
        })
        .catch(err => setError({
          state: true,
          value: err
        }))
    
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data, [e.target.name]: value
    })
  }

  const Error = ({errorName, error}) => {
    return (
      <p>
          {`An error has happened: ${errorName}: ${error}. Try again`}
        </p>
    )
  }

  const  {state, value} = error
  let stringError = JSON.parse((JSON.stringify(value)))
  const {code, name} = stringError

  return (
      <div className='container animate__animated animate__fadeInUp animate__animate__fadeInUp'>
          <h3>Login Page</h3>
        <div className='row'>
        <div className='row'>
      <form onSubmit={handleSubmit} style={{textAlign: "center"}} className='col s12'>
          <div>
        <div className="input-field col s6 m6 l12">
          <i className="material-icons prefix">account_circle</i>
          <input onChange={handleChange} name="email" value={email} id="icon_prefix" type="text" className="validate" />
          <label htmlFor="icon_prefix">Email</label>
        </div>
        <div className="input-field col s6 m6 l12">
          <i className="material-icons prefix">vpn_key</i>
          <input onChange={handleChange} name="password"  value={password} id="icon_vpn_key" type="password" className="validate" />
          <label htmlFor="icon_vpn_key">Password</label>
        </div>
      </div>
      {
          state && <Error errorName={name} error={code}/>
      }
        <div className='btn-sep'>
          <button className='btn blue' type='submit'>Login</button>
          <div style={{textAlign: "center", margin: 10}}>Not registered yet? Register  <NavLink to="/register">here</NavLink></div>
          <p style={{margin: "10px"}}>Or</p>
          <GoogleButton type='light' style={{margin: "0px auto"}} onClick={handleGoogleLogin}/>
        </div>
          </form>
        </div>
        </div>
      </div>
  )
};

export default LoginScreen;
