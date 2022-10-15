import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HttpNavbar from './HttpNavbar';

const More = () => {
    const url = "https://api.quotable.io/random";
    const [quote, setQuote] = useState('')

    const getQuote = () => {
        axios.get(url)
            .then(res => {
                setQuote(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        getQuote()
    }, [])

    const getNewQuote = () => {
        getQuote()
    }

    const { content, author } = quote;
    
    return (
        <div>
            <HttpNavbar></HttpNavbar>
            <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
                <h1>Best Quote</h1>
                <h4><span style={{color: 'red'}}>Author:</span> {author}</h4>
                <h5><span style={{color: 'red'}}>Quote:</span> {content}</h5>
                <button onClick={getNewQuote}>Next</button>
            </div>
        </div>
    );
};

export default More;