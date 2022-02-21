import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/authActions'
import { clean } from '../actions/valueActions'

const Navbar = () => {
  
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(clean())
        dispatch(logout())
        
    }

    return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3 className="navbar-brand">Calculadora</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/app">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Register</a>
        </li>
        <li className="nav-item">
        <button className='btn btn-warning' onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar