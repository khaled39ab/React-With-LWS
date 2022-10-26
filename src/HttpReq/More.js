import axios from 'axios';
import React, { Fragment } from 'react';
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
        <Fragment>

            <HttpNavbar></HttpNavbar>

            <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
                <h1>Best Quote</h1>
                <h4><span style={{ color: 'red' }}>Author:</span> {author}</h4>
                <h4><span style={{ color: 'red' }}>Quote:</span> <span style={{ color: 'green' }}>" {content} "</span></h4>
                <button onClick={getNewQuote}>Next</button>
            </div>

        </Fragment>
    );
};

export default More;