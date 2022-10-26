import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='icon'>
                <h1>LEARN REACT</h1>
            </div>
            <div className='nav'>
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/class'}>Class</Link>
                <Link className='link' to={'/others'}>Others</Link>
                <Link className='link' to={'/http'}>Http Req</Link>
            </div>
        </div>
    );
};

export default Navbar;