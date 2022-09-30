import React from 'react';

const SingleForm = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center'}}>
            <form action="">
                <h1>A simple form</h1>
                <input type="text" placeholder='Your Name' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SingleForm;