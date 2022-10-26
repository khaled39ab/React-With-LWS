import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Others = () => {
    const listStyle = {
        textDecoration: 'none',
        fontSize: '28px',
        backgroundColor: 'purple',
        padding: '10px',
        color: 'white',
        marginTop: '0',
        display: 'flex',
        justifyContent: 'space-around'
    }
    return (
        <div>
            <div style={{ marginRight: '40px' }}>
                <ul>
                    <li style={listStyle}>
                        <Link className='link' to={'/form'}>Form</Link>
                        <Link className='link' to={'/'}>Card</Link>
                        <Link className='link' to={'/'}>More</Link>
                    </li>
                </ul>
            </div>
            <Form></Form>
        </div>
    );
};

export default Others;