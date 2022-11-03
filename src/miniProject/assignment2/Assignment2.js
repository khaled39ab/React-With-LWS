import React from 'react';

const Assignment2 = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '20px', 'margin': '10px' }}>
            <div>
                <h1>React Assignment - 1 : Product Listing App</h1> <br />

                <h4>Testing students skills on</h4>

                <ul>
                    <li>creating, styling & mapping components</li>
                    <li>props</li>
                </ul>

                <br />

                <h4> <strong>Assignment steps:</strong></h4>

                <ol>
                    <li> Create the Products component </li>
                    <li>Pass products data from the App.js to the Products component</li>
                    <li>In the Products component map the Product component based on the products data</li>
                    <li>Make all the necessary adjustment (styles, accessing props value etc.) in the Product component </li>
                    <li>finally check the project demo and try to match your one as much as possible. <a href="https://react-assignment-1-products-listing.netlify.app/" target="blank">Link</a></li>
                </ol>
            </div>
            <hr />
            <hr />
        </div>
    );
};

export default Assignment2;