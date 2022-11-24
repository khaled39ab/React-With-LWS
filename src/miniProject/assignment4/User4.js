import React from 'react';
import './style4.css'

const User4 = ({ id, name, email, phone }) => {
    return (
        <article className="user4">
            <h3>{id}</h3>
            <h3 className="user4-name">{name}</h3>
            <p className="user4-email">{email}</p>
            <a className="user4-phone" href={'tel:+' + phone}>
                {phone}
            </a>
        </article>
    );
};

export default User4;