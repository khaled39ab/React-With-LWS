import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = () => {
    const [users, setUsers] = useState(null);
    console.log(users);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return users;
};

export default useFetch;