import React from 'react';
import { NavLink } from 'react-router-dom';

const DynamicNavbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <NavLink className='link' to={'/dynamic-home'}>Home</NavLink>
                <NavLink className='link' to={'/blogs'}>Blogs</NavLink>
                <NavLink className='link' to={'/contact'}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default DynamicNavbar;