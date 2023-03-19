import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';



const Navbar = (props) => {
    const navigate = useNavigate();
    const logout = (e) => {
        localStorage.removeItem('token');
        props.settoken(false);
        navigate('/');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        {!props.token?(<><Link className="btn btn-sm btn-dark me-2" to='/login'>Login</Link><Link className="btn btn-sm btn-outline-secondary" to='/signup'>Sign Up</Link></>):(<a className="btn btn-sm btn-outline-secondary" to='/' onClick={logout}>Log Out</a>)}
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;