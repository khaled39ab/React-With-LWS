import React from 'react';
import { useState } from 'react';

const SearchCountry = () => {
    const [search, setSearch] = useState('');

    const inputStyle = {
        fontSize: '1.5rem',
        border: '2px solid #34495e',
        borderRadius: '5px',
        color: 'red',
        backgroundColor: '#E0FFFF'
    }

    return (
        <div style={{textAlign: 'center', margin: '15px'}}>
            <input 
            style={inputStyle}
            type="text" 
            name='search'
            defaultValue={search}
            placeholder='Search Country'
            />
        </div>
    );
};

export default SearchCountry;