import React from 'react';

const Context4 = ({ data }) => {
    const { id, name } = data;
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
        </div>
    );
};

export default Context4;