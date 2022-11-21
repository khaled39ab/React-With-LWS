import React from 'react';

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
        <div style={{ color: 'white', backgroundColor: '#444' }}>
            <h1 style={{ textAlign: 'center' }}>Frequently Ask Questions</h1>
        </div>
    );
};

export default FAQs;