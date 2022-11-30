import React, { useState } from 'react';
import Context2 from './Context2';
import { DataContext } from './DataContext';

const Context1 = () => {
    const data = {
        id: 101, name: 'Fulan'
    }
    const [text, setText] = useState('I am from parent component')

    return (
        <DataContext.Provider value={{data, text}}>
            <Context2 />
        </DataContext.Provider>
    );
};

export default Context1;