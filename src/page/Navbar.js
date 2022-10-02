import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/class'}>Class</Link>
            <Link to={'/form'}>Form</Link>
        </>
    );
};

export default Navbar;