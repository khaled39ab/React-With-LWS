import React from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext';

const Context4 = () => {
    const data = useContext(DataContext)
    const { id, name } = data;
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
        </div>
    );
};

export default Context4;