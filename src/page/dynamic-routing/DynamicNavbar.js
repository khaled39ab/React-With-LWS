import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const DynamicNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='navbar'>
            <nav>
                <NavLink className='link' to={'/dynamic-home'}>Home</NavLink>
                <NavLink className='link' to={'/blogs'}>Blogs</NavLink>
                <NavLink className='link' to={'/contact'}>Contact</NavLink>
                <NavLink className='link' to={'/query-search'}>Query Search</NavLink>
                {isLoggedIn ?
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    >Log Out</button> :
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                    >Log In</button>}
            </nav>
        </div>
    );
};

export default DynamicNavbar;