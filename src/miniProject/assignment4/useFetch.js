import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = () => {
    const [usersData, setUsersData] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsersData(data))
    }, [])
    
    return usersData;
};

export default useFetch;