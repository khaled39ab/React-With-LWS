import React from 'react';

const Jsx = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px' }}>
            <h1>What is JSX?</h1>
            <p>
                JSX stands for JavaScript XML. <br />

                JSX allows us to write HTML in React. <br />

                JSX makes it easier to write and add HTML in React.
            </p>
            <p>
                It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.
            </p>
            <h2>Benefit of JSX</h2>
            <p>
                JSX is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. Instead of separating the markup and logic in separated files, React uses components for this purpose. We will learn about components in detail in further articles.
                <br />
                <strong>Ex. Syntax:</strong> <br />
                const element = &lt;h1&gt;Welcome to React.&lt;/h1&gt;;
            </p>

        </div>
    );
};

export default Jsx;