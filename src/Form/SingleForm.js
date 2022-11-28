import React from 'react';
import { useState } from 'react';

const SingleForm = () => {
    const [name, setName] = useState('');

    const nameField = (e) => {
        let inputName = e.target.value;
        setName(inputName)
    }
    
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <form>
                <h1>A simple form</h1>
                <p>{name}</p>
                <input onChange={nameField} type="text" placeholder='Your Name' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SingleForm;