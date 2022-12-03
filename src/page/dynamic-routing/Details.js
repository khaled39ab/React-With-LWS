import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from './blogsData';
import DynamicNavbar from './DynamicNavbar';

const Details = () => {
    const { title } = useParams();
    const [details, setDetails] = useState('');

    useEffect(() => {
        const body = blogsData.filter(blog => blog.title === title)
        setDetails(body[0].desc)
    }, [title])

    return (
        <div>
            <DynamicNavbar />

            <div>
                <h1>About: {title}</h1>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Details;