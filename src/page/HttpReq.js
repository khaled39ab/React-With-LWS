import React from 'react';
import { Link } from 'react-router-dom';
const HttpReq = () => {
    const listStyle = {
        textDecoration: 'none',
        color: 'green',
        fontSize: '28px',
        backgroundColor: 'yellowgreen',
        padding: '10px',
        marginTop: '0',
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
        <div style={{marginRight: '40px'}}>
            <ul>
                <li style={listStyle}>
                    <Link className='link' to={'/country-info'}>Country Info</Link>
                </li>
            </ul>
        </div>
    );
};

export default HttpReq;