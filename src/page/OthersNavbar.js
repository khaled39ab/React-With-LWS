import React from 'react';
import { Link } from 'react-router-dom';

const OthersNavbar = () => {
    const listStyle = {
        textDecoration: 'none',
        fontSize: '28px',
        backgroundColor: 'aqua',
        padding: '10px',
        marginTop: '0',
        marginLeft: '40px',
        display: 'flex',
        justifyContent: 'space-around'
    }
    
    return (
        <div style={{ marginRight: '40px' }}>
            <ul>
                <li style={listStyle}>
                    <Link className='link' to={'/form'}>Form</Link>
                    <Link className='link' to={'/card'}>Card</Link>
                    <Link className='link' to={'/all-project'}>All Mini Project</Link>
                    <Link className='link' to={'/conditional-rendering'}>Conditional Rendering</Link>
                    <Link className='link' to={'/todo'}>Todo App</Link>
                </li>
            </ul>
        </div>
    );
};

export default OthersNavbar;