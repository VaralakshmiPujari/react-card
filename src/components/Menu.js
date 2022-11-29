import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-success'>
        <div className='container'>
            <NavLink to={`/`} className="navbar-brand">React Context Api</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className='navbar-toggler-icon'></span>
            </button>

        <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link">Home</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to={`/product`} className="nav-link">Product</NavLink>
                </li> */}
                <li className="nav-item">
                    <NavLink to={`/about`} className="nav-link">About</NavLink>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to={`/cart`} className="btn btn-light"><i className="bi bi-cart"></i></NavLink>
                </li>
            </ul>
        </div>
    </div> 
    </nav>
  )
}

export default Menu