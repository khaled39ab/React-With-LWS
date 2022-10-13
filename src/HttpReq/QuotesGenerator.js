import React from 'react';

const QuotesGenerator = () => {
    return (
        <div style={{ 'border': '4px solid cyan', 'padding': '10px', 'margin': '10px', textAlign: 'center' }}>
            <h1>Add Quotes</h1>
            <input type="text" placeholder='Author' required/> <br /> <br />
            <textarea name="Quotes" id="" cols="30" rows="10" placeholder='Write Quote'></textarea> <br /> 
            <input type="submit" value="Add Quote" />
        </div>
    );
};

export default QuotesGenerator;