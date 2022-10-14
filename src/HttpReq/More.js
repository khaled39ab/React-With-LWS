import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import HttpNavbar from './HttpNavbar';

const More = () => {
    const url = "https://api.quotable.io/random";
    const [quote, setQuote] = useState('')

    axios.get(url)
        .then(res => {
            setQuote(res.data);
        })
        .catch(err => {
            console.log(err);
        })

    const {content, author} = quote;
    return (
        <div>
            <HttpNavbar></HttpNavbar>
            <h1>Best Quote</h1>
            {
                // quote.map( quoteCon =>{

                // })
            }
            <p>{content}</p>
        </div>
    );
};

export default More;