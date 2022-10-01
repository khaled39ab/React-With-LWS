import React from 'react';

const MultipleInput = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', 'textAlign': 'center' }}>
            <h1>Handle multiple input</h1>
            <form action="">
                <h4>Input your data</h4>
                <input type="text" placeholder='Enter Your Name' /> <br />
                <input type="email" placeholder='Enter Your Email' /> <br />
                <textarea name="address" id="" cols="21" rows="2" placeholder='Enter Your Address'></textarea> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MultipleInput;