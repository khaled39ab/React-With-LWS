import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DynamicNavbar = () => {
    return (
        <div>
            <ul>
                <nav>
                    <Link className='link' to={'/dynamic-home'}>Dynamic Home</Link>
                    <Link className='link' to={'/blogs'}>Blogs</Link>
                    <Link className='link' to={'/contact'}>Contact</Link>
                </nav>
            </ul>
        </div>
    );
};

export default DynamicNavbar;