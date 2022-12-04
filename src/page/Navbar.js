import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='navbar-container'>
            <div className='icon'>
                <h1>LEARN REACT</h1>
            </div>
            <nav className='nav'>
                <NavLink className='link' to={'/'}>Home</NavLink>
                <NavLink className='link' to={'/class'}>Class</NavLink>
                <NavLink className='link' to={'/others'}>Others</NavLink>
                <NavLink className='link' to={'/http'}>Http Req</NavLink>
                <NavLink className='link' to={'/dynamic-home'}>Dynamic Route</NavLink>
                {isLoggedIn ?
                    <button
                        style={{ color: 'red' }}
                        className='login-btn'
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    >Log Out</button> :
                    <button
                        style={{ color: 'green' }}
                        className='login-btn'
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    >Log In</button>}
            </nav>
        </div>
    );
};

export default Navbar;