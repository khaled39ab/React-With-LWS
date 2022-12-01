import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
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
                <NavLink className='link' to={'/dynamic-route'}>Dynamic Route</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;