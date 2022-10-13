import React from 'react';
import { Link } from 'react-router-dom';

const HttpNavbar = () => {
    const listStyle = {
        textDecoration: 'none',
        fontSize: '28px',
        backgroundColor: 'yellowgreen',
        padding: '10px',
        marginTop: '0',
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
        <div style={{ marginRight: '40px' }}>
            <ul>
                <li style={listStyle}>
                    <Link className='link' to={'/get'}>Get</Link>
                    <Link className='link' to={'/post'}>Post</Link>
                    <Link className='link' to={'/more'}>More</Link>
                </li>
            </ul>
        </div>
    );
};

export default HttpNavbar;