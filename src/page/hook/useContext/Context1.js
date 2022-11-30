import React from 'react';
import Context2 from './Context2';

const Context1 = () => {
    const data = {
        id: 101, name: 'Fulan'
    }

    return (
        <div>
            <Context2 data={data}/>
        </div>
    );
};

export default Context1;