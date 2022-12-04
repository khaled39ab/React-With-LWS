import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

const DynamicNavbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <NavLink className='link' to={'/dynamic-home'}>Home</NavLink>
                <NavLink className='link' to={'/blogs'}>Blogs</NavLink>
                <NavLink className='link' to={'/contact'}>Contact</NavLink>
                <NavLink className='link' to={'/query-search'}>Query Search</NavLink>
                <Link><LoginPage /></Link>
            </nav>
        </div>
    );
};

export default DynamicNavbar;