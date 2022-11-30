import React from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext';

const Context4 = () => {
    const { data, text } = useContext(DataContext)
    const { id, name } = data;
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>I am child 4 component and got message from "{text}"</h3>
        </div>
    );
};

export default Context4;