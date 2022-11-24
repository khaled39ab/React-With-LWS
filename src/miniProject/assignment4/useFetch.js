import React from 'react';
import { useState } from 'react';

const useFetch = () => {
    const [users, setUsers] = useState([]);
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
};

export default useFetch;