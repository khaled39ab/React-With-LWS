import React from 'react';
import Context2 from './Context2';
import { DataContext } from './DataContext';

const Context1 = () => {
    const data = {
        id: 101, name: 'Fulan'
    }

    return (
        <DataContext.Provider value={data}>
            <Context2 />
        </DataContext.Provider>
    );
};

export default Context1;