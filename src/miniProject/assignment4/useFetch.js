import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Fetching is not successful...!')
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false)
            })
    }, [])

    return { users, isLoading, error };
};

export default useFetch;