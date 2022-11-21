import React from 'react';
import FAQ from './FAQ';
import './FAQs.css'

const faqsData = [
    {
        id: 1,
        title: "How can we reach you?",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta nihil neque molestias cupiditate obcaecati officiis magnam numquam iure doloremque.",
    },
    {
        id: 2,
        title: "When you are available?",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta nihil neque molestias cupiditate obcaecati officiis magnam numquam iure doloremque.",
    },
    {
        id: 3,
        title: "Where we can find all the videos?",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta nihil neque molestias cupiditate obcaecati officiis magnam numquam iure doloremque.",
    },
    {
        id: 4,
        title: "Can we learn full stack web development in a year?",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta nihil neque molestias cupiditate obcaecati officiis magnam numquam iure doloremque.",
    },
];

const FAQs = () => {
    return (
        <div className='faqs-container'>
            <section className='faqs'>
                <h1 style={{ textAlign: 'center' }}>Frequently Ask Questions</h1>
                {
                    faqsData.map(faq => <FAQ
                        key={faq.id}
                        faq={faq}
                    ></FAQ>)
                }
            </section>
        </div>
    );
};

export default FAQs;