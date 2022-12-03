import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DynamicNavbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <Link className='link' to={'/dynamic-home'}>Home</Link>
                <Link className='link' to={'/blogs'}>Blogs</Link>
                <Link className='link' to={'/contact'}>Contact</Link>
            </nav>
        </div>
    );
};

export default DynamicNavbar;