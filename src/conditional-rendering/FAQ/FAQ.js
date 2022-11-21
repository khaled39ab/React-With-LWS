import React from 'react';
import { useState } from 'react';
import './FAQ.css'

const FAQ = (props) => {
    const { title, desc } = props.faq;
    const [toggleFaq, setToggleFaq] = useState(false)
    return (
        <article className='faq'>
            <div>
                <h3>{title}</h3>
                <button onClick={() => setToggleFaq(!toggleFaq)}>
                    +
                </button>
            </div>
            {toggleFaq && <p>{desc}</p>}
        </article>
    );
};

export default FAQ;