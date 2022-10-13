import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import HttpReq from '../page/HttpReq';

const QuotesGenerator = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    const url = 'https://api.quotable.io/random';

    const authorName = (e) => {
        setAuthor(e.target.value)
    }

    const quoteContent = e => {
        setQuote(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(url, {
            author: { author },
            content: { quote }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <HttpReq></HttpReq>
            <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', textAlign: 'center' }} onClick={handleSubmit}>
                <h1>Add Quotes</h1>
                <h5>{author}</h5>
                <p>{quote}</p>
                <input type="text" placeholder='Author' required onChange={authorName} /> <br /> <br />
                <textarea name="Quotes" id="" cols="30" rows="10" placeholder='Write Quote' onChange={quoteContent}></textarea> <br />
                <input type="submit" value="New Quote" />
            </div>
        </div>
    );
};

export default QuotesGenerator;