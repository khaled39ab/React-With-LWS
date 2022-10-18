import axios from 'axios';
import React, { Fragment } from 'react';
import { useState } from 'react';
import HttpNavbar from './HttpNavbar';

const QuotesGenerator = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');

    const url = '';

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

        e.authorText.target.reset();
        e.quotesText.target.reset();
    }
    return (
        <Fragment>

            <HttpNavbar></HttpNavbar>

            <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', textAlign: 'center' }} onClick={handleSubmit}>
                <h1>Add Quotes</h1>
                <h5>{author}</h5>
                <p>{quote}</p>
                <input type="text" name='authorText' placeholder='Author' required onChange={authorName} /> <br /> <br />
                <textarea name="QuotesText" id="" cols="30" rows="10" placeholder='Write Quote' onChange={quoteContent}></textarea> <br />
                <input type="submit" value="New Quote" />

            </div>

        </Fragment>
    );
};

export default QuotesGenerator;