import React from 'react';
import { useContext } from 'react';
import Context4 from './Context4';
import { DataContext } from './DataContext';

const Context3 = () => {
    const {text} = useContext(DataContext)
    return (
        <div>
            <Context4 />
            <h3>{text}</h3>
        </div>
    );
};

export default Context3;