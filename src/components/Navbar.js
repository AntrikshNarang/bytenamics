import React from 'react'
import { NavLink } from 'react-router-dom';
// import Contact from './contact/Contact';
import './Navbar.css'


const Navbar=()=> {
  return (
    <div>
        
       <div className="header">
        <nav id="site-navigation" className="header-nav">
            <div className="branding">
                <a className="hov" href="/">Bytenamics</a>
            </div>
            <div className="mid">
                <ul className="navigation">
                    <li><a href="/" className="nav">Home</a> </li>
                    <li><a href="/" className="nav">Events</a> </li>
                    <li><a href='/' className="nav">About Us</a> </li>
                    <li><NavLink to="/Contact" className="nav" >Contact Us</NavLink> </li>
                </ul>
            </div>
            <div className="right">
                <button type="button" className="btn">Login</button>
                <button type="button" className="btn">Signup</button>
            </div>
        </nav>
    </div>

    </div>
  )
}
export default  Navbar;