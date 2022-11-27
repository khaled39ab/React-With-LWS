import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SearchCountry = (props) => {
    const [search, setSearch] = useState('');

    const inputStyle = {
        fontSize: '1.5rem',
        border: '2px solid #34495e',
        borderRadius: '5px',
        color: 'brown',
        backgroundColor: '#E0FFFF'
    }

    const handleSearch = e =>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
        props.onSearch(search)
    },[search, props])

    return (
        <div style={{textAlign: 'center', margin: '15px'}}>
            <input 
            style={inputStyle}
            type="text" 
            name='search'
            defaultValue={search}
            placeholder='Search Country'
            onChange={handleSearch}
            />
        </div>
    );
};

export default SearchCountry;