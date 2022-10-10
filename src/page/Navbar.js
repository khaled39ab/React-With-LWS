import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='icon'>
                <h1>Learn React</h1>
            </div>
            <div className='nav'>
                <Link to={'/'}>Home</Link>
                <Link to={'/class'}>Class</Link>
                <Link to={'/form'}>Form</Link>
            </div>
        </div>
    );
};

export default Navbar;