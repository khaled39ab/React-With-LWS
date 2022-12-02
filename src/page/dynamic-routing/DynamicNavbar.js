import React from 'react';
import { NavLink } from 'react-router-dom';

const DynamicNavbar = () => {
    return (
        <nav>
            <NavLink className='link' to={'/dynamic-home'}>Dynamic Home</NavLink>
            <NavLink className='link' to={'/blogs'}>Blogs</NavLink>
            <NavLink className='link' to={'/contact'}>Contact</NavLink>
        </nav>
    );
};

export default DynamicNavbar;