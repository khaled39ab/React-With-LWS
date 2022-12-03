import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from './blogsData';
import DynamicNavbar from './DynamicNavbar';

const Details = () => {
    /* 
    const { title } = useParams();
    const [details, setDetails] = useState('');
    useEffect(() => {
        const body = blogsData.filter(blog => blog.title === title)
        setDetails(body[0].desc)
    }, [title])
     */
    const location = useLocation();

    return (
        <div>
            <DynamicNavbar />

            <div>
                <h1>About: {location.state.title}</h1>
                <p>{location.state.desc}</p>
            </div>
        </div>
    );
};

export default Details;