import React from 'react';
import User4 from './User4';
import './style4.css'

const Users4 = (props) => {
    
    return (
        <section className="users4">
            {props.users.map((user) => (
                <User4 key={user.id} {...user} />
            ))}
        </section>
    );
};

export default Users4;